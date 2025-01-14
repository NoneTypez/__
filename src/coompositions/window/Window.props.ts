import { ReactNode } from "react";
import { WindowAppearance } from "../../enums";

export interface WindowProps {
  children?: ReactNode;
  appearance: WindowAppearance;
}
