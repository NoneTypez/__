import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonAppearance } from "../../enums";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  icon?: JSX.Element;
  appearance: ButtonAppearance;
}
