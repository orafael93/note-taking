export type ModalsDataType = {
  delete?: {
    noteId?: string;
    showModal: boolean;
  };
  archive?: {
    noteId?: string;
    showModal: boolean;
  };
};

export type NoteDetailType = {
  noteId: string;
  onBack: () => void;
};
