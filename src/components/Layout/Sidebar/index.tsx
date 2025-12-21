import { useLocation, useNavigate } from "react-router-dom";
import { Home, Archive, Tag, ChevronRight } from "lucide-react";

import { Logo } from "@/components/Logo";
import { useNotesStore } from "@/store/notes";
import { capitalizeTag } from "@/utils";

import * as S from "./styles";

export const Sidebar = () => {
  const { pathname } = useLocation();

  const notes = useNotesStore((state) => state.notes);
  const onSelectedNote = useNotesStore((state) => state.onUpdateSelectedNote);
  const navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(path);
    onSelectedNote(null);
  };

  const uniqueTags = Array.from(
    new Set(notes.allNotes.flatMap((note) => note.tags))
  ).sort();

  const isItemActive = (pathToCompare: string) => pathname === pathToCompare;

  const isTagActive = (tag: string) =>
    pathname.includes(`/tags/${tag.toLowerCase()}`);

  return (
    <S.Container>
      <S.LogoWrapper onClick={() => onNavigate("/")}>
        <Logo />
      </S.LogoWrapper>

      <S.NavSection>
        <S.NavItem onClick={() => onNavigate("/")} active={isItemActive("/")}>
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
          onClick={() => onNavigate("/archived")}
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
            active={isTagActive(tag)}
            onClick={() => onNavigate(`/tags/${tag.toLowerCase()}`)}
          >
            <Tag
              size={20}
              strokeWidth={1.5}
              color={
                isTagActive(tag) ? "var(--color-blue-500)" : "var(--color-base)"
              }
            />
            <span>{capitalizeTag(tag)}</span>

            {isTagActive(tag) && (
              <ChevronRight
                size={18}
                color="var(--color-base)"
                style={{ marginLeft: "auto" }}
              />
            )}
          </S.NavItem>
        ))}
      </S.TagSection>
    </S.Container>
  );
};
