import Button from "../../../components/button/button";
import { ButtonAppearance } from "../../../enums";
import TableComposition from "../../table/TableComposition";
import styles from "./dashboard.module.css";
import cn from "classnames";
import Popup from "../../../components/popUp/popUp";
import { useState } from "react";
import AddWalletPopUp from "./addWalletPopUp/addWalletPopUp";

function Dashboard(): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.top_container)}>
        <div className={styles.top_left_container}>
          <Button text="WALLETS" appearance={ButtonAppearance.grey} />
          <Button text="SETTINGS" appearance={ButtonAppearance.grey} />
          <Button text="TEST" appearance={ButtonAppearance.grey} />
        </div>
        <div className={styles.top_right_container}>
          <Button
            text="ADD WALLET"
            appearance={ButtonAppearance.blue}
            onClick={() => {
              console.log("Button clicked!");
              setIsPopupOpen(true);
            }}
          />
          <Popup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            children={<AddWalletPopUp />}
            width={600}
            height={700}
          />
        </div>
      </div>
      <div className={cn(styles.table_container)}>
        <TableComposition />
      </div>
    </div>
  );
}

export default Dashboard;
