import { Fragment, useRef } from "react";

import { Logo } from "@/components/Logo";
import { useNotesStore } from "@/store/notes";

import * as S from "./styles";

export const ArchivedNotes = () => {
  const selectedNoteId = useNotesStore((state) => state.selectedNoteId);

  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <Fragment>
      <S.MainContent>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <S.MainHeaderWrapper>
          <S.Header>
            <S.Title>Archived</S.Title>
          </S.Header>
        </S.MainHeaderWrapper>

        <S.ContentWrapper ref={contentWrapperRef}>
          {selectedNoteId && window.innerWidth <= 1024 ? null : (
            <S.Container></S.Container>
          )}
        </S.ContentWrapper>
      </S.MainContent>
    </Fragment>
  );
};
