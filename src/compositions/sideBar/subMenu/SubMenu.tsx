import { useState } from "react";
import Button from "../../../components/button/button";
import { ButtonAppearance } from "../../../enums";
import { SubMenuProps } from "./SubMenu.props";
import cn from "classnames";
import styles from "./SubMenu.module.css";
import { subMenus } from "../../../models";
import { useNavigate } from "react-router-dom";

function SubMenu({
  menuKey,
  isVisible,
  appearance = "horizontal",
}: SubMenuProps): JSX.Element | null {
  const [isHovered, setIsHovered] = useState(false);
  const menuItems = subMenus[menuKey];
  const navigate = useNavigate();

  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  let mainStyle = styles.submenu;
  if (appearance === "vertical") {
    mainStyle = styles.submenuVertical;
  }

  return (
    <ul
      className={cn(mainStyle, {
        [styles.visible]: isVisible || isHovered,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setTimeout(() => setIsHovered(false), 300)}
    >
      {menuItems.map((item, index) => (
        <li key={index} className={cn(styles.submenuItem)}>
          <Button
            appearance={ButtonAppearance.grey}
            className={styles.submenuButton}
            text={item.text}
            onClick={() => navigate(`${item.to}`)}
          />
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
