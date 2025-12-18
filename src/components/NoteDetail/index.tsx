import { Fragment, useState } from "react";
import { Tag, Clock, ChevronLeft, Trash2, Download } from "lucide-react";

import { Meta } from "@/components/Meta";
import { Modal } from "@/components/Modal";
import { NoteActions } from "@/components/Note/NoteActions";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

type ModalsDataType = {
  delete?: {
    noteId?: string;
    showModal: boolean;
  };
  archive?: {
    noteId?: string;
    showModal: boolean;
  };
};

export const NoteDetail = (props: Types.NoteDetailType) => {
  const { noteId, onBack } = props;

  const note = useNotesStore((state) =>
    state.notes.allNotes.find((n) => n.title === noteId)
  );

  const [modalsData, setModalsData] = useState<ModalsDataType>();

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

  const onArchiveNote = (noteId: string) => {
    setModalsData({
      archive: {
        noteId: noteId,
        showModal: true,
      },
    });
  };

  const onDeleteNote = (noteId: string) => {
    setModalsData({
      delete: {
        noteId,
        showModal: true,
      },
    });
  };

  return (
    <Fragment>
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
        <NoteActions
          note={note}
          onArchiveNote={onArchiveNote}
          onDeleteNote={onDeleteNote}
        />
      </S.Container>

      {modalsData?.archive?.showModal && (
        <Modal>Mostrar o modal de archive</Modal>
      )}

      {modalsData?.delete?.showModal && (
        <Modal>
          <S.DeleteContentModalWrapper>
            <S.DeleteContentWrapper>
              <S.TrashIconWrapper>
                <Trash2 size={24} color="#fff" />
              </S.TrashIconWrapper>
              <div>
                <p>Delete Note</p>
                <p>
                  Are you sure you want to permanently delete this note? This
                  action cannot be undone.
                </p>
              </div>
            </S.DeleteContentWrapper>
            <S.DeleteButtonsWrapper>
              <S.CancelButton
                onClick={() =>
                  setModalsData({
                    delete: {
                      showModal: false,
                    },
                  })
                }
              >
                Cancel
              </S.CancelButton>
              <S.DeleteButton>Delete Note</S.DeleteButton>
            </S.DeleteButtonsWrapper>
          </S.DeleteContentModalWrapper>
        </Modal>
      )}
    </Fragment>
  );
};
