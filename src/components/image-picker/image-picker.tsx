"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./image-picker.module.css";

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPickedImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={styles["input-container"]}>
      <div className={styles.preview}>
        {!pickedImage && <p>Image is not selected yet.</p>}
        {pickedImage && (
          <Image src={pickedImage} alt="Preview of your selected image." fill />
        )}
      </div>
      <label htmlFor="image">Choose an image</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="imag/*"
        onChange={(e) => handleImageChange(e)}
        required
      />
    </div>
  );
}
