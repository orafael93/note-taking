import { useNotesStore } from "@/store/notes";
import { FilterByType } from "@/store/types";

export const useNotesFilter = (param: { filterBy: FilterByType }) => {
  const { filterBy } = param;

  const storedNotes = useNotesStore((state) => state.getNotes(filterBy));
  const searchNotes = useNotesStore((state) => state.searchNotes);

  const onNotesFilter = (searchValue: string) => {
    searchNotes(searchValue, filterBy);
  };

  return {
    notes: storedNotes,
    onNotesFilter,
  };
};
