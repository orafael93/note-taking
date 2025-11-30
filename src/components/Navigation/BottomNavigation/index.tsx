import { Home, Search, Archive, Tag, Settings } from "lucide-react";

import * as S from "./styles";

export const BottomNavigation = () => (
  <S.Nav>
    <S.NavButton active>
      <Home size={24} />
      <span>Home</span>
    </S.NavButton>
    <S.NavButton>
      <Search size={24} />
      <span>Search</span>
    </S.NavButton>
    <S.NavButton>
      <Archive size={24} />
      <span>Archive</span>
    </S.NavButton>
    <S.NavButton>
      <Tag size={24} />
      <span>Tags</span>
    </S.NavButton>
    <S.NavButton>
      <Settings size={24} />
      <span>Settings</span>
    </S.NavButton>
  </S.Nav>
);
