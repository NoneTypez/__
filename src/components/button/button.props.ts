import { ButtonHTMLAttributes } from "react";
import { ButtonAppearance } from "../../enums";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: JSX.Element;
  subMenuButton?: string;
  appearance: ButtonAppearance;
}
