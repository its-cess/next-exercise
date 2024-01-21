import styles from "@/app/exercises/exercises.module.css";
import { fetchProgramByType } from "@/app/lib/data";
import { Card } from "@/app/ui/Card";

export default async function Page({ params }) {
  const exercisesByType = await fetchProgramByType(params.type);

  return (
    <div className={styles.wrapper}>
      <h1>Exercises for {params.type}</h1>
      {exercisesByType && (
        <div className={styles.exercises}>
          {exercisesByType.map((ex) => (
            <Card key={ex.name}>{ex.name}</Card>
          ))}
        </div>
      )}
    </div>
  );
}
