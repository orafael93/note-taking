import { Eye, EyeClosed } from "lucide-react";
import { useState, Fragment } from "react";

import * as Types from "./types";
import * as S from "./styles";

export const Input = (props: Types.InputType) => {
  const { label, id, showIcon, type, value, onChange } = props;

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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {showIcon && (
          <Fragment>
            {showingPassword ? (
              <EyeClosed
                size={20}
                color="var(--color-neutral-400)"
                style={{ cursor: "pointer" }}
                onClick={() => onUpdateShowingPassword(!showingPassword)}
              />
            ) : (
              <Eye
                size={20}
                color="var(--color-neutral-400)"
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
