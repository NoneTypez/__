import { SvgIconProps } from "./SvgIcon.props";
import cn from "classnames";
import styles from "./SvgIcon.module.css";

function SvgIcon({
  mainStyle,
  appearance = "",
  xlmns,
  viewbox,
  iconPath,
}: SvgIconProps): JSX.Element {
  return (
    <svg
      className={cn(styles[mainStyle], styles[appearance])}
      xmlns={xlmns}
      viewBox={viewbox}
    >
      <path d={iconPath}></path>
    </svg>
  );
}

export default SvgIcon;
