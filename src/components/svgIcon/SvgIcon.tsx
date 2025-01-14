import { SvgIconProps } from "./SvgIcon.props";
import cn from "classnames";
import styles from "./SvgIcon.module.css";
import buttonStyles from "../button/Button.module.css"; // Переименованная переменная

function SvgIcon({
  appearance = cn(buttonStyles.sideBar),
  xlmn = "http://www.w3.org/2000/svg",
  viewbox = "0 -960 960 960",
  path,
}: SvgIconProps): JSX.Element {
  return (
    <svg className={cn(styles[appearance])} xmlns={xlmn} viewBox={viewbox}>
      <path d={path}></path>
    </svg>
  );
}

export default SvgIcon;
