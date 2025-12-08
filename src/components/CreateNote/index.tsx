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
      content: "",
    },
    {
      Icon: Clock,
      name: "Last edited",
      content: "",
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
          <S.Title>Enter a title...</S.Title>
          <S.MetaInfo>
            {metaContent.map((meta) => (
              <Meta key={meta.name} {...meta} />
            ))}
          </S.MetaInfo>
          <S.NoteContent>Start typing your note here...</S.NoteContent>

          <S.NoteFooter>
            <S.SaveButton>Save note</S.SaveButton>
          </S.NoteFooter>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};
