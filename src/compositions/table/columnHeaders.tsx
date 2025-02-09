import SortIcon from "./sortIcon/SortIcon";
import cn from "classnames";
import styles from "./TableComposition.module.css";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import { IHeadersValues } from "../../interfaces";

interface ITableHeaders {
  isAllChecked: boolean;
  onToggleAll: () => void;
  onSort: (key: keyof IHeadersValues, ascending: boolean) => void;
}

function TableHeaders({
  isAllChecked,
  onToggleAll,
  onSort,
}: ITableHeaders): JSX.Element {
  // USESTATE FOR SELECTED OPTION!!!!##########
  return (
    <>
      <tr>
        <th>
          {
            <Checkbox
              checked={isAllChecked}
              onChange={onToggleAll}
              className={cn(styles["p-checkbox-box"])}
              variant="filled"
            />
          }
        </th>
        <th className={cn(styles.numberHeader)}>
          <span className={cn(styles.header)}>
            #
            <a href="#">
              <SortIcon onClick={(asc) => onSort("id", asc)} />
            </a>
          </span>
        </th>
        <th className={cn(styles.nameHeader)}>
          <span className={cn(styles.header)}>
            NAME
            <a href="#">
              <SortIcon onClick={(asc) => onSort("profileName", asc)} />
            </a>
          </span>
        </th>
        <th className={cn(styles.emailHeader)}>EMAIL</th>
        <th className={cn(styles.twitterHeader)}>TWITTER</th>
        <th className={cn(styles.discordHeader)}>DISCORD</th>
        <th className={cn(styles.telegramHeader)}>TELEGRAM</th>
        <th className={cn(styles.telephoneHeader)}>TELEPHONE</th>
        <th className={cn(styles.githubHeader)}>GITHUB</th>
        <th>
          <span className={cn(styles.header)}>
            BALANCE
            <a href="#">
              <SortIcon onClick={(asc) => onSort("balance", asc)} />
            </a>
          </span>
        </th>
        <th></th>
      </tr>
    </>
  );
}

export default TableHeaders;
