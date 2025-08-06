import "./Navbar.css";
import logo from "../../assets/logo.png";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

import { useEffect, useRef } from "react";
import { logOut } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, loading } = useAuth();

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY >= 80) {
        navRef.current.classList.add("navbar-dark");
      } else {
        navRef.current.classList.remove("navbar-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return null;

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>home</li>
          <li>tv shows</li>
          <li>movies</li>
          <li>new & popular</li>
          <li>my list</li>
          <li>browse by language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <p>children</p>
        <img src={bell_icon} alt="bell" className="icons" />

        {user ? (
          <div className="navbar-profile">
            <img src={profile_img} alt="profile" className="profile" />
            <img src={caret_icon} alt="caret" />
            <div className="dropdown">
              <p onClick={logOut}>Sign out of Netflix</p>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
