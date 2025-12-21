import { FilterByType } from "@/store/types";
import { useNotesStore } from "@/store/notes";

export const useNotesFilter = (param: {
  filterBy: FilterByType;
  tag?: string;
}) => {
  const { filterBy, tag } = param;

  const storedNotes = useNotesStore((state) => state.getNotes(filterBy, tag));
  const searchNotes = useNotesStore((state) => state.searchNotes);

  const onNotesFilter = (searchValue: string, tagName?: string) => {
    searchNotes(searchValue, filterBy, tagName);
  };

  return {
    notes: storedNotes,
    onNotesFilter,
  };
};
