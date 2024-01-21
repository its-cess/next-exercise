import styles from "./Tag.module.css";
import clsx from "clsx";

export function Tag({ children, difficulty, className }) {
  const classes = clsx({
    [styles.tag]: true,
    [styles.beginner]: difficulty === "beginner",
    [styles.intermediate]: difficulty === "intermediate",
    [styles.expert]: difficulty === "expert",
    [className]: className
  });

  return <span className={classes}>{children}</span>;
}
