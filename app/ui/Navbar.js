import styles from "./Navbar.module.css";
import clsx from "clsx";

export function Navbar({ children, className }) {
  const classes = clsx({
    [styles.navbar]: true,
    [className]: className
  });

  return <nav className={classes}>{children}</nav>;
}
