import { Info } from "lucide-react";

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
          Reset Your Password
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

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--color-neutral-400)",
              fontSize: "12px",
            }}
          >
            <Info size={14} color="var(--color-neutral-600)" />
            At least 8 characters
          </span>

          <Input
            label="Confirm New Password"
            id="password"
            type="password"
            showIcon
          />
        </div>

        <S.Button style={{ marginTop: "1rem" }}>Reset Password</S.Button>
      </S.Content>
    </S.Wrapper>
  );
};
