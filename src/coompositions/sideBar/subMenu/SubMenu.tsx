import Button from "../../../components/button/Button";
import { ButtonAppearance } from "../../../enums";
import { SubMenuProps } from "./SubMenu.props";
import cn from "classnames";
import styles from "./SubMenu.module.css";
import { subMenus } from "../../../models";

function SubMenu({ menuKey }: SubMenuProps): JSX.Element {
  const menuItems = subMenus[menuKey];

  if (!menuItems || menuItems.length === 0) {
    return <></>;
  }

  return (
    <ul className={cn(styles.submenu)}>
      {menuItems.map((item, index) => (
        <li key={index} className={cn(styles.submenuItem)}>
          <Button
            appearance={ButtonAppearance.base}
            className={styles.submenuButton}
            text={item.text}
            onClick={item.onclick}
          />
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
