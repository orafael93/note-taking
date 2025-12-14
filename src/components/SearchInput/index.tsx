import { Search } from "lucide-react";
import { Fragment } from "react";

import * as Types from "./types.ts";
import * as S from "./styles.ts";

export const SearchInput = (param: Types.SearchInputType) => {
  const { onUpdateValue } = param;

  return (
    <Fragment>
      <S.SearchText>Search</S.SearchText>

      <S.SearchWrapper>
        <S.InputWrapper>
          <S.SearchIcon>
            <Search size={20} />
          </S.SearchIcon>

          <S.SearchInput
            type="text"
            onChange={(e) => {
              onUpdateValue(e.target.value);
            }}
            autoFocus={window.innerWidth <= 1024}
            placeholder="Search by title, content, or tags..."
          />
        </S.InputWrapper>
      </S.SearchWrapper>
    </Fragment>
  );
};
