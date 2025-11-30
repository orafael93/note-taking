import { Search, Settings } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Sidebar } from "@/components/Layout/Sidebar";
import { NoteDetail } from "@/pages/NoteDetail";
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

          <S.SearchWrapper>
            <S.InputWrapper>
              <S.SearchIcon>
                <Search size={20} />
              </S.SearchIcon>

              <S.SearchInput
                type="text"
                placeholder="Search by title, content, or tags..."
              />
            </S.InputWrapper>

            <Settings size={20} style={{ cursor: "pointer" }} />
          </S.SearchWrapper>
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
