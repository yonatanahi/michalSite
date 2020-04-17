import React, { Component } from "react";
import Tree from "../assets/Tree.jpg";
import Woman from "../assets/Woman.jpg";
import Temple from "../assets/Temple.jpg";
import Iceberg from "../assets/Iceberg.jpg";

class Gallery extends Component {
  render() {
    return (
      <div>
        <img src={Tree} alt="" />
        <img src={Woman} alt="" />
        <img src={Temple} alt="" />
        <img src={Iceberg} alt="" />
      </div>
    );
  }
}

export default Gallery;
