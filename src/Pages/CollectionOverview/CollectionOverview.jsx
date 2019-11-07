import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../Components/PreviewComponent/CollectionPreview";
function CollectionOverview(props) {
  const { collections } = props;
  return (
    <div>
      <h1>Shop Page</h1>
      {collections.map(item => (
        <CollectionPreview
          title={item.title}
          items={item.items}
          key={item.id}
        />
      ))}
    </div>
  );
}
const mapStateToProps = state => ({
  collections: state.shop.collections
});
export default connect(mapStateToProps)(CollectionOverview);
