import { Home, Search, Archive, Tag, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onSearchingNotes = useNotesStore((store) => store.onSearchingNotes);
  const onUpdateNote = useNotesStore((store) => store.onUpdateSelectedNote);

  const onNavigate = (param: Types.NavigationLinksType) => {
    onUpdateNote(null);

    navigate(param === "/" ? "/" : `/${param}`);

    onSearchingNotes(param === "search");
  };

  return (
    <S.Nav>
      <S.NavButton
        active={pathname === "/"}
        onClick={() => {
          onNavigate("/");
        }}
      >
        <Home size={24} />
        <span>Home</span>
      </S.NavButton>
      <S.NavButton
        active={pathname === "/search"}
        onClick={() => onNavigate("search")}
      >
        <Search size={24} />
        <span>Search</span>
      </S.NavButton>
      <S.NavButton
        active={pathname === "/archived"}
        onClick={() => onNavigate("archived")}
      >
        <Archive size={24} />
        <span>Archive</span>
      </S.NavButton>
      <S.NavButton
        active={pathname.includes("/tags")}
        onClick={() => onNavigate("tags")}
      >
        <Tag size={24} />
        <span>Tags</span>
      </S.NavButton>
      <S.NavButton
        active={pathname === "/settings"}
        onClick={() => onNavigate("settings")}
      >
        <Settings size={24} />
        <span>Settings</span>
      </S.NavButton>
    </S.Nav>
  );
};
