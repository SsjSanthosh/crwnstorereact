import React, { Component } from "react";
import "./ShopPage.scss";
import shopData from "./shopdata";
import CollectionPreview from "../../Components/PreviewComponent/CollectionPreview";
import { tsImportType } from "@babel/types";
export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: shopData
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div>
        <h1>Shop Page</h1>
        {collection.map(item => (
          <CollectionPreview
            title={item.title}
            items={item.items}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}
