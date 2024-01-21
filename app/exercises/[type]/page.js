import { fetchProgramByType, fetchProgramByMuscle } from "@/app/lib/data";
import { Card } from "@/app/ui/Card";

export default async function Page({ params }) {
  const exercisesByType = await fetchProgramByType(params.type);
  const exercisesByMuscles = await fetchProgramByMuscle(params.type);

  return (
    <>
      {exercisesByType && (
        <div>
          {exercisesByType.map((ex) => (
            <Card key={ex.name}>{ex.name}</Card>
          ))}
        </div>
      )}

      {exercisesByMuscles && (
        <div>
          {exercisesByMuscles.map((ex) => (
            <Card key={ex.name}>{ex.name}</Card>
          ))}
        </div>
      )}
    </>
  );
}
