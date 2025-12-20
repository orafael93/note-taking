import { Fragment, useState } from "react";
import { Tag, Clock, ChevronLeft, X } from "lucide-react";

import { Meta } from "@/components/Meta";
import { CheckIcon } from "@/components/Icons";
import { handleTags } from "@/utils";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const CreateNote = (props: Types.CreateNoteType) => {
  const { onBack } = props;

  const addNote = useNotesStore((state) => state.addNote);
  const [savedNoteToast, setSavedNoteToast] = useState({
    show: false,
    alreadyShown: false,
  });

  const [noteContent, setNoteContent] = useState<
    Record<Types.FieldsType, string>
  >({
    title: "",
    tags: "",
    content: "",
  });

  const canCreateNote = Object.values(noteContent).every(Boolean);

  const metaContent = [
    {
      Icon: Tag,
      name: "Tags",
      componentType: "input",
      Component: S.TagsInput,
      componentContent: "",
      inputPlaceholder: "Add tags separated by commas (e.g. Work, Planning)",
    },
    {
      Icon: Clock,
      name: "Last edited",
      componentType: "text",
      Component: S.LastEdited,
      componentContent: "Not saved yet",
    },
  ];

  const onUpdateNoteContent = (param: Types.OnUpdateNoteContentType) => {
    const { key, value } = param;

    setNoteContent((currentState) => ({
      ...currentState,
      [key]: key === "tags" ? handleTags(value) : value,
    }));
  };

  const onAddNote = (note: Record<Types.FieldsType, string>) => {
    addNote({
      title: note.title,
      tags: note.tags as unknown as string[],
      content: note.content,
      lastEdited: new Date().toString(),
    });

    setSavedNoteToast({
      show: true,
      alreadyShown: true,
    });
  };

  return (
    <S.Container>
      <S.MainContent>
        <S.MobileCardHeader>
          <S.GoBackWrapper onClick={onBack}>
            <ChevronLeft size={18} />
            Go Back
          </S.GoBackWrapper>
          <S.ActionsWrapper>
            <S.ActionsButton disabled={!canCreateNote}>
              <S.SaveNote
                onClick={() => {
                  onAddNote(noteContent);
                }}
                onKeyDown={(e) => {
                  if (!canCreateNote && e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
              >
                Save Note
              </S.SaveNote>
            </S.ActionsButton>
          </S.ActionsWrapper>
        </S.MobileCardHeader>

        <S.Content>
          <S.TitleInput
            placeholder="Enter a title..."
            name="title"
            value={noteContent.title}
            style={{ marginBottom: "20px" }}
            autoFocus={window.innerWidth >= 1024}
            onChange={(e) =>
              onUpdateNoteContent({ key: "title", value: e.target.value || "" })
            }
          />
          <S.MetaInfo>
            {metaContent.map((meta) => (
              <Fragment key={meta.name}>
                <Meta.Description Icon={meta.Icon} name={meta.name} />

                {meta.Component && meta.componentType === "input" && (
                  <meta.Component
                    name="tags"
                    value={noteContent.tags}
                    placeholder={meta.inputPlaceholder}
                    onChange={(e) =>
                      onUpdateNoteContent({
                        key: "tags",
                        value: e.target.value || "",
                      })
                    }
                  />
                )}

                {meta.Component && meta.componentType !== "input" && (
                  <meta.Component>{meta.componentContent}</meta.Component>
                )}
              </Fragment>
            ))}
          </S.MetaInfo>
          <S.NoteContent
            placeholder="Start typing your note here..."
            name="note-content"
            value={noteContent.content}
            onChange={(e) =>
              onUpdateNoteContent({
                key: "content",
                value: e.target.value || "",
              })
            }
          />

          <S.NoteFooter>
            <S.SaveButton
              disabled={!canCreateNote || savedNoteToast.alreadyShown}
              onClick={() => {
                if (!savedNoteToast.alreadyShown) {
                  onAddNote(noteContent);
                }
              }}
            >
              Save note
            </S.SaveButton>
          </S.NoteFooter>

          {savedNoteToast.show && (
            <S.ToastWrapper>
              <CheckIcon />
              <span>Note saved successfully!</span>
              <X
                size={18}
                color="var(--color-neutral-500)"
                onClick={() =>
                  setSavedNoteToast({
                    show: false,
                    alreadyShown: true,
                  })
                }
              />
            </S.ToastWrapper>
          )}
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};
