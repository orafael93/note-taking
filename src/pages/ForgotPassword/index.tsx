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
          style={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "24px",
            color: "var(--color-neutral-950)",
          }}
        >
          Forgotten your password?
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
          Enter your email below, and we'll send you a link to reset it.
        </h2>
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <Input label="Email address" id="email" type="email" />
        </div>
        <S.Button style={{ marginTop: "1rem" }}>Send Reset Link</S.Button>
      </S.Content>
    </S.Wrapper>
  );
};
