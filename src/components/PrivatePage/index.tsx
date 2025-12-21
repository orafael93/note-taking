import { useNavigate } from "react-router-dom";

import Login from "@/pages/Login";
import { useLogin } from "@/hooks/useLogin";
import { LoadingApplication } from "@/components/LoadingApplication";

import * as Types from "./types";

export const PrivatePage = (props: Types.PrivatePageType) => {
  const { children } = props;
  const navigate = useNavigate();

  const { validation } = useLogin();

  if (validation.isValidating) {
    return <LoadingApplication />;
  }

  if (validation.userIsLoggedIn) {
    return children;
  }

  if (!validation.isValidating && !validation.userIsLoggedIn) {
    navigate("/login");
  }

  return <Login />;
};
