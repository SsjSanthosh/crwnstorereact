import React from "react";
import "./CollectionPreview.scss";
import Button from "../Buttons/Button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
function CollectionPreview(props) {
  const { addItem } = props;
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
            <div
              onClick={() => {
                props.addItem(item);
              }}
            >
              {}
              <Button value="Add to cart" inverted={true}></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionPreview);
