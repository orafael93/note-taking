import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Tag,
  Clock,
  ChevronLeft,
  Trash2,
  Download,
  Archive,
} from "lucide-react";

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

  const navigate = useNavigate();

  const note = useNotesStore((state) =>
    state.notes.allNotes.find((n) => n.title === noteId)
  );

  const onUpdateSelectedNote = useNotesStore(
    (state) => state.onUpdateSelectedNote
  );

  const [modalsData, setModalsData] = useState<ModalsDataType>();

  const handleArchiveNote = useNotesStore((state) => state.toggleArchive);
  const handleDeleteNote = useNotesStore((state) => state.deleteNote);

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
              <S.ActionsButton onClick={() => onArchiveNote(note.title)}>
                <Archive size={18} color="var(--color-neutral-600)" />
              </S.ActionsButton>
              <S.ActionsButton onClick={() => onDeleteNote(note.title)}>
                <Trash2 size={18} color="var(--color-neutral-600)" />
              </S.ActionsButton>
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
          </S.Content>
        </S.MainContent>
        <NoteActions
          note={note}
          onArchiveNote={onArchiveNote}
          onDeleteNote={onDeleteNote}
        />
      </S.Container>

      {modalsData?.delete?.showModal && (
        <Modal>
          <S.ModalContentWrapper>
            <S.ModalMainContentWrapper>
              <S.TrashIconWrapper>
                <Trash2 size={24} color="var(--color-white)" />
              </S.TrashIconWrapper>
              <div>
                <p>Delete Note</p>
                <p>
                  Are you sure you want to permanently delete this note? This
                  action cannot be undone.
                </p>
              </div>
            </S.ModalMainContentWrapper>
            <S.ModalActionsWrapper>
              <S.CancelButton
                onClick={() => {
                  setModalsData({
                    delete: {
                      showModal: false,
                    },
                  });

                  onUpdateSelectedNote(null);
                }}
              >
                Cancel
              </S.CancelButton>
              <S.DeleteButton
                onClick={() => {
                  modalsData.delete?.noteId &&
                    handleDeleteNote(modalsData.delete?.noteId);

                  onUpdateSelectedNote(null);
                }}
              >
                Delete Note
              </S.DeleteButton>
            </S.ModalActionsWrapper>
          </S.ModalContentWrapper>
        </Modal>
      )}

      {modalsData?.archive?.showModal && (
        <Modal>
          <S.ModalContentWrapper>
            <S.ModalMainContentWrapper>
              <S.TrashIconWrapper>
                <Download size={24} color="var(--color-white)" />
              </S.TrashIconWrapper>
              <div>
                <p>Archive Note</p>
                <p>
                  Are you sure you want to archive this note? You can find it in
                  the Archived Notes section and restore it anytime.
                </p>
              </div>
            </S.ModalMainContentWrapper>
            <S.ModalActionsWrapper>
              <S.CancelButton
                onClick={() =>
                  setModalsData({
                    archive: {
                      showModal: false,
                    },
                  })
                }
              >
                Cancel
              </S.CancelButton>
              <S.ArchiveButton
                onClick={() => {
                  modalsData.archive?.noteId &&
                    handleArchiveNote(modalsData.archive?.noteId);

                  setModalsData({
                    archive: {
                      showModal: false,
                    },
                  });

                  onUpdateSelectedNote(null);

                  navigate("/archived");
                }}
              >
                Archive note
              </S.ArchiveButton>
            </S.ModalActionsWrapper>
          </S.ModalContentWrapper>
        </Modal>
      )}
    </Fragment>
  );
};
