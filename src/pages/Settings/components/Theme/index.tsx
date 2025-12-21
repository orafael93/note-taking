import { useState } from "react";
import { ChevronLeft, Moon, Sun } from "lucide-react";

import { Option } from "@/pages/Settings/components/Option";
import { OptionType } from "@/pages/Settings/components/Option/types";
import { getStoredTheme, getSystemTheme, updateProjectTheme } from "@/utils";

import * as Types from "./types";
import * as S from "./styles";

const Theme = (props: Types.ThemeType) => {
  const { onClearActiveItem } = props;

  const [activeMode, setActiveMode] = useState<Types.ActiveMode>(
    getStoredTheme() as Types.ActiveMode
  );

  const onUpdateActiveMode = (param: Types.ActiveMode) => {
    setActiveMode(param);
  };

  const canActiveItem = (param: Types.ActiveMode) => activeMode === param;

  const options: OptionType<Types.ActiveMode>[] = [
    {
      onActiveOption: () => onUpdateActiveMode("light"),
      itemIsActive: canActiveItem("light"),
      inputId: "light",
      inputName: "theme",
      Icon: () => (
        <Sun size={16} strokeWidth={3} color="var(--color-neutral-950)" />
      ),
      children: (
        <div>
          <S.ThemeColor>Light mode</S.ThemeColor>
          <S.ThemeDescription>
            Pick a clean and classic light theme
          </S.ThemeDescription>
        </div>
      ),
    },
    {
      onActiveOption: () => onUpdateActiveMode("dark"),
      itemIsActive: canActiveItem("dark"),
      inputId: "dark",
      inputName: "theme",
      Icon: () => (
        <Moon size={16} strokeWidth={3} color="var(--color-neutral-950)" />
      ),
      children: (
        <div>
          <S.ThemeColor>Dark mode</S.ThemeColor>
          <S.ThemeDescription>
            Pick a sleek and modern dark theme
          </S.ThemeDescription>
        </div>
      ),
    },
    {
      onActiveOption: () => onUpdateActiveMode("device"),
      itemIsActive: canActiveItem("device"),
      inputId: "device",
      inputName: "theme",
      Icon: () => (
        <Sun size={16} strokeWidth={3} color="var(--color-neutral-950)" />
      ),
      children: (
        <div>
          <S.ThemeColor>System</S.ThemeColor>
          <S.ThemeDescription>Adapts to your device's theme</S.ThemeDescription>
        </div>
      ),
    },
  ];

  const onApplyTheme = () => {
    const activeInput = options.find((option) => option.itemIsActive);
    const themeToUpdate = activeInput?.inputId;

    if (themeToUpdate) {
      updateProjectTheme(
        themeToUpdate === "device" ? getSystemTheme() : themeToUpdate
      );
    }
  };

  return (
    <S.Container>
      <S.MainContent>
        <S.MobileCardHeader>
          <S.GoBackWrapper onClick={onClearActiveItem}>
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
            {options.map((param) => (
              <Option
                key={param.inputId}
                onActiveOption={param.onActiveOption}
                itemIsActive={param.itemIsActive}
                inputId={param.inputId}
                inputName={param.inputName}
                Icon={param.Icon}
              >
                {param.children}
              </Option>
            ))}
          </S.OptionsWrapper>

          <S.ApplyChangesButton
            style={{ marginTop: "24px" }}
            onClick={onApplyTheme}
          >
            Apply Changes
          </S.ApplyChangesButton>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};

export default Theme;
