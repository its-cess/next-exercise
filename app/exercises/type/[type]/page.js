import styles from "@/app/exercises/exercises.module.css";
import { fetchProgramByType } from "@/app/lib/data";
import { Card } from "@/app/ui/Card";
import { Tag } from "@/app/ui/Tag";

export default async function Page({ params }) {
  const exercisesByType = await fetchProgramByType(params.type);
  const titleName = params.type.replace("_", " ");
  console.log(titleName);

  return (
    <div className={styles.wrapper}>
      <h1>Exercises for {titleName}</h1>
      {exercisesByType && (
        <div className={styles.exercises}>
          {exercisesByType.map((ex) => (
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
