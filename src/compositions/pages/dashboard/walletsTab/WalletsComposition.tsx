import cn from "classnames";
import styles from "./walletsTab.module.css";
import { ButtonAppearance } from "../../../../enums";
import Button from "../../../../components/button/button";
import WalletsList from "./WalletsList";
import { useState } from "react";
import { IWalletsValues } from "../../../../interfaces";
import WalletTableHeaders from "./WalletsTableHeaders";
import {
  ATOMWalletsData,
  BTCWalletsData,
  EVMWalletsData,
  SOLWalletsData,
} from "../../../../models";

function WalletsComposition(): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [profiles, setProfiles] = useState(EVMWalletsData); // Теперь мы меняем profiles

  const sortWallets = (key: keyof IWalletsValues, ascending: boolean) => {
    setProfiles((prevProfiles) => {
      return [...prevProfiles].sort((a, b) => {
        const aValue = key === "balance" ? Number(a[key]) : a[key];
        const bValue = key === "balance" ? Number(b[key]) : b[key];

        if (aValue < bValue) return ascending ? -1 : 1;
        if (aValue > bValue) return ascending ? 1 : -1;
        return 0;
      });
    });
  };

  const handleToggleAll = () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);

    const newCheckedItems: Record<number, boolean> = {};
    profiles.forEach((item) => {
      newCheckedItems[item.id] = newCheckedState;
    });

    setCheckedItems(newCheckedItems);
  };

  const handleToggleItem = (id: number) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [id]: !prev[id] };
      const allChecked = profiles.every((item) => newCheckedItems[item.id]);

      setIsAllChecked(allChecked);
      return newCheckedItems;
    });
  };

  const selectedProfilesCount =
    Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.top_nav_container)}>
        <Button
          text="EVM"
          appearance={ButtonAppearance.grey}
          onClick={() => setProfiles(EVMWalletsData)}
        />
        <Button
          text="SOLANA"
          appearance={ButtonAppearance.grey}
          onClick={() => setProfiles(SOLWalletsData)}
        />
        <Button
          text="BITCOIN"
          appearance={ButtonAppearance.grey}
          onClick={() => setProfiles(BTCWalletsData)}
        />
        <Button
          text="ATOM"
          appearance={ButtonAppearance.grey}
          onClick={() => setProfiles(ATOMWalletsData)}
        />
      </div>

      {/* Обертка для скролла */}
      <div className={cn(styles.tableContainer)}>
        <table className={cn(styles.table)}>
          <WalletTableHeaders
            isAllChecked={isAllChecked}
            onToggleAll={handleToggleAll}
            onSort={sortWallets}
          />
          <tbody className={cn(styles.tbody)}>
            <WalletsList
              data={profiles}
              checkedItems={checkedItems}
              onToggleItem={handleToggleItem}
            />
          </tbody>
        </table>
      </div>

      {selectedProfilesCount !== 0 && (
        <div className={cn(styles.countOfObjectDiv)}>
          <span className={cn(styles.countOfObject)}>
            selected: {selectedProfilesCount}
          </span>
        </div>
      )}
    </div>
  );
}

export default WalletsComposition;
