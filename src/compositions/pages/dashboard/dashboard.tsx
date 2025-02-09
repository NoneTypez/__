import Button from "../../../components/button/button";
import { ButtonAppearance } from "../../../enums";
import TableComposition from "./table/TableComposition";
import styles from "./dashboard.module.css";
import cn from "classnames";
import Popup from "../../../components/popUp/popUp";
import { useState } from "react";
import AddWalletPopUp from "./addWalletPopUp/addWalletPopUp";
import SearchBox from "../../../components/searchBar/SearchBox";
// import { useNavigate } from "react-router-dom";
import WalletsComposition from "./walletsTab/WalletsComposition";

const ProfilesTab = () => <TableComposition />;
const WalletsTab = () => <WalletsComposition />;

function Dashboard(): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(<TableComposition />);

  const changeTab = (tabComponent: JSX.Element) => {
    setActiveTab(tabComponent);
  };

  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.top_container)}>
        <div className={cn(styles.top_left_container)}>
          <Button
            text="PROFILES"
            appearance={ButtonAppearance.grey}
            onClick={() => changeTab(<ProfilesTab />)}
          />
          <Button
            text="WALLETS"
            appearance={ButtonAppearance.grey}
            onClick={() => changeTab(<WalletsTab />)}
          />
          <SearchBox />
        </div>
        <div className={styles.top_right_container}>
          <Button
            text="ADD WALLET"
            appearance={ButtonAppearance.modBtn}
            onClick={() => {
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
      <div className={cn(styles.tab_container)}>{activeTab}</div>
    </div>
  );
}

export default Dashboard;
