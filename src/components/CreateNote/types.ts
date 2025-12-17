export type CreateNoteType = {
  onBack: () => void;
};

export type FieldsType = "title" | "tags" | "content";

export type OnUpdateNoteContentType = {
  key: FieldsType;
  value: string;
};
