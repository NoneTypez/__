import Button from "../../../components/button/Button";
import { ButtonAppearance } from "../../../enums";
import TableComposition from "../../table/TableComposition";
import styles from "./dashboard.module.css";
import cn from "classnames";

function Dashboard(): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.top_container)}>
        <div className={styles.top_left_container}>
          <Button text="WALLETS" appearance={ButtonAppearance.grey} />
          <Button text="SETTINGS" appearance={ButtonAppearance.grey} />
          <Button text="TEST" appearance={ButtonAppearance.grey} />
        </div>
        <div className={styles.top_right_container}>
          <Button text="ADD WALLET" appearance={ButtonAppearance.blue} />
        </div>
      </div>
      <div className={cn(styles.table_container)}>
        <TableComposition />
      </div>
    </div>
  );
}

export default Dashboard;
