import React, { Component } from "react";
import Broken_trees from "../assets/Broken_trees.jpg";
import Home from "../assets/Home.jpg";
import Temple from "../assets/Temple.jpg";
import Iceberg from "../assets/Iceberg.jpg";

class Gallery extends Component {
  render() {
    return (
      <div id="galleryDiv">
        <img src={Broken_trees} alt="" className="galleryImage" width="200px" height="300px"/>
        <img src={Home} alt="" className="galleryImage" />
        <img src={Temple} alt="" className="galleryImage" />
        <img src={Iceberg} alt="" className="galleryImage" />
      </div>
    );
  }
}

export default Gallery;
