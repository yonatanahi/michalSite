import React, { Component } from "react";
import Tree from "../assets/Tree.jpg";
import Woman from "../assets/Woman.jpg";
import Temple from "../assets/Temple.jpg";
import Iceberg from "../assets/Iceberg.jpg";

class Gallery extends Component {
  render() {
    return (
      <div id="galleryDiv">
        <img src={Tree} alt="" className="galleryImage" />
        <img src={Woman} alt="" className="galleryImage" />
        <img src={Temple} alt="" className="galleryImage" />
        <img src={Iceberg} alt="" className="galleryImage" />
      </div>
    );
  }
}

export default Gallery;
