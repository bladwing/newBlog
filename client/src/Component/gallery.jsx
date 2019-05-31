import React from 'react'

import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import '../../node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss';


import slide1 from "../static/images/gallery/1.jpg";
import slide2 from "../static/images/gallery/2.jpg";
import slide3 from "../static/images/gallery/3.jpg";
import slide4 from "../static/images/gallery/4.jpg";

import ImageGallery from 'react-image-gallery';
 
export default class MyComponent extends React.Component {
 
  render() {
 
    const images = [
      {
        original: slide1,
        thumbnail: slide1,
      },
      {
        original: slide2,
        thumbnail: slide2
      },
      {
        original: slide3,
        thumbnail: slide3
      },
      {
      	original: slide4,
        thumbnail: slide4
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
};