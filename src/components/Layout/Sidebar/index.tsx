import { Home, Archive, Tag } from "lucide-react";

import { Logo } from "@/components/Logo";
import { useNotesStore } from "@/store/notes";

import * as S from "./styles";

export const Sidebar = () => {
  const notes = useNotesStore((state) => state.notes);

  const uniqueTags = Array.from(
    new Set(notes.flatMap((note) => note.tags))
  ).sort();

  return (
    <S.Container>
      <Logo />

      <S.NavSection>
        <S.NavItem onClick={() => console.log("go to /")} active="true">
          <Home size={20} strokeWidth={1.5} />
          <span>All Notes</span>
        </S.NavItem>
        <S.NavItem onClick={() => console.log("go to /archived")}>
          <Archive size={20} strokeWidth={1.5} />
          <span>Archived Notes</span>
        </S.NavItem>
      </S.NavSection>

      <S.TagSection>
        <h3>Tags</h3>
        {uniqueTags.map((tag) => (
          <S.NavItem
            key={tag}
            onClick={() => console.log(`go to /tags/${tag}`)}
          >
            <Tag size={20} strokeWidth={1.5} />
            <span>{tag}</span>
          </S.NavItem>
        ))}
      </S.TagSection>
    </S.Container>
  );
};
