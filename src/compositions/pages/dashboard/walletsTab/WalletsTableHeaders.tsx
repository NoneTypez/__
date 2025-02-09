import cn from "classnames";
import styles from "./walletsTab.module.css";
import { IWalletsHeaders } from "../../../../interfaces";
import { Checkbox } from "primereact/checkbox";
import SortIcon from "../table/sortIcon/SortIcon";

function WalletTableHeaders({
  isAllChecked,
  onToggleAll,
  onSort,
}: IWalletsHeaders): JSX.Element {
  return (
    <thead>
      <tr>
        <th>
          <Checkbox
            checked={isAllChecked}
            onChange={onToggleAll}
            className={cn(styles["p-checkbox-box"])}
            variant="filled"
          />
        </th>
        <th className={cn(styles.numberHeader)}>
          <span className={cn(styles.header)}>
            #
            <a href="#">
              <SortIcon onClick={(asc) => onSort("id", asc)} />
            </a>
          </span>
        </th>
        <th className={cn(styles.numberHeader)}>
          <span className={cn(styles.header)}>address</span>
        </th>
        <th className={cn(styles.nameHeader)}>
          <span className={cn(styles.header)}>
            balance
            <a href="#">
              <SortIcon onClick={(asc) => onSort("balance", asc)} />
            </a>
          </span>
        </th>
        <th></th>
      </tr>
    </thead>
  );
}

export default WalletTableHeaders;
