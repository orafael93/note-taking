import { Tag, Clock, ChevronLeft, Trash2, Download } from "lucide-react";

import { Meta } from "@/components/Meta";
import { NoteActions } from "@/components/Note/NoteActions";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const NoteDetail = (props: Types.NoteDetailType) => {
  const { noteId, onBack } = props;

  const note = useNotesStore((state) =>
    state.notes.find((n) => n.title === noteId)
  );

  if (!note) return null;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(note.lastEdited));

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
              <Meta key={meta.name} {...meta} />
            ))}
          </S.MetaInfo>
          <S.NoteContent>{note.content}</S.NoteContent>
        </S.Content>
      </S.MainContent>
      <NoteActions noteId={note.title} />
    </S.Container>
  );
};
