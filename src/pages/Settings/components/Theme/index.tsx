import { useState } from "react";
import { ChevronLeft, Moon, Sun } from "lucide-react";

import * as S from "./styles";

type ActiveMode = "light" | "dark" | "device";

export const Theme = () => {
  const [activeMode, setActiveMode] = useState<ActiveMode>("light");

  const onUpdateActiveMode = (param: ActiveMode) => {
    setActiveMode(param);
  };

  const canActiveItem = (param: ActiveMode) => activeMode === param;

  return (
    <S.Container>
      <S.MainContent>
        <S.MobileCardHeader>
          <S.GoBackWrapper onClick={() => ({})}>
            <ChevronLeft size={18} />
            Settings
          </S.GoBackWrapper>
        </S.MobileCardHeader>

        <S.Content>
          <div>
            <S.ColorThemeText>Color theme</S.ColorThemeText>
            <S.ChooseThemeText>Choose your color theme:</S.ChooseThemeText>
          </div>

          <S.OptionsWrapper>
            <label htmlFor="light" onClick={() => onUpdateActiveMode("light")}>
              <S.Option active={canActiveItem("light")}>
                <S.IconWrapper>
                  <Sun size={16} strokeWidth={3} color="#fff" />
                </S.IconWrapper>
                <div>
                  <p>Light mode</p>
                  <p>Pick a clean and classic light theme</p>
                </div>
                <input
                  type="radio"
                  name="theme"
                  id="light"
                  checked={canActiveItem("light")}
                />
              </S.Option>
            </label>

            <label htmlFor="dark" onClick={() => onUpdateActiveMode("dark")}>
              <S.Option active={canActiveItem("dark")}>
                <S.IconWrapper>
                  <Moon size={16} strokeWidth={3} color="#fff" />
                </S.IconWrapper>
                <div>
                  <p>Dark mode</p>
                  <p>Pick a sleek and modern dark theme</p>
                </div>
                <input
                  type="radio"
                  name="theme"
                  id="dark"
                  checked={canActiveItem("dark")}
                />
              </S.Option>
            </label>

            <label
              htmlFor="device"
              onClick={() => onUpdateActiveMode("device")}
            >
              <S.Option active={canActiveItem("device")}>
                <S.IconWrapper>
                  <Sun size={16} strokeWidth={3} color="#fff" />
                </S.IconWrapper>
                <div>
                  <p>System</p>
                  <p>Adapts to your device's theme</p>
                </div>
                <input
                  type="radio"
                  name="theme"
                  id="device"
                  checked={canActiveItem("device")}
                />
              </S.Option>
            </label>
          </S.OptionsWrapper>

          <S.ApplyChangesButton style={{ marginTop: "24px" }}>
            Apply Changes
          </S.ApplyChangesButton>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};
