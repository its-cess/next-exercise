import styles from "@/app/exercises/exercises.module.css";
import { fetchProgramByMuscle } from "@/app/lib/data";
import { Card } from "@/app/ui/Card";
import { Tag } from "@/app/ui/Tag";

export default async function Page({ params }) {
  const exercisesByMuscles = await fetchProgramByMuscle(params.muscle);
  const titleName = params.muscle.replace("_", " ");
  console.log(titleName);

  return (
    <div className={styles.wrapper}>
      <h1>Exercises for {titleName}</h1>
      {exercisesByMuscles && (
        <div className={styles.exercises}>
          {exercisesByMuscles.map((ex) => (
            <Card key={ex.name}>
              <div className={styles.titleRow}>
                {ex.name}
                <Tag className={styles.tag} difficulty={ex.difficulty}>
                  {ex.difficulty}
                </Tag>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
