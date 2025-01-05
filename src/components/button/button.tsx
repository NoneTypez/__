import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

function Button({ text, icon, appearance }: IButtonProps): JSX.Element {
  return (
    <button className={cn(styles["button"], styles[appearance])}>
      {icon && <span className="icon">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}

export default Button;
