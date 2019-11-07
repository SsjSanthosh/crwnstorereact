import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./MenuDirectory.scss";

export default class MenuDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: 1
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
          id: 2
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: 3
        },
        {
          title: "Women",
          imageUrl:
            "https://images.unsplash.com/photo-1500517484800-e4676bd66290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
          id: 4,
          large: true
        },
        {
          title: "Men",
          imageUrl:
            "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          id: 5,
          large: true
        }
      ]
    };
  }
  render() {
    return (
      <div className="MenuDirectory">
        {this.state.sections.map(({ title, imageUrl, id, large }) => (
          <MenuItem key={id} title={title} url={imageUrl} large={large} />
        ))}
      </div>
    );
  }
}
