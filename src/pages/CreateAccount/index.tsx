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

  const createAccount = useNotesStore((store) => store.createAccount);

  const onCreateAccount = (email: string, password: string) => {
    createAccount(email, password);
    navigate("/");
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
          Create Your Account
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
          Sign up to start organizing your notes and boost your productivity.
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
          style={{ marginTop: "1rem" }}
          onClick={() =>
            onCreateAccount(accountData.email, accountData.password)
          }
        >
          Sign up
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

        <S.AlreadyHaveAccount>
          Already have an account?
          <button onClick={() => navigate("/login")}>Login</button>
        </S.AlreadyHaveAccount>
      </S.Content>
    </S.Wrapper>
  );
};
