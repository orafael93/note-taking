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
          Reset Your Password
        </h1>
        <h2 style={{ textAlign: "center", fontSize: "14px", marginTop: "8px" }}>
          Choose a new password to secure your account.
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "50px",
          }}
        >
          <Input label="New Password" id="email" type="password" showIcon />
          <Input label="Confirm" id="password" type="password" showIcon />
        </div>

        <S.Button style={{ marginTop: "1rem" }}>Reset Password</S.Button>
      </S.Content>
    </S.Wrapper>
  );
};
