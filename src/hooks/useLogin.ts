import { useEffect, useState } from "react";

import { useNotesStore } from "@/store/notes";

export const useLogin = () => {
  const userData = useNotesStore((store) => store.userData);

  const [validation, setValidation] = useState({
    isValidating: true,
    userIsLoggedIn: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setValidation({
        isValidating: false,
        userIsLoggedIn:
          Boolean(userData.email && userData.password) && !userData.logout,
      });
    }, 1200);
  }, [userData.email, userData.password]);

  return {
    validation,
  };
};
