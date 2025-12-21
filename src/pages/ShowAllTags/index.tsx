import { Plus, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { MobileLogo } from "@/components/Logo";
import { CreateNote } from "@/components/CreateNote";
import { useNotesStore } from "@/store/notes";
import { capitalizeTag } from "@/utils";

import * as S from "./styles";

export const ShowAllTags = () => {
  const navigate = useNavigate();

  const notes = useNotesStore((state) => state.notes);
  const onSelectedNote = useNotesStore((state) => state.onUpdateSelectedNote);
  const selectedNoteId = useNotesStore((state) => state.selectedNoteId);
  const onUpdateSelectedNote = useNotesStore(
    (state) => state.onUpdateSelectedNote
  );

  const [creatingNewNote, setCreatingNewNote] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const uniqueTags = Array.from(
    new Set(notes.allNotes.flatMap((note) => note.tags))
  ).sort();

  const onNavigate = (path: string) => {
    navigate(path);
    onSelectedNote(null);
  };

  const onCreateNewNote = () => {
    setCreatingNewNote(true);

    if (selectedNoteId) {
      onUpdateSelectedNote(null);
    }
  };

  return (
    <S.MainContent>
      <MobileLogo onClick={() => navigate("/")} />

      <S.ContentWrapper>
        {!creatingNewNote && (
          <S.TitleWrapper>
            <S.Title>Tags</S.Title>
          </S.TitleWrapper>
        )}

        <S.TagItemWrapper>
          {!creatingNewNote ? (
            uniqueTags.map((tag, index, allTags) => (
              <li>
                <S.Tag
                  onClick={() => onNavigate(`/tags/${tag.toLowerCase()}`)}
                  isLastItem={index === allTags.length - 1}
                >
                  <Tag
                    size={20}
                    strokeWidth={1.5}
                    color={"var(--color-neutral-600)"}
                  />
                  <span>{capitalizeTag(tag)}</span>
                </S.Tag>
              </li>
            ))
          ) : (
            <CreateNote
              containerRef={containerRef}
              onBack={() => setCreatingNewNote(false)}
            />
          )}
        </S.TagItemWrapper>
      </S.ContentWrapper>

      {!creatingNewNote && (
        <S.CreateButtonMobile onClick={onCreateNewNote}>
          <Plus color="var(--color-white)" />
        </S.CreateButtonMobile>
      )}
    </S.MainContent>
  );
};
