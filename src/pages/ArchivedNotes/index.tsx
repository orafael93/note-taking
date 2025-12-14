import { useRef, useState } from "react";
import { Plus, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Logo } from "@/components/Logo";
import { NoteCard } from "@/components/Note/NoteCard";
import { NoteDetail } from "@/components/NoteDetail";
import { SearchInput } from "@/components/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { useNotesStore } from "@/store/notes";
import { useNotesFilter } from "@/hooks/useNotesFilter";

import * as S from "./styles";

export const ArchivedNotes = () => {
  const navigate = useNavigate();

  const selectedNoteId = useNotesStore((state) => state.selectedNoteId);

  const isSearchingNotes = useNotesStore((store) => store.isSearchingNotes);

  const [creatingNewNote, setCreatingNewNote] = useState(false);

  const onUpdateSelectedNote = useNotesStore(
    (state) => state.onUpdateSelectedNote
  );

  const { notes, onNotesFilter } = useNotesFilter({ filterBy: "archived" });

  const onUpdateSearchValue = (param: string) => {
    onNotesFilter(param);
  };

  const handleCloseNote = () => {
    onUpdateSelectedNote(null);
  };

  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSelectNote = (noteId: string) => {
    contentWrapperRef.current?.scrollTo({
      top: 0,
    });

    if (creatingNewNote) {
      setCreatingNewNote(false);
    }

    onUpdateSelectedNote(noteId);
  };

  const debouncedFunction = useDebounce(onUpdateSearchValue, 300);

  return (
    <S.MainContent>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MainHeaderWrapper>
        <S.SectionTitleWrapper>
          <S.PageTitle>Archived</S.PageTitle>
        </S.SectionTitleWrapper>

        <S.SearchInputAndSettingsIconWrapper>
          <SearchInput
            onUpdateValue={(e) => {
              debouncedFunction(e);
            }}
          />

          <S.SettingsIconWrapper onClick={() => navigate("/settings")}>
            <Settings size={20} color="#fff" style={{ cursor: "pointer" }} />
          </S.SettingsIconWrapper>
        </S.SearchInputAndSettingsIconWrapper>
      </S.MainHeaderWrapper>

      <S.ContentWrapper ref={contentWrapperRef}>
        {selectedNoteId && window.innerWidth <= 1024 ? null : (
          <S.Container>
            {notes.length > 0 && (
              <S.CreateButton
                style={{ marginBottom: "16px" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <Plus size={16} strokeWidth={3} />
                Create New Note
              </S.CreateButton>
            )}

            {isSearchingNotes ? null : (
              <S.TitleWrapper>
                <S.Title>
                  All your archived notes are stored here. You can restore or
                  delete them anytime.
                </S.Title>
              </S.TitleWrapper>
            )}

            {notes.length < 1 && (
              <S.NoArchivedNotesWrapper>
                <p>
                  No notes have been archived yet. Move notes here for
                  safekeeping, or
                </p>
                <S.CreateNewNoteButton onClick={() => navigate("/")}>
                  create a new note
                </S.CreateNewNoteButton>
              </S.NoArchivedNotesWrapper>
            )}

            {isSearchingNotes && (
              <SearchInput
                onUpdateValue={(e) => {
                  debouncedFunction(e);
                }}
              />
            )}

            <S.NotesList>
              {notes.map((note) => (
                <NoteCard
                  key={note.title}
                  note={note}
                  isActive={note.title === selectedNoteId}
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
