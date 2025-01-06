import { ReactNode, SVGProps } from "react";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  children?: ReactNode;
  mainStyle: string;
  appearance?: string;
  xlmns: string;
  viewbox: string;
  iconPath: string;
}
