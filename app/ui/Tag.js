import styles from "./Tag.module.css";
import clsx from "clsx";

export function Tag({ children, difficulty, muscle, equipment, className }) {
  const classes = clsx({
    [styles.tag]: true,
    [styles[difficulty]]: difficulty,
    [styles.muscle]: muscle,
    [styles[muscle]]: muscle,
    [styles.equipment]: equipment,
    [styles[equipment]]: equipment,
    [className]: className
  });

  return <span className={classes}>{children}</span>;
}
