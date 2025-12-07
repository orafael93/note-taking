import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

import * as S from "./styles";

type PasswordInputType = {
  label: string;
  id: string;
};

export const PasswordInput = (props: PasswordInputType) => {
  const { label, id } = props;

  const [showingPassword, setShowingPassword] = useState(false);

  const onUpdateShowingPassword = (param: boolean) => {
    setShowingPassword(param);
  };

  return (
    <div>
      <S.InputLabel htmlFor={id}>{label}</S.InputLabel>

      <S.InputWrapper>
        <S.Input type={showingPassword ? "text" : "password"} id={id} />

        {showingPassword ? (
          <EyeClosed
            size={20}
            color="#717784"
            style={{ cursor: "pointer" }}
            onClick={() => onUpdateShowingPassword(!showingPassword)}
          />
        ) : (
          <Eye
            size={20}
            color="#717784"
            style={{ cursor: "pointer" }}
            onClick={() => onUpdateShowingPassword(!showingPassword)}
          />
        )}
      </S.InputWrapper>
    </div>
  );
};
