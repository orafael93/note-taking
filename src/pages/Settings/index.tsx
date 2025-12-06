import { Fragment, useRef } from "react";
import { Plus } from "lucide-react";

import { Logo } from "@/components/Logo";
import { NoteCard } from "@/components/Note/NoteCard";
import { NoteDetail } from "@/components/NoteDetail";
import { SearchInput } from "@/components/SearchInput";
import { useNotesStore } from "@/store/notes";

import * as S from "./styles";

export const Settings = () => {
  const isSearchingNotes = useNotesStore((store) => store.isSearchingNotes);
  const selectedNoteId = useNotesStore((state) => state.selectedNoteId);
  const onUpdateSelectedNote = useNotesStore(
    (state) => state.onUpdateSelectedNote
  );

  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSelectNote = (noteId: string) => {
    contentWrapperRef.current?.scrollTo({
      top: 0,
    });

    onUpdateSelectedNote(noteId);
  };

  const handleCloseNote = () => {
    onUpdateSelectedNote(null);
  };

  const notes = useNotesStore((state) =>
    state.notes.filter((note) => !note.isArchived)
  );

  return (
    <Fragment>
      <S.MainContent>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <S.MainHeaderWrapper>
          <S.Header>
            <S.Title>Settings</S.Title>
          </S.Header>
        </S.MainHeaderWrapper>

        <S.ContentWrapper ref={contentWrapperRef}>
          {selectedNoteId && window.innerWidth <= 1024 ? null : (
            <S.Container>{/*  */}</S.Container>
          )}
        </S.ContentWrapper>
      </S.MainContent>
    </Fragment>
  );
};
