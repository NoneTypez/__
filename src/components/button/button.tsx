import { IButtonProps } from "./button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import SubMenu from "../../coompositions/sideBar/subMenu/SubMenu";
import { useState } from "react";

function Button({
  text,
  icon,
  appearance,
  subMenuButton = "",
}: IButtonProps): JSX.Element {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  return (
    <li
      className={cn(styles.sidebar)}
      onMouseEnter={() => setIsSubMenuVisible(true)}
      onMouseLeave={() => setIsSubMenuVisible(false)}
    >
      <button className={cn(styles[appearance])}>
        {icon && <span className="icon">{icon}</span>}
        {text && <span>{text}</span>}
      </button>
      <SubMenu menuKey={subMenuButton} isVisible={isSubMenuVisible} />
    </li>
  );
}

export default Button;
