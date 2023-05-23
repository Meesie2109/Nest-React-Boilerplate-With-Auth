import { useEffect, useState } from "react";
import { User } from "../../types/user.type";

const api = import.meta.env.VITE_API_URL;

export default (url: string, type: string) => {
  const [data, setData] = useState<User[]>([]);
  const [empty, setEmpty] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await fetch(`${api}/${url}`, {
        method: type,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const response = await res.json();
        if (response.data.length === 0) {
          setEmpty(true);
          return;
        }
        setData(response.data);
      });
    })();
  }, [url]);

  return { data, empty };
};
