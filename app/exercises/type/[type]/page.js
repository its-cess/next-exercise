import styles from "@/app/exercises/exercises.module.css";
import { fetchProgramByType } from "@/app/lib/data";
import { Card } from "@/app/ui/Card";
import { Tag } from "@/app/ui/Tag";
import { StarIcon } from "@/app/ui/StarIcon";

export default async function Page({ params }) {
  const exercisesByType = await fetchProgramByType(params.type);
  const titleName = params.type.replace("_", " ");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Exercises for {titleName}</h1>
        </div>
        <div className={styles.exercises}>
          {exercisesByType && (
            <>
              {exercisesByType.map((ex) => (
                <Card key={ex.name}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.exerciseName}>{ex.name}</h3>
                    <StarIcon />
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
                  <p className={styles.instructionTitle}>Instructions:</p>
                  <p className={styles.instructions}>{ex.instructions}</p>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
