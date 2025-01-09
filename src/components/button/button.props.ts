import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  icon?: JSX.Element;
  appearance: "main-button" | "blue" | "grey" | "profile-details";
}
