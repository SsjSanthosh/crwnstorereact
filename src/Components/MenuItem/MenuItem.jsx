import React from "react";
import "./MenuItem.scss";
import { Link } from "react-router-dom";
export default function MenuItem({ title, url, large }) {
  console.log();
  return (
    <div
      className={`MenuItem ${large ? "large" : ""}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <Link to={`/shop/${title.toLowerCase()}`}>
        <div className="MenuItemContent">
          <h3 className="MenuTitle">{title.toUpperCase()}</h3>
          <h4 className="MenuSubtitle">SHOP NOW</h4>
        </div>
      </Link>
    </div>
  );
}
