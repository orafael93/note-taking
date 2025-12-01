import { Logo } from "@/components/Logo";
import { Sidebar } from "@/components/Layout/Sidebar";
import { NoteDetail } from "@/pages/NoteDetail";
import { SearchInput } from "@/components/SearchInput";
import { BottomNavigation } from "@/components/Navigation/BottomNavigation";

import * as Types from "./types";
import * as S from "./styles";

export const MainLayout = (props: Types.MainLayoutType) => {
  const { children, selectedNoteId, handleCloseNote } = props;

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <S.MainHeaderWrapper>
          <S.Header>
            <S.Title>All Notes</S.Title>
          </S.Header>

          <SearchInput />
        </S.MainHeaderWrapper>
        <S.LeftSection>{children}</S.LeftSection>

        {selectedNoteId && (
          <S.RightSection>
            <NoteDetail noteId={selectedNoteId} onBack={handleCloseNote} />
          </S.RightSection>
        )}
      </S.MainContent>
      <BottomNavigation />
    </S.Container>
  );
};
