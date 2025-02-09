import cn from "classnames";
import styles from "../Sidebar.module.css";
import Logo from "../../../components/logo/Logo";
import Button from "../../../components/button/button";
import { ButtonAppearance, SvgIconAppearance } from "../../../enums";
import { icons } from "../../../models";
import SvgIcon from "../../../components/svgIcon/SvgIcon";
import { useNavigate } from "react-router-dom";

function TopBlock(): JSX.Element {
  const navigate = useNavigate();
  return (
    <ul className={cn(styles.block, styles.topblock)}>
      <Logo src="src/assets/logo.png" />
      <Button
        className={cn(styles.button)}
        appearance={ButtonAppearance.base}
        icon={
          <SvgIcon
            appearance={SvgIconAppearance.sidebarMain}
            path={icons.dashboard}
          />
        }
        onClick={() => navigate("")}
      />
    </ul>
  );
}

export default TopBlock;
