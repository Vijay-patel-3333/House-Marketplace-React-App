import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const fillMatch = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={fillMatch("/") ? "#2c2c2c" : "#8c8c8c"}
              width="36px"
              height="36px"
            />
            <p
              className={
                fillMatch("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={fillMatch("/offers") ? "#2c2c2c" : "#8c8c8c"}
              width="36px"
              height="36px"
            />
            <p
              className={
                fillMatch("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={fillMatch("/profile") ? "#2c2c2c" : "#8c8c8c"}
              width="36px"
              height="36px"
            />
            <p
              className={
                fillMatch("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
