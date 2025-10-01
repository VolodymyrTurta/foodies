"use client";

import { useState } from "react";

import Image from "next/image";

// import { images } from "../image-slideshow/image-slideshow";
import styles from "./image-picker.module.css";

import burgerImage from "@/assets/burger.jpg";
import curryImage from "@/assets/curry.jpg";
import dumplingsImage from "@/assets/dumplings.jpg";
import macncheeseImage from "@/assets/macncheese.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import schnitzelImage from "@/assets/schnitzel.jpg";
import tomatoSaladImage from "@/assets/tomato-salad.jpg";

export const images = [
  { src: burgerImage, alt: "Burger image" },
  { src: curryImage, alt: "Curry image" },
  { src: dumplingsImage, alt: "Dumplings image" },
  { src: macncheeseImage, alt: "Mac n cheese image" },
  { src: pizzaImage, alt: "Pizza image" },
  { src: schnitzelImage, alt: "Schnitzel image" },
  { src: tomatoSaladImage, alt: "Tomato salad image" },
];

export default function ImagePicker() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  function handleImageClick(imageIndex: number) {
    setSelectedImageIndex(imageIndex);
  }

  return (
    <>
      <h2 className={styles.title}>Choose an image:</h2>
      <ul className={styles["image-picker"]}>
        {images.map((image, i) => (
          <li key={image.src.src}>
            <Image
              className={selectedImageIndex === i ? styles.choosen : ""}
              onClick={() => handleImageClick(i)}
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
