import TableComposition from "../../table/TableComposition";
import styles from "./dashboard.module.css";
import cn from "classnames";

function Dashboard(): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.container)}>
        <div></div>
        <div></div>
      </div>
      <div className={cn(styles.container)}>
        <TableComposition />
      </div>
      <div className={cn(styles.container)}></div>
    </div>
  );
}

export default Dashboard;
