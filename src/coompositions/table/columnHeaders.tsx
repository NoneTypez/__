import Checkbox from "../../components/checkbox/CheckBox";
import { CheckboxAppearance } from "../../enums";
import SortIcon from "./sortIcon/SortIcon";
import cn from "classnames";
import styles from "./TableComposition.module.css";

function TableHeaders(): JSX.Element {
  // USESTATE FOR SELECTED OPTION!!!!##########
  return (
    <>
      <tr>
        <th className={cn(styles.checkBoxHeader)}>
          <Checkbox appearance={CheckboxAppearance.tableCheckbox} />
        </th>
        <th className={cn(styles.numberHeader)}>
          <span className={cn(styles.header)}>
            #
            <a href="#">
              <SortIcon />
            </a>
          </span>
        </th>
        <th className={cn(styles.nameHeader)}>
          <span className={cn(styles.header)}>
            NAME
            <a href="#">
              <SortIcon />
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
              <SortIcon />
            </a>
          </span>
        </th>
        <th></th>
      </tr>
    </>
  );
}

export default TableHeaders;
