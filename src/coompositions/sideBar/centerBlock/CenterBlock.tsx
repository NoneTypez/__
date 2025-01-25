import cn from "classnames";
import styles from "../Sidebar.module.css";
import Button from "../../../components/button/Button";
import { ButtonAppearance, SvgIconAppearance } from "../../../enums";
import { icons } from "../../../models";
import SvgIcon from "../../../components/svgIcon/SvgIcon";

function CenterBlock(): JSX.Element {
  return (
    <ul className={cn(styles.block, styles.centerblock)}>
      <Button
        appearance={ButtonAppearance.base}
        subMenuButton="exchange"
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.exchange}
          />
        }
      />
      <Button
        appearance={ButtonAppearance.base}
        subMenuButton="projects"
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.projects}
          />
        }
      />
      <Button
        appearance={ButtonAppearance.base}
        subMenuButton="scripts"
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.scripts}
          />
        }
      />
      <Button
        appearance={ButtonAppearance.base}
        subMenuButton="swap"
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.swap}
          />
        }
      />
      <Button
        appearance={ButtonAppearance.base}
        subMenuButton="other"
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.other}
          />
        }
      />
      <Button
        appearance={ButtonAppearance.base}
        subMenuButton="table"
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
