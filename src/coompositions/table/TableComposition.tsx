import TableHeaders from "./columnHeaders";
import Profiles from "./Profiles";
import { testData } from "../../models";
import styles from "./TableComposition.module.css";
import cn from "classnames";
import { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";

function TableComposition(): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [isAllChecked, setIsAllChecked] = useState(false);

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

  return (
    <>
      <table className={cn(styles.main)}>
        <thead>
          <TableHeaders
            isAllChecked={isAllChecked}
            onToggleAll={handleToggleAll}
          />
        </thead>
        <tbody>
          <Profiles
            data={testData}
            checkedItems={checkedItems}
            onToggleItem={handleToggleItem}
          />
        </tbody>
      </table>
    </>
  );
}

export default TableComposition;
