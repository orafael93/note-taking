import { Fragment } from "react";
import { Tag, Clock, ChevronLeft, Trash2, Download } from "lucide-react";

import { Meta } from "@/components/Meta";

import * as Types from "./types";
import * as S from "./styles";

export const CreateNote = (props: Types.CreateNoteType) => {
  const { onBack } = props;

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
            style={{ marginBottom: "20px" }}
            autoFocus={window.innerWidth >= 1024}
          />
          <S.MetaInfo>
            {metaContent.map((meta) => (
              <Fragment>
                <Meta.Description Icon={meta.Icon} name={meta.name} />
                {meta.Component && meta.componentType === "input" && (
                  <meta.Component
                    name="tags"
                    placeholder={meta.inputPlaceholder}
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
          />

          <S.NoteFooter>
            <S.SaveButton>Save note</S.SaveButton>
          </S.NoteFooter>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};
