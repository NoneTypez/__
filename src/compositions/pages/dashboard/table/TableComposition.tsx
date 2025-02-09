import TableHeaders from "./columnHeaders";
import Profiles from "./Profiles";
import { testData } from "../../../../models";
import styles from "./TableComposition.module.css";
import cn from "classnames";
import { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import { IHeadersValues } from "../../../../interfaces";

function TableComposition(): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [isAllChecked, setIsAllChecked] = useState(false);

  const [profiles, setProfiles] = useState(testData);

  const sortProfiles = (key: keyof IHeadersValues, ascending: boolean) => {
    const sorted = [...profiles].sort((a, b) => {
      const aValue = key === "balance" ? Number(a[key]) : a[key];
      const bValue = key === "balance" ? Number(b[key]) : b[key];

      if (aValue < bValue) return ascending ? -1 : 1;
      if (aValue > bValue) return ascending ? 1 : -1;
      return 0;
    });

    setProfiles(sorted);
  };

  const handleToggleAll = () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);

    const newCheckedItems: Record<number, boolean> = {};
    testData.forEach((item) => {
      newCheckedItems[item.id] = newCheckedState;
    });

    setCheckedItems(newCheckedItems);
  };

  const handleToggleItem = (id: number) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [id]: !prev[id] };
      const allChecked = testData.every((item) => newCheckedItems[item.id]);

      setIsAllChecked(allChecked);
      return newCheckedItems;
    });
  };

  const selectedProfilesCount =
    Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className={cn(styles.tableContainer)}>
      <table className={cn(styles.main)}>
        <thead>
          <TableHeaders
            isAllChecked={isAllChecked}
            onToggleAll={handleToggleAll}
            onSort={sortProfiles}
          />
        </thead>
        <tbody>
          <Profiles
            data={profiles}
            checkedItems={checkedItems}
            onToggleItem={handleToggleItem}
          />
        </tbody>
      </table>
      {selectedProfilesCount != 0 && (
        <div className={cn(styles.countOfObjectDiv)}>
          <span className={cn(styles.countOfObject)}>
            selected: {selectedProfilesCount}
          </span>
        </div>
      )}
    </div>
  );
}

export default TableComposition;
