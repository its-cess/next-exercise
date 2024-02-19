import styles from "@/app/exercises/exercises.module.css";
import { fetchProgramByName } from "@/app/lib/data";
import { Card } from "@/app/ui/Card";
import { Tag } from "@/app/ui/Tag";

export default async function Page({ params }) {
  const exercisesByName = await fetchProgramByName(params.name);
  console.log(exercisesByName);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.exercises}>
          {exercisesByName && (
            <>
              {exercisesByName.map((ex) => (
                <Card key={ex.name}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.exerciseName}>{ex.name}</h3>
                    <div className={styles.tagContainer}>
                      <Tag muscle>{ex.muscle}</Tag>
                      <Tag className={styles.tag} difficulty={ex.difficulty}>
                        {ex.difficulty}
                      </Tag>
                    </div>
                  </div>
                  <div className={styles.equipmentContainer}>
                    <span className={styles.equipmentTitle}>
                      Equipment needed:
                    </span>
                    <Tag equipment>{ex.equipment}</Tag>
                  </div>
                  {ex.instructions && (
                    <>
                      <p className={styles.instructionTitle}>Instructions:</p>
                      <p className={styles.instructions}>{ex.instructions}</p>
                    </>
                  )}
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
