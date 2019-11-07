import React, { Component } from "react";
import "./ShopPage.scss";
import { Route } from "react-router-dom";
import CollectionPreview from "../../Components/PreviewComponent/CollectionPreview";
import { connect } from "react-redux";
import CollectionOverview from "../CollectionOverview/CollectionOverview";
import Category from "../Category/Category";
class ShopPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { collections, match } = this.props;
    console.log(match.path);
    return (
      <div>
        {" "}
        <Route path={`${match.path}/:category`} component={Category} />
        <Route exact path={`${match.path}`} component={CollectionOverview} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps)(ShopPage);
