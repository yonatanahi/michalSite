import React, { Component } from "react";
import Tree from "../assets/Tree.jpg";
import Woman from "../assets/Woman.jpg";
import Temple from "../assets/Temple.jpg";
import Iceberg from "../assets/Iceberg.jpg";

class Gallery extends Component {
  render() {
    return (
      <div>
        <img src={Tree} alt="" className="gallery" />
        <img src={Woman} alt="" className="gallery" />
        <img src={Temple} alt="" className="gallery" />
        <img src={Iceberg} alt="" className="gallery" />
      </div>
    );
  }
}

export default Gallery;
