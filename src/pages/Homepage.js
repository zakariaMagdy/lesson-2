import React from "react";
import "./Homepage.scss";
import MenuContainer from "../componetns/menuContainer/MenuContainer";

export default class HomePage extends React.Component {
  state = {
    titles: [
      {
        title: "one",
        img_url: "",
        id: 1
      },
      {
        title: "two",
        img_url: "",
        id: 2
      },
      {
        title: "three",
        img_url: "",
        id: 3
      },
      {
        title: "four",
        img_url: "",
        id: 4
      },
      {
        title: "five",
        img_url: "",
        id: 5
      }
    ]
  };

  render() {
    return (
      <div className="homepage">
        <h1>Welcome to my Homepage</h1>
        <MenuContainer titles={this.state.titles} />
      </div>
    );
  }
}
