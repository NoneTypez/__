import cn from "classnames";
import styles from "../Sidebar.module.css";
import Button from "../../../components/button/Button";
import { ButtonAppearance, SvgIconAppearance } from "../../../enums";
import { icons } from "../../../models";
import SvgIcon from "../../../components/svgIcon/SvgIcon";

function BottomBlock(): JSX.Element {
  return (
    <nav className={cn(styles.block, styles.bottomblock)}>
      <ul>
        <Button
          appearance={ButtonAppearance.base}
          icon={
            <SvgIcon
              appearance={SvgIconAppearance.sidebarMain}
              path={icons.log}
            />
          }
        />
      </ul>
    </nav>
  );
}

export default BottomBlock;
