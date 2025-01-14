import { ReactNode, SVGProps } from "react";
import { SvgIconAppearance } from "../../enums";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  children?: ReactNode;
  appearance?: SvgIconAppearance | string;
  xlmn?: string;
  viewbox?: string;
  path: string;
}
