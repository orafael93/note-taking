import { Home, Archive, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Logo } from "@/components/Logo";
import { useNotesStore } from "@/store/notes";

import * as S from "./styles";

export const Sidebar = () => {
  const notes = useNotesStore((state) => state.notes);
  const navigate = useNavigate();

  const uniqueTags = Array.from(
    new Set(notes.flatMap((note) => note.tags))
  ).sort();

  return (
    <S.Container>
      <S.LogoWrapper onClick={() => navigate("/")}>
        <Logo />
      </S.LogoWrapper>

      <S.NavSection>
        <S.NavItem onClick={() => navigate("/")} active="true">
          <Home size={20} strokeWidth={1.5} />
          <span>All Notes</span>
        </S.NavItem>
        <S.NavItem onClick={() => navigate("/archived")}>
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
