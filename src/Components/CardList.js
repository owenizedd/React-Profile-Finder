import React, { Component } from "react";
import "./CardList.style.css";
class CardList extends Component {
  render() {
    return <div className="card-container">{this.props.cards}</div>;
  }
}

export default CardList;
