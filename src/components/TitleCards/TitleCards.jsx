import "./TitleCards.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/api";

const TitleCards = ({ title, category = "now_playing" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${category}`, {
          params: { language: "en-US", page: 1 },
        });
        setApiData(response.data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => (
          <Link to={`/player/${card.id}`} key={card.id} className="card">
            <img
              src={
                card.poster_path
                  ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
                  : "/path/to/default-image.jpg"
              }
              alt={card.original_title || "Movie poster"}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
