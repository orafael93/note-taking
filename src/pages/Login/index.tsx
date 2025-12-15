import { Logo } from "@/components/Logo";
import { Input } from "@/pages/Login/components/Input";

import * as S from "./styles";

export default () => {
  return (
    <S.Wrapper>
      <S.Content>
        <div style={{ textAlign: "center" }}>
          <Logo />
        </div>

        <h1
          style={{ textAlign: "center", marginTop: "16px", fontSize: "24px" }}
        >
          Welcome to Note
        </h1>
        <h2 style={{ textAlign: "center", fontSize: "14px", marginTop: "8px" }}>
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
          <Input label="Email address" id="email" type="email" />
          <Input label="Password" id="password" type="password" showIcon />
        </div>

        <S.Button style={{ marginTop: "1rem" }}>Login</S.Button>

        <p style={{ fontSize: "14px", marginTop: "40px", textAlign: "center" }}>
          Or login with:
        </p>

        <S.OutlineButton style={{ marginTop: "1rem" }}>Google</S.OutlineButton>

        <p
          style={{
            fontSize: "14px",
            marginTop: "32px",
            textAlign: "center",
          }}
        >
          No account yeat? <b>Sign Up</b>
        </p>
      </S.Content>
    </S.Wrapper>
  );
};
