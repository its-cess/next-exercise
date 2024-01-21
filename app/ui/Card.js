import styles from "./Card.module.css";
import clsx from "clsx";

export function Card({ children, className }) {
  const classes = clsx({
    [styles.card]: true,
    [className]: className
  });

  return <div className={classes}>{children}</div>;
}
