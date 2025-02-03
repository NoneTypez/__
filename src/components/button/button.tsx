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
  ...props
}: IButtonProps): JSX.Element {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const buttonContent = (
    <button className={cn(styles[appearance])} {...props}>
      {icon && <span className="icon">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );

  if (appearance != "base") {
    return (
      <>
        {buttonContent}
        <SubMenu menuKey={subMenuButton} isVisible={isSubMenuVisible} />
      </>
    );
  }

  return (
    <li
      className={cn(styles.sidebar)}
      onMouseEnter={() => setIsSubMenuVisible(true)}
      onMouseLeave={() => setIsSubMenuVisible(false)}
    >
      {buttonContent}
      <SubMenu menuKey={subMenuButton} isVisible={isSubMenuVisible} />
    </li>
  );
}

export default Button;
