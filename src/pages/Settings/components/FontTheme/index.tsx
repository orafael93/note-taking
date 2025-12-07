import { useState } from "react";
import { ChevronLeft } from "lucide-react";

import { Option } from "@/pages/Settings/components/Option";
import { OptionType } from "@/pages/Settings/components/Option/types";

import * as S from "./styles";

type ActiveFont = "sans-serif" | "serif" | "monospace";

export const FontTheme = () => {
  const [activeMode, setActiveMode] = useState<ActiveFont>("sans-serif");

  const onUpdateActiveMode = (param: ActiveFont) => {
    setActiveMode(param);
  };

  const canActiveItem = (param: ActiveFont) => activeMode === param;

  const options: OptionType<ActiveFont>[] = [
    {
      onActiveOption: () => onUpdateActiveMode("sans-serif"),
      itemIsActive: canActiveItem("sans-serif"),
      inputId: "sans-serif",
      inputName: "font",
      Icon: () => <span>AA</span>,
      children: (
        <div>
          <p>Sans serif</p>
          <p>Clean and modern, easy to read.</p>
        </div>
      ),
    },
    {
      onActiveOption: () => onUpdateActiveMode("serif"),
      itemIsActive: canActiveItem("serif"),
      inputId: "serif",
      inputName: "font",
      Icon: () => <span>AA</span>,
      children: (
        <div>
          <p>Serif</p>
          <p>Classic and elegant for a timeless feel.</p>
        </div>
      ),
    },
    {
      onActiveOption: () => onUpdateActiveMode("monospace"),
      itemIsActive: canActiveItem("monospace"),
      inputId: "monospace",
      inputName: "font",
      Icon: () => <span>AA</span>,
      children: (
        <div>
          <p>Monospace</p>
          <p>Code-like, great for a technical vibe.</p>
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
            <S.FontText>Font theme</S.FontText>
            <S.ChooseFontText>Choose your font theme:</S.ChooseFontText>
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
