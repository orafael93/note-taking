import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "@/components/Logo";
import { Input } from "@/components/Input";
import { GoogleIcon } from "@/components/Icons";
import { useNotesStore } from "@/store/notes";

import * as S from "./styles";

export default () => {
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({
    email: "",
    password: "",
  });

  const login = useNotesStore((store) => store.login);
  const storedUserData = useNotesStore((store) => store.userData);

  const onLogin = (email: string, password: string) => {
    const hasStoredUserData = storedUserData.email && storedUserData.password;

    if (hasStoredUserData) {
      const canLogin =
        email === storedUserData.email && password === storedUserData.password;

      if (canLogin) {
        login({ email, password, logout: false });
        navigate("/");
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <div style={{ textAlign: "center" }}>
          <Logo />
        </div>

        <h1
          style={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "24px",
            color: "var(--color-neutral-950)",
          }}
        >
          Welcome to Note
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: "14px",
            marginTop: "8px",
            fontWeight: 500,
            color: "var(--color-neutral-600)",
          }}
        >
          Please log in to continue
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "50px",
          }}
        >
          <Input
            label="Email address"
            id="email"
            type="email"
            value={accountData.email}
            onChange={(email) =>
              setAccountData((currentAccountData) => ({
                ...currentAccountData,
                email,
              }))
            }
          />
          <Input
            label="Password"
            id="password"
            type="password"
            value={accountData.password}
            onChange={(password) =>
              setAccountData((currentAccountData) => ({
                ...currentAccountData,
                password,
              }))
            }
            showIcon
          />
        </div>

        <S.Button
          style={{ marginTop: "1rem", color: "var(--color-white)" }}
          onClick={() => onLogin(accountData.email, accountData.password)}
        >
          Login
        </S.Button>

        <p
          style={{
            fontSize: "14px",
            marginTop: "40px",
            textAlign: "center",
            color: "var(--color-neutral-600)",
          }}
        >
          Or login with:
        </p>

        <S.OutlineButton style={{ marginTop: "1rem" }}>
          <GoogleIcon />
          Google
        </S.OutlineButton>

        <S.NoAccountText>
          No account yet?
          <button onClick={() => navigate("/create-account")}>Sign Up</button>
        </S.NoAccountText>
      </S.Content>
    </S.Wrapper>
  );
};
