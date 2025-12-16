import { useNavigate } from "react-router-dom";

import { Logo } from "@/components/Logo";
import { Input } from "@/pages/Login/components/Input";
import { GoogleIcon } from "@/components/Icons";

import * as S from "./styles";

export default () => {
  const navigate = useNavigate();

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
          <Input label="Email address" id="email" type="email" />
          <Input label="Password" id="password" type="password" showIcon />
        </div>

        <S.Button style={{ marginTop: "1rem" }}>Sign up</S.Button>

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
