import styles from "./Card.module.css";
import clsx from "clsx";

export function Card({ children, small, className }) {
  const classes = clsx({
    [styles.card]: true,
    [styles.small]: small,
    [className]: className
  });

  return <div className={classes}>{children}</div>;
}
