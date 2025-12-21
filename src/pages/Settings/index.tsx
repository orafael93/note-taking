import { useNavigate } from "react-router-dom";
import { lazy, Suspense, useRef, useState } from "react";
import { ChevronRight, Lock, LogOut, Sun, Type } from "lucide-react";

import { MobileLogo } from "@/components/Logo";
import { useNotesStore } from "@/store/notes";

const Theme = lazy(() => import("@/pages/Settings/components/Theme"));
const Font = lazy(() => import("@/pages/Settings/components/Font"));
const Password = lazy(() => import("@/pages/Settings/components/Password"));

import * as Types from "./types";
import * as S from "./styles";

export const Settings = () => {
  const navigate = useNavigate();

  const contentWrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<Types.ActiveItemType>(null);

  const userData = useNotesStore((store) => store.userData);
  const updateAccount = useNotesStore((store) => store.updateAccount);

  const onActiveItem = (param: Types.ActiveItemType) => {
    setActiveItem(param);
  };

  const canActiveItem = (param: Types.ActiveItemType) => activeItem === param;

  const onLogout = () => {
    updateAccount({
      ...userData,
      logout: true,
    });

    navigate("/login");
  };

  return (
    <S.MainContent>
      <MobileLogo onClick={() => navigate("/")} />

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
                    color={
                      canActiveItem("theme")
                        ? "var(--color-blue-500)"
                        : "var(--color-base)"
                    }
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
                    color={
                      canActiveItem("font")
                        ? "var(--color-blue-500)"
                        : "var(--color-base)"
                    }
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
                    color={
                      canActiveItem("password")
                        ? "var(--color-blue-500)"
                        : "var(--color-base)"
                    }
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
                    color={
                      canActiveItem("logout")
                        ? "var(--color-blue-500)"
                        : "var(--color-base)"
                    }
                  />
                  <button onClick={onLogout}>Logout</button>

                  {canActiveItem("logout") && (
                    <ChevronRight size={16} strokeWidth={3} />
                  )}
                </S.SettingItem>
              </ul>
            </nav>
          </S.Container>
        )}

        <Suspense fallback={null}>
          {activeItem && canActiveItem("theme") && (
            <Theme onClearActiveItem={() => onActiveItem(null)} />
          )}
        </Suspense>

        <Suspense fallback={null}>
          {activeItem && canActiveItem("font") && (
            <Font onClearActiveItem={() => onActiveItem(null)} />
          )}
        </Suspense>

        <Suspense fallback={null}>
          {activeItem && canActiveItem("password") && (
            <Password onClearActiveItem={() => onActiveItem(null)} />
          )}
        </Suspense>
      </S.ContentWrapper>
    </S.MainContent>
  );
};
