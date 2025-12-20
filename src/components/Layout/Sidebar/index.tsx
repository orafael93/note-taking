import { Home, Archive, Tag, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { Logo } from "@/components/Logo";
import { useNotesStore } from "@/store/notes";

import * as S from "./styles";

export const Sidebar = () => {
  const notes = useNotesStore((state) => state.notes);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const uniqueTags = Array.from(
    new Set(notes.allNotes.flatMap((note) => note.tags))
  ).sort();

  const isItemActive = (pathToCompare: string) => pathname === pathToCompare;

  return (
    <S.Container>
      <S.LogoWrapper onClick={() => navigate("/")}>
        <Logo />
      </S.LogoWrapper>

      <S.NavSection>
        <S.NavItem onClick={() => navigate("/")} active={isItemActive("/")}>
          <Home
            size={20}
            strokeWidth={1.5}
            color={
              isItemActive("/") ? "var(--color-blue-500)" : "var(--color-base)"
            }
          />
          <span>All Notes</span>

          {isItemActive("/") && (
            <ChevronRight
              size={18}
              color="var(--color-base)"
              style={{ marginLeft: "auto" }}
            />
          )}
        </S.NavItem>
        <S.NavItem
          onClick={() => navigate("/archived")}
          active={isItemActive("/archived")}
        >
          <Archive
            size={20}
            strokeWidth={1.5}
            color={
              isItemActive("/archived")
                ? "var(--color-blue-500)"
                : "var(--color-base)"
            }
          />
          <span>Archived Notes</span>

          {isItemActive("/archived") && (
            <ChevronRight
              size={18}
              color="var(--color-base)"
              style={{ marginLeft: "auto" }}
            />
          )}
        </S.NavItem>
      </S.NavSection>

      <S.TagSection>
        <h3>Tags</h3>
        {uniqueTags.map((tag) => (
          <S.NavItem
            key={tag}
            active={isItemActive("/tags")}
            onClick={() => console.log(`go to /tags/${tag}`)}
          >
            <Tag
              size={20}
              strokeWidth={1.5}
              color={
                isItemActive("/tags")
                  ? "var(--color-blue-500)"
                  : "var(--color-base)"
              }
            />
            <span>{tag}</span>
          </S.NavItem>
        ))}
      </S.TagSection>
    </S.Container>
  );
};
