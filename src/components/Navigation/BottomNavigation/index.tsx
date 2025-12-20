import { useState } from "react";
import { Home, Search, Archive, Tag, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const BottomNavigation = () => {
  const [activeLink, setActiveLink] = useState<Types.NavigationLinksType>("/");

  const navigate = useNavigate();

  const onSearchingNotes = useNotesStore((store) => store.onSearchingNotes);

  const onNavigate = (param: Types.NavigationLinksType) => {
    setActiveLink(param);

    navigate(param === "/" ? "/" : `/${param}`);

    onSearchingNotes(param === "search");
  };

  return (
    <S.Nav>
      <S.NavButton
        active={activeLink === "/"}
        onClick={() => {
          onNavigate("/");
        }}
      >
        <Home size={24} />
        <span>Home</span>
      </S.NavButton>
      <S.NavButton
        active={activeLink === "search"}
        onClick={() => onNavigate("search")}
      >
        <Search size={24} />
        <span>Search</span>
      </S.NavButton>
      <S.NavButton
        active={activeLink === "archived"}
        onClick={() => onNavigate("archived")}
      >
        <Archive size={24} />
        <span>Archive</span>
      </S.NavButton>
      <S.NavButton
        active={activeLink === "tags"}
        onClick={() => onNavigate("tags")}
      >
        <Tag size={24} />
        <span>Tags</span>
      </S.NavButton>
      <S.NavButton
        active={activeLink === "settings"}
        onClick={() => onNavigate("settings")}
      >
        <Settings size={24} />
        <span>Settings</span>
      </S.NavButton>
    </S.Nav>
  );
};
