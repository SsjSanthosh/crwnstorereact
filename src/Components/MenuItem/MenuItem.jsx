import React from "react";
import "./MenuItem.scss";
export default function MenuItem({ title, url, large }) {
  console.log();
  return (
    <div
      className={`MenuItem ${large ? "large" : ""}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="MenuItemContent">
        <h3 className="MenuTitle">{title.toUpperCase()}</h3>
        <h4 className="MenuSubtitle">SHOP NOW</h4>
      </div>
    </div>
  );
}
