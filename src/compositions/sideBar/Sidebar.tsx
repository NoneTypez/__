import styles from "./SideBar.module.css";
import cn from "classnames";
import TopBlock from "./topBlock/TopBlock";
import CenterBlock from "./centerBlock/CenterBlock";
import BottomBlock from "./bottomBlock/BottomBlock";

function Sidebar(): JSX.Element {
  return (
    <aside className={cn(styles.main)}>
      <TopBlock />
      <CenterBlock />
      <BottomBlock />
    </aside>
  );
}
export default Sidebar;
