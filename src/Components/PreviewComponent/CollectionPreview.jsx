import React from "react";
import "./CollectionPreview.scss";
export default function CollectionPreview(props) {
  return (
    <div className="CollectionPreview">
      <h1 className="CollectionPreviewTitle">{props.title.toUpperCase()}</h1>
      <div className="CollectionPreviewItems">
        {props.items.slice(0, 4).map(item => (
          <div className="CollectionPreviewItem">
            <img src={item.imageUrl} />
            <div className="CollectionPreviewContent">
              <h3>{item.name}</h3>
              <h3>{item.price} INR</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
