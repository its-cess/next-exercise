"use client";
import styles from "./StarIcon.module.css";
import clsx from "clsx";
import { useState } from "react";

export function StarIcon({ className }) {
  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => {
    setIsFav((prevIsFav) => !prevIsFav);
  };

  const classes = clsx({
    [styles.starIcon]: true,
    [styles.isFav]: isFav,
    [className]: className
  });

  return (
    <span className={classes} onClick={toggleFav}>
      STAR
    </span>
  );
}
