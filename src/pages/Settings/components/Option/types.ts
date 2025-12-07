import { ReactNode } from "react";

export type OptionType<T> = {
  onActiveOption: () => void;
  itemIsActive: boolean;
  Icon: () => JSX.Element;
  children: ReactNode;
  inputId: T;
  inputName: string;
};
