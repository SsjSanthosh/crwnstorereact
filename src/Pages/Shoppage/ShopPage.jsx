import React, { Component } from "react";
import "./ShopPage.scss";
import { Route } from "react-router-dom";

import CollectionOverview from "../CollectionOverview/CollectionOverview";
import Category from "../Category/Category";
class ShopPage extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        {" "}
        <Route path={`${match.path}/:category`} component={Category} />
        <Route exact path={`${match.path}`} component={CollectionOverview} />
      </div>
    );
  }
}

export default ShopPage;
