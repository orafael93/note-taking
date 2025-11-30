import { Search } from "lucide-react";

import { Sidebar } from "@/components/Layout/Sidebar";
import { BottomNavigation } from "@/components/Navigation/BottomNavigation";

import * as Types from "./types";
import * as S from "./styles";

export const MainLayout = (props: Types.MainLayoutType) => {
  const { children, rightContent } = props;

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="Search by title, content, or tags..."
          />
          <S.SearchIcon>
            <Search size={20} />
          </S.SearchIcon>
        </S.SearchContainer>
        <S.LeftSection hasRightContent={Boolean(rightContent)}>
          {children}
        </S.LeftSection>
        {rightContent && <S.RightSection>{rightContent}</S.RightSection>}
      </S.MainContent>
      <BottomNavigation />
    </S.Container>
  );
};
