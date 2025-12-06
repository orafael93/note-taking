import { Search } from "lucide-react";
import { Fragment } from "react";

import * as S from "./styles.ts";

export const SearchInput = () => {
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
            autoFocus={window.innerWidth <= 1024}
            placeholder="Search by title, content, or tags..."
          />
        </S.InputWrapper>
      </S.SearchWrapper>
    </Fragment>
  );
};
