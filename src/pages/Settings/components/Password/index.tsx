import { ChevronLeft, Info } from "lucide-react";

import { PasswordInput } from "@/pages/Settings/components/PasswordInput";

import * as Types from "./types";
import * as S from "./styles";

const Password = (props: Types.ThemeType) => {
  const { onClearActiveItem } = props;

  return (
    <S.Container>
      <S.MainContent>
        <S.MobileCardHeader>
          <S.GoBackWrapper onClick={onClearActiveItem}>
            <ChevronLeft size={18} />
            Settings
          </S.GoBackWrapper>
        </S.MobileCardHeader>

        <S.Content>
          <div>
            <S.ColorThemeText>Change Password</S.ColorThemeText>
          </div>

          <S.InputWrapper>
            <PasswordInput id="old-pasword" label="Old Password" />
            <div>
              <PasswordInput id="new-password" label="New Password" />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#99A0AE",
                  marginTop: "8px",
                  fontSize: "12px",
                }}
              >
                <Info size={14} color="#99A0AE" />
                At least 8 characters
              </span>
            </div>
            <PasswordInput
              id="confirm-new-password"
              label="Confirm New Password"
            />
          </S.InputWrapper>

          <S.ApplyChangesButton style={{ marginTop: "24px" }}>
            Save Password
          </S.ApplyChangesButton>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};

export default Password;
