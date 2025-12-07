import { useRef } from "react";
import { Plus, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Logo } from "@/components/Logo";
import { NoteCard } from "@/components/Note/NoteCard";
import { NoteDetail } from "@/components/NoteDetail";
import { SearchInput } from "@/components/SearchInput";
import { useNotesStore } from "@/store/notes";

import * as S from "./styles";

export const AllNotes = () => {
  const navigate = useNavigate();

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
    <S.MainContent>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MainHeaderWrapper>
        <S.Header>
          <S.Title>All Notes</S.Title>
        </S.Header>

        <S.SearchInputAndSettingsIconWrapper>
          <SearchInput />

          <S.SettingsIconWrapper onClick={() => navigate("/settings")}>
            <Settings size={20} style={{ cursor: "pointer" }} />
          </S.SettingsIconWrapper>
        </S.SearchInputAndSettingsIconWrapper>
      </S.MainHeaderWrapper>

      <S.ContentWrapper ref={contentWrapperRef}>
        {selectedNoteId && window.innerWidth <= 1024 ? null : (
          <S.Container>
            <S.CreateButton style={{ marginBottom: "16px" }}>
              <Plus size={16} strokeWidth={3} />
              Create New Note
            </S.CreateButton>

            {isSearchingNotes ? null : (
              <S.TitleWrapper>
                <S.Title>All Notes</S.Title>
              </S.TitleWrapper>
            )}

            {isSearchingNotes && <SearchInput />}

            <S.NotesList>
              {notes.map((note) => (
                <NoteCard
                  key={note.title}
                  note={note}
                  onClick={() => handleSelectNote(note.title)}
                />
              ))}
            </S.NotesList>
          </S.Container>
        )}

        {selectedNoteId && (
          <NoteDetail
            noteId={selectedNoteId}
            onBack={handleCloseNote}
            key={selectedNoteId}
          />
        )}
      </S.ContentWrapper>
    </S.MainContent>
  );
};
