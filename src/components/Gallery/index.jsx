import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalImage from "react-modal-image";
import "./gallery.css"

const GalleryPage = () => {
  const images = [
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
    "./dummy.jpeg",
   
  ];

  return (
    <div className="bg-purple-50 min-h-screen p-5">
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">
        Stunning Gallery
      </h1>

      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="mb-8"
      >
        {images.slice(0, 5).map((img, index) => (
          <div key={index} className="carrousel_height">
            <img
            height={"auto"}
            width={"auto"}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>

      {/* Image Grid Section */}
      <div className="grid grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <ModalImage
              small={img}
              large={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg transition-transform transform group-hover:scale-105 shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
