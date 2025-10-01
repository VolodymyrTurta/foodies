"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImage from "@/assets/burger.jpg";
import curryImage from "@/assets/curry.jpg";
import dumplingsImage from "@/assets/dumplings.jpg";
import macncheeseImage from "@/assets/macncheese.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import schnitzelImage from "@/assets/schnitzel.jpg";
import tomatoSaladImage from "@/assets/tomato-salad.jpg";
import styles from "./image-slideshow.module.css";

export const images = [
  { src: burgerImage, alt: "Burger image" },
  { src: curryImage, alt: "Curry image" },
  { src: dumplingsImage, alt: "Dumplings image" },
  { src: macncheeseImage, alt: "Mac n cheese image" },
  { src: pizzaImage, alt: "Pizza image" },
  { src: schnitzelImage, alt: "Schnitzel image" },
  { src: tomatoSaladImage, alt: "Tomato salad image" },
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <div
          key={image.src.src}
          className={`${styles.slide} ${
            currentIndex === index ? styles.active : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            priority
          ></Image>
        </div>
      ))}
    </div>
  );
}
