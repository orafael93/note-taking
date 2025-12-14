import { useRef, useState } from "react";
import { ChevronRight, Lock, LogOut, Sun, Type } from "lucide-react";

import { Font } from "@/pages/Settings/components/Font";
import { Logo } from "@/components/Logo";
import { Theme } from "@/pages/Settings/components/Theme";
import { Password } from "@/pages/Settings/components/Password";

import * as S from "./styles";

type ActiveItemType = "theme" | "font" | "password" | "logout" | null;

export const Settings = () => {
  const contentWrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<ActiveItemType>(null);

  const onActiveItem = (param: ActiveItemType) => {
    setActiveItem(param);
  };

  const canActiveItem = (param: ActiveItemType) => activeItem === param;

  return (
    <S.MainContent>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MainHeaderWrapper>
        <S.SectionTitleWrapper>
          <S.Title>Settings</S.Title>
        </S.SectionTitleWrapper>
      </S.MainHeaderWrapper>

      <S.ContentWrapper ref={contentWrapperRef}>
        {activeItem && window.innerWidth <= 1024 ? null : (
          <S.Container>
            <S.TitleWrapper>
              <S.Title>Settings</S.Title>
            </S.TitleWrapper>

            <nav>
              <ul>
                <S.SettingItem
                  active={canActiveItem("theme")}
                  onClick={() => onActiveItem("theme")}
                >
                  <Sun
                    size={16}
                    strokeWidth={3}
                    color={canActiveItem("theme") ? "#335CFF" : "#fff"}
                  />
                  <button>Color Theme</button>

                  {canActiveItem("theme") && (
                    <ChevronRight size={16} strokeWidth={3} />
                  )}
                </S.SettingItem>

                <S.SettingItem
                  active={canActiveItem("font")}
                  onClick={() => onActiveItem("font")}
                >
                  <Type
                    size={16}
                    strokeWidth={3}
                    color={canActiveItem("font") ? "#335CFF" : "#fff"}
                  />
                  <button>Font Theme</button>

                  {canActiveItem("font") && (
                    <ChevronRight size={16} strokeWidth={3} />
                  )}
                </S.SettingItem>

                <S.SettingItem
                  active={canActiveItem("password")}
                  onClick={() => onActiveItem("password")}
                >
                  <Lock
                    size={16}
                    strokeWidth={3}
                    color={canActiveItem("password") ? "#335CFF" : "#fff"}
                  />
                  <button>Change password</button>

                  {canActiveItem("password") && (
                    <ChevronRight size={16} strokeWidth={3} />
                  )}
                </S.SettingItem>

                <S.SettingItem
                  active={canActiveItem("logout")}
                  onClick={() => onActiveItem("logout")}
                >
                  <LogOut
                    size={16}
                    strokeWidth={3}
                    color={canActiveItem("logout") ? "#335CFF" : "#fff"}
                  />
                  <button>Logout</button>

                  {canActiveItem("logout") && (
                    <ChevronRight size={16} strokeWidth={3} />
                  )}
                </S.SettingItem>
              </ul>
            </nav>
          </S.Container>
        )}

        {activeItem && canActiveItem("theme") && (
          <Theme onClearActiveItem={() => onActiveItem(null)} />
        )}

        {activeItem && canActiveItem("font") && (
          <Font onClearActiveItem={() => onActiveItem(null)} />
        )}

        {activeItem && canActiveItem("password") && (
          <Password onClearActiveItem={() => onActiveItem(null)} />
        )}
      </S.ContentWrapper>
    </S.MainContent>
  );
};
