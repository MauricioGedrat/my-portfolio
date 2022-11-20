import { Carousel } from "flowbite-react";
import React from "react";

export const Slide = () => {
  return (
    <div className="h-screen">
      <Carousel slideInterval={5000} draggable={false} indicators={false}>
        <img
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
      </Carousel>
    </div>
  );
};
