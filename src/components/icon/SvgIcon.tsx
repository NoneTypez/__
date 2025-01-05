import { SvgIconProps } from "./SvgIcon.props";
import cn from "classnames";
import styles from "./SvgIcon.module.css";

function SvgIcon({
  appearance,
  xlmns,
  viewbox,
  iconPath,
}: SvgIconProps): JSX.Element {
  return (
    <svg
      className={cn(styles["svg"], appearance)}
      xmlns={xlmns}
      viewBox={viewbox}
    >
      <path d={iconPath}></path>
    </svg>
  );
}

export default SvgIcon;
