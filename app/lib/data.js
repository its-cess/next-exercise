export async function fetchProgramByType(type) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(baseUrl + `?type=${type}`, {
    headers: {
      "X-Api-Key": apiKey
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exercises.");
  }

  const data = res.json();
  return data;
}

export async function fetchProgramByMuscle(muscle) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(baseUrl + `?muscle=${muscle}`, {
    headers: {
      "X-Api-Key": apiKey
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exercises.");
  }

  const data = res.json();
  return data;
}
