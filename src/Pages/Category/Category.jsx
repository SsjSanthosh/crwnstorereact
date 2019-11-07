import React from "react";
import CollectionPreview from "../../Components/PreviewComponent/CollectionPreview";
import Button from "../../Components/Buttons/Button";
import { addItem } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
function Category(props) {
  const { match, collections, addItem } = props;
  const mapStringToId = {
    hats: 1,
    jackets: 2,
    sneakers: 3,
    women: 4,
    men: 5
  };
  const category = mapStringToId[match.params.category];
  let data = collections.find(c => c.id === category);

  let collection = data.items;

  return (
    <div>
      <div className="CollectionPreview">
        <h1 className="CollectionPreviewTitle">
          {match.params.category.toUpperCase()}
        </h1>
        <div className="CollectionPreviewItems">
          {collection.map(item => (
            <div className="CollectionPreviewItem">
              <img src={item.imageUrl} />
              <div className="CollectionPreviewContent">
                <h3>{item.name}</h3>
                <h3>{item.price} INR</h3>
              </div>
              <div
                onClick={() => {
                  addItem(item);
                }}
              >
                {}
                <Button value="Add to cart" inverted={true}></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  collections: state.shop.collections
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
