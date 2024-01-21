import styles from "@/app/exercises/exercises.module.css";
import { fetchProgramByMuscle } from "@/app/lib/data";
import { Card } from "@/app/ui/Card";

export default async function Page({ params }) {
  const exercisesByMuscles = await fetchProgramByMuscle(params.muscle);

  return (
    <div className={styles.wrapper}>
      <h1>Exercises for {params.muscle}</h1>
      {exercisesByMuscles && (
        <div className={styles.exercises}>
          {exercisesByMuscles.map((ex) => (
            <Card key={ex.name}>{ex.name}</Card>
          ))}
        </div>
      )}
    </div>
  );
}
