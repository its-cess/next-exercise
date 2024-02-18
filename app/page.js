import styles from "./page.module.css";
import Link from "next/link";
import { Card } from "./ui/Card";
import { Search } from "./ui/Search";

export default async function Page() {
  const allProgramTypes = [
    "cardio",
    "olympic_weightlifting",
    "plyometrics",
    "powerlifting",
    "strength",
    "stretching",
    "strongman"
  ];

  const allMuscleGroups = [
    "abdominals",
    "abductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps"
  ];

  return (
    <main>
      <div>
        <h3>Hey, Cecily</h3>
        <h1>Pick your workout</h1>
        <Search placeholder="Search exercises" />
      </div>
      <section className={styles.programSection}>
        <h2>Program type</h2>
        <div className={styles.typeWrapper}>
          {allProgramTypes.map((type) => (
            <Link href={`/exercises/type/${type}`} key={type}>
              <Card small>{type.replace("_", " ")}</Card>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.muscleSection}>
        <h2>Muscle groups</h2>
        <div className={styles.muscleWrapper}>
          {allMuscleGroups.map((muscle) => (
            <Link href={`/exercises/muscle/${muscle}`} key={muscle}>
              <Card small>{muscle.replace("_", " ")}</Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
