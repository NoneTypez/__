import cn from "classnames";
import styles from "../Sidebar.module.css";
import Button from "../../../components/button/Button";
import { ButtonAppearance, SvgIconAppearance } from "../../../enums";
import { icons } from "../../../models";
import SvgIcon from "../../../components/svgIcon/SvgIcon";
import SubMenu from "../subMenu/SubMenu";
import { useState } from "react";

function CenterBlock(): JSX.Element {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => setShowSubMenu(true);
  const handleMouseLeave = () => setShowSubMenu(false);

  return (
    <ul
      className={cn(styles.block, styles.centerblock)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        appearance={ButtonAppearance.base}
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.exchange}
          />
        }
      />
      {showSubMenu && <SubMenu menuKey="exchange" />}
      <Button
        appearance={ButtonAppearance.base}
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.projects}
          />
        }
        children={<SubMenu menuKey={"projects"} />}
      />
      <Button
        appearance={ButtonAppearance.base}
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.scripts}
          />
        }
        children={<SubMenu menuKey={"scripts"} />}
      />
      <Button
        appearance={ButtonAppearance.base}
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.swap}
          />
        }
        children={<SubMenu menuKey={"swap"} />}
      />
      <Button
        appearance={ButtonAppearance.base}
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.other}
          />
        }
        children={<SubMenu menuKey={"other"} />}
      />
      <Button
        appearance={ButtonAppearance.base}
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.table}
          />
        }
      />
    </ul>
  );
}

export default CenterBlock;
