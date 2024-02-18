"use client";
import clsx from "clsx";
import styles from "./Search.module.css";
import { fetchProgramByName } from "../lib/data";
import { useDebouncedCallback } from "use-debounce";
import { useState, startTransition } from "react";
import { Card } from "../ui/Card";

export function Search({ placeholder, onChange, className }) {
  const classes = clsx({
    [placeholder]: placeholder,
    [onChange]: onChange,
    [className]: className
  });

  const [exerciseSearch, setExerciseSearch] = useState([]);

  const handleSearch = useDebouncedCallback((e) => {
    startTransition(async (searchTerm) => {
      searchTerm = e.target.value;
      setExerciseSearch(await fetchProgramByName(searchTerm));
    });
  }, 300);

  return (
    <>
      <input
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <div>
        <section className={styles.searchSection}>
          {exerciseSearch && (
            <div className={styles.searchWrapper}>
              {exerciseSearch.map((ex) => (
                <Card key={ex.name} small>
                  {ex.name}
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
