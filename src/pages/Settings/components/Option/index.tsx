import * as Types from "./types";
import * as S from "./styles";

export const Option = <T,>(props: Types.OptionType<T>) => {
  const { onActiveOption, itemIsActive, inputId, inputName, Icon, children } =
    props;

  return (
    <label htmlFor={inputId as string} onClick={() => onActiveOption()}>
      <S.Option itemIsActive={itemIsActive}>
        <S.IconWrapper>
          <Icon />
        </S.IconWrapper>

        {children}

        <input
          type="radio"
          name={inputName}
          id={inputId as string}
          checked={itemIsActive}
        />
      </S.Option>
    </label>
  );
};
