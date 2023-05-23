const api = import.meta.env.VITE_API_URL;

export default async (): Promise<boolean> => {
  const valid = fetch(`${api}/auth/validate/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const data = await res.json();

    if (data.statusCode === 200) {
      return true;
    }
    return false;
  });

  return valid;
};
