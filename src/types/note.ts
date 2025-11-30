export type TagType = {
  name: string;
  color?: string;
};

export type NoteType = {
  title: string;
  content: string;
  tags: string[];
  lastEdited: string;
  isArchived: boolean;
};
