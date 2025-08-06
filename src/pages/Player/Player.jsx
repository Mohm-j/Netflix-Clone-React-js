import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../api/api";

import netflix_spinner from "../../assets/netflix_spinner.gif";

const Player = () => {
  const [apiData, setApiData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${id}/videos`, {
          params: { language: "en-US" },
        });
        setApiData(response.data.results?.[0] || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideo();
  }, [id]);

  if (!apiData) {
    return (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="loader" />
      </div>
    );
  }

  return (
    <div className="player">
      <Link to="/">
        <img src={back_arrow_icon} alt="Back" />
      </Link>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ""}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
