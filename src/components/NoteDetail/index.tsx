import { Fragment } from "react";
import { Tag, Clock, ChevronLeft, Trash2, Download } from "lucide-react";

import { Meta } from "@/components/Meta";
import { NoteActions } from "@/components/Note/NoteActions";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const NoteDetail = (props: Types.NoteDetailType) => {
  const { noteId, onBack } = props;

  const note = useNotesStore((state) =>
    state.notes.allNotes.find((n) => n.title === noteId)
  );

  if (!note) return null;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(note.lastEdited || new Date().toString()));

  const metaContent = [
    {
      Icon: Tag,
      name: "Tags",
      content: note.tags.join(", "),
    },
    {
      Icon: Clock,
      name: "Last edited",
      content: formattedDate,
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
            <Trash2 size={18} />
            <Download size={18} />
            <S.CancelText>Cancel</S.CancelText>
            <S.SaveNote>Save Note</S.SaveNote>
          </S.ActionsWrapper>
        </S.MobileCardHeader>

        <S.Content>
          <S.Title>{note.title}</S.Title>
          <S.MetaInfo>
            {metaContent.map((meta) => (
              <Fragment key={meta.name}>
                <Meta.Description Icon={meta.Icon} name={meta.name} />
                <Meta.Tag content={meta.content} />
              </Fragment>
            ))}
          </S.MetaInfo>
          <S.NoteContent>{note.content}</S.NoteContent>

          <S.NoteFooter>
            <S.SaveButton>Save note</S.SaveButton>
          </S.NoteFooter>
        </S.Content>
      </S.MainContent>
      <NoteActions note={note} />
    </S.Container>
  );
};
