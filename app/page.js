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
        <h4></h4>
        <input type="search" placeholder="Search" />
        <button>Search</button>
      </div>
      <div>
        <h2>Program type</h2>
        {allProgramTypes.map((type) => (
          <h4 key={type}>{type}</h4>
        ))}
      </div>
      <div>
        <h2>Muscle groups</h2>
        {allMuscleGroups.map((muscle) => (
          <h4 key={muscle}>{muscle}</h4>
        ))}
      </div>
    </main>
  );
}
