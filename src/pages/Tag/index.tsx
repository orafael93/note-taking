import { ChevronLeft, Plus, Settings } from "lucide-react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { NoteCard } from "@/components/Note/NoteCard";
import { NoteDetail } from "@/components/NoteDetail";
import { CreateNote } from "@/components/CreateNote";
import { MobileLogo } from "@/components/Logo";
import { SearchInput } from "@/components/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { capitalizeTag } from "@/utils";
import { useNotesStore } from "@/store/notes";
import { useNotesFilter } from "@/hooks/useNotesFilter";

import * as S from "./styles";

export const Tag = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tagName = pathname.split("/")[2];

  const { notes, onNotesFilter } = useNotesFilter({
    filterBy: "tags",
    tag: tagName,
  });

  const onUpdateSearchValue = (param: string) => {
    onNotesFilter(param);
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  const debouncedFunction = useDebounce(onUpdateSearchValue, 300);

  const isSearchingNotes = useNotesStore((store) => store.isSearchingNotes);
  const selectedNoteId = useNotesStore((state) => state.selectedNoteId);
  const [creatingNewNote, setCreatingNewNote] = useState(false);
  const onUpdateSelectedNote = useNotesStore(
    (state) => state.onUpdateSelectedNote
  );

  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSelectNote = (noteId: string | null) => {
    contentWrapperRef.current?.scrollTo({
      top: 0,
    });

    if (creatingNewNote) {
      setCreatingNewNote(false);
    }

    onUpdateSelectedNote(noteId);
  };

  const onCreateNewNote = () => {
    setCreatingNewNote(true);

    if (selectedNoteId) {
      handleCloseNote();
    }
  };

  const handleCloseNote = () => {
    onUpdateSelectedNote(null);
  };

  return (
    <S.MainContent>
      <MobileLogo onClick={() => navigate("/")} />

      <S.MainHeaderWrapper>
        <S.SectionTitleWrapper>
          <S.NotesTaggedTitle>
            Notes tagged:{" "}
            <S.SearchedTag>{capitalizeTag(tagName)}</S.SearchedTag>
          </S.NotesTaggedTitle>
        </S.SectionTitleWrapper>

        <S.SearchInputAndSettingsIconWrapper>
          <SearchInput
            onUpdateValue={(e) => {
              debouncedFunction(e);
            }}
          />

          <S.SettingsIconWrapper onClick={() => navigate("/settings")}>
            <Settings
              size={20}
              color="var(--color-neutral-500)"
              style={{ cursor: "pointer" }}
              aria-label="Settings icon"
            />
          </S.SettingsIconWrapper>
        </S.SearchInputAndSettingsIconWrapper>
      </S.MainHeaderWrapper>

      <S.ContentWrapper ref={contentWrapperRef}>
        {(selectedNoteId || creatingNewNote) &&
        window.innerWidth <= 1024 ? null : (
          <S.Container ref={containerRef}>
            <S.CreateButton
              style={{ marginBottom: "16px" }}
              onClick={onCreateNewNote}
            >
              <Plus size={16} strokeWidth={3} />
              Create New Note
            </S.CreateButton>

            <S.MobileCardHeader>
              <S.GoBackWrapper onClick={() => navigate("/tags")}>
                <ChevronLeft size={18} />
                Go Back
              </S.GoBackWrapper>
            </S.MobileCardHeader>

            <S.NoteTagInfoWrapper>
              <p>
                All notes with the <span>"{capitalizeTag(tagName)}"</span> tag
                are shown here.
              </p>
            </S.NoteTagInfoWrapper>

            {isSearchingNotes && (
              <SearchInput
                onUpdateValue={(e) => {
                  debouncedFunction(e);
                }}
              />
            )}

            <S.NotesList>
              {notes.map((note, index, allNotesArray) => (
                <NoteCard
                  key={note.title}
                  note={note}
                  isActive={note.title === selectedNoteId}
                  isLastItem={index === allNotesArray.length - 1}
                  onClick={() =>
                    handleSelectNote(
                      selectedNoteId === note.title ? null : note.title
                    )
                  }
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

        {creatingNewNote && (
          <CreateNote
            containerRef={containerRef}
            onBack={() => setCreatingNewNote(false)}
          />
        )}

        {!creatingNewNote && (
          <S.CreateButtonMobile onClick={onCreateNewNote}>
            <Plus color="var(--color-white)" />
          </S.CreateButtonMobile>
        )}
      </S.ContentWrapper>
    </S.MainContent>
  );
};
