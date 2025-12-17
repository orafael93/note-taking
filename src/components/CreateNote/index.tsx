import { Fragment, useState } from "react";
import { Tag, Clock, ChevronLeft, Trash2, Download } from "lucide-react";

import { Meta } from "@/components/Meta";
import { useNotesStore } from "@/store/notes";
import { handleTags } from "@/utils";

import * as Types from "./types";
import * as S from "./styles";

export const CreateNote = (props: Types.CreateNoteType) => {
  const { onBack } = props;

  const addNote = useNotesStore((state) => state.addNote);

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

  return (
    <S.Container>
      <S.MainContent>
        <S.MobileCardHeader>
          <S.GoBackWrapper onClick={onBack}>
            <ChevronLeft size={18} />
            Go Back
          </S.GoBackWrapper>
          <S.ActionsWrapper>
            <S.ActionsButton>
              <Trash2 size={18} />
            </S.ActionsButton>
            <S.ActionsButton>
              <Download size={18} />
            </S.ActionsButton>
            <S.ActionsButton>
              <S.CancelText>Cancel</S.CancelText>
            </S.ActionsButton>
            <S.ActionsButton>
              <S.SaveNote>Save Note</S.SaveNote>
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
              <Fragment>
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
              disabled={!canCreateNote}
              onClick={() => {
                addNote({
                  title: noteContent.title,
                  tags: noteContent.tags as unknown as string[],
                  content: noteContent.content,
                  lastEdited: new Date().toString(),
                });
              }}
            >
              Save note
            </S.SaveButton>
          </S.NoteFooter>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};
