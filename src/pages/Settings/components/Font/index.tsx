import { useState } from "react";
import { ChevronLeft } from "lucide-react";

import { Option } from "@/pages/Settings/components/Option";
import { OptionType } from "@/pages/Settings/components/Option/types";

import * as Types from "./types";
import * as S from "./styles";

export const Font = (props: Types.FontType) => {
  const { onClearActiveItem } = props;

  const [activeMode, setActiveMode] = useState<Types.ActiveFont>("sans-serif");

  const onUpdateActiveMode = (param: Types.ActiveFont) => {
    setActiveMode(param);
  };

  const canActiveItem = (param: Types.ActiveFont) => activeMode === param;

  const options: OptionType<Types.ActiveFont>[] = [
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

  const onApplyFont = () => {
    const activeFont = options.find((font) => font.itemIsActive);
    const fontToUpdate = activeFont?.inputId;

    if (fontToUpdate) {
      document.documentElement.setAttribute("data-font", fontToUpdate);
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

          <S.ApplyChangesButton
            style={{ marginTop: "24px" }}
            onClick={onApplyFont}
          >
            Apply Changes
          </S.ApplyChangesButton>
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
};
