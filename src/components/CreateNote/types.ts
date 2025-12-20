export type CreateNoteType = {
  onBack: () => void;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export type FieldsType = "title" | "tags" | "content";

export type OnUpdateNoteContentType = {
  key: FieldsType;
  value: string;
};
