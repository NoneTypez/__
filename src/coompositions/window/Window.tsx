import cn from "classnames";
import styles from "./Window.module.css";
import { WindowProps } from "./Window.props";

function Window({ children, appearance }: WindowProps): JSX.Element {
  return <div className={cn(styles[appearance])}>{children}</div>;
}

export default Window;
