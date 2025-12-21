import { useState } from "react";
import { ChevronLeft, Info } from "lucide-react";

import { Input } from "@/components/Input";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

const Password = (props: Types.ThemeType) => {
  const { onClearActiveItem } = props;

  const [accountData, setAccountData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const storedUserData = useNotesStore((store) => store.userData);
  const onUpdateAccount = useNotesStore((store) => store.updateAccount);

  const onUpdateNewPassword = () => {
    const oldPasswordIsEqualTheStoredOne =
      accountData.oldPassword === storedUserData.password;

    if (oldPasswordIsEqualTheStoredOne) {
      const oldPasswordIsEqualTheNewOne =
        accountData.newPassword === accountData.confirmNewPassword;

      if (oldPasswordIsEqualTheNewOne) {
        onUpdateAccount({
          email: storedUserData.email,
          password: accountData.newPassword,
        });
      }
    }
  };

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
            <Input
              id="old-pasword"
              label="Old Password"
              value={accountData.oldPassword}
              onChange={(oldPassword) =>
                setAccountData((currentAccountData) => ({
                  ...currentAccountData,
                  oldPassword,
                }))
              }
              showIcon
            />
            <div>
              <Input
                id="new-password"
                label="New Password"
                value={accountData.newPassword}
                onChange={(newPassword) =>
                  setAccountData((currentAccountData) => ({
                    ...currentAccountData,
                    newPassword,
                  }))
                }
                showIcon
              />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-neutral-400)",
                  marginTop: "8px",
                  fontSize: "12px",
                }}
              >
                <Info size={14} color="var(--color-neutral-600)" />
                At least 8 characters
              </span>
            </div>
            <Input
              id="confirm-new-password"
              label="Confirm New Password"
              value={accountData.confirmNewPassword}
              onChange={(confirmNewPassword) =>
                setAccountData((currentAccountData) => ({
                  ...currentAccountData,
                  confirmNewPassword,
                }))
              }
              showIcon
            />
          </S.InputWrapper>

          <S.ApplyChangesButton
            style={{ marginTop: "24px" }}
            onClick={onUpdateNewPassword}
          >
            Save Password
          </S.ApplyChangesButton>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};

export default Password;
