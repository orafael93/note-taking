import { useState } from "react";
import { ChevronLeft, Moon, Sun } from "lucide-react";

import { Option } from "@/pages/Settings/components/Option";
import { OptionType } from "../Option/types";

import * as S from "./styles";

type ActiveMode = "light" | "dark" | "device";

export const Theme = () => {
  const [activeMode, setActiveMode] = useState<ActiveMode>("light");

  const onUpdateActiveMode = (param: ActiveMode) => {
    setActiveMode(param);
  };

  const canActiveItem = (param: ActiveMode) => activeMode === param;

  const options: OptionType<ActiveMode>[] = [
    {
      onActiveOption: () => onUpdateActiveMode("light"),
      itemIsActive: canActiveItem("light"),
      inputId: "light",
      inputName: "theme",
      Icon: () => <Sun size={16} strokeWidth={3} color="#fff" />,
      children: (
        <div>
          <p>Light mode</p>
          <p>Pick a clean and classic light theme</p>
        </div>
      ),
    },
    {
      onActiveOption: () => onUpdateActiveMode("dark"),
      itemIsActive: canActiveItem("dark"),
      inputId: "dark",
      inputName: "theme",
      Icon: () => <Moon size={16} strokeWidth={3} color="#fff" />,
      children: (
        <div>
          <p>Dark mode</p>
          <p>Pick a sleek and modern dark theme</p>
        </div>
      ),
    },
    {
      onActiveOption: () => onUpdateActiveMode("device"),
      itemIsActive: canActiveItem("device"),
      inputId: "device",
      inputName: "theme",
      Icon: () => <Sun size={16} strokeWidth={3} color="#fff" />,
      children: (
        <div>
          <p>System</p>
          <p>Adapts to your device's theme</p>
        </div>
      ),
    },
  ];

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

          <S.ApplyChangesButton style={{ marginTop: "24px" }}>
            Apply Changes
          </S.ApplyChangesButton>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};
