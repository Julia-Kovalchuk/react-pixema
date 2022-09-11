import { useState } from "react";

// не в хук, а в slice?
export const useAuth = () => {
  const [isAuth, setAuth] = useState(false);

  return { isAuth, setAuth };
};
