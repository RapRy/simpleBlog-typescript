import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState<null | object>(null);

  useEffect(() => {
    const local = localStorage.getItem("sb-user");

    setUser(local ? JSON.parse(local) : null);
  }, []);

  return user;
};
