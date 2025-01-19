import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

function Button({ text, icon, appearance }: IButtonProps): JSX.Element {
  return (
    <li className={cn(styles.sidebar)}>
      <button className={cn(styles[appearance])}>
        {icon && <span className="icon">{icon}</span>}
        {text && <span>{text}</span>}
      </button>
    </li>
  );
}

export default Button;
