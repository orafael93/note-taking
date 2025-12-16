import { Eye, EyeClosed } from "lucide-react";
import { useState, Fragment } from "react";

import * as S from "./styles";

type InputType = {
  label: string;
  id: string;
  showIcon?: boolean;
  type?: "email" | "password";
};

export const Input = (props: InputType) => {
  const { label, id, showIcon, type } = props;

  const [showingPassword, setShowingPassword] = useState(false);

  const onUpdateShowingPassword = (param: boolean) => {
    setShowingPassword(param);
  };

  return (
    <div>
      <S.InputLabel htmlFor={id}>{label}</S.InputLabel>

      <S.InputWrapper>
        <S.Input
          type={type === "email" ? type : showingPassword ? "text" : "password"}
          id={id}
          placeholder={type === "email" ? "email@example.com" : ""}
          autoComplete="off"
        />

        {showIcon && (
          <Fragment>
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
          </Fragment>
        )}
      </S.InputWrapper>
    </div>
  );
};
