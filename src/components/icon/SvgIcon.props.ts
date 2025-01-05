import { ReactNode, SVGProps } from "react";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  children?: ReactNode;
  appearance?: string;
  xlmns: string;
  viewbox: string;
  iconPath: string;
}
