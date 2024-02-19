"use client";
import clsx from "clsx";
import Link from "next/link";
import styles from "./Search.module.css";
import { useState } from "react";

export function Search({ placeholder, onChange, className }) {
  const classes = clsx({
    [placeholder]: placeholder,
    [onChange]: onChange,
    [className]: className
  });

  const [name, setName] = useState("");

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
      <input
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <Link href={`/exercises/name/${name}`}>
        <button>Search</button>
      </Link>
    </form>
  );
}
