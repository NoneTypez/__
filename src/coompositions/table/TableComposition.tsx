import TableHeaders from "./columnHeaders";
import Profiles from "./Profiles";
import { testData } from "../../models";
import styles from "./TableComposition.module.css";
import cn from "classnames";

function TableComposition(): JSX.Element {
  return (
    <>
      <table className={cn(styles.main)}>
        <thead>
          <TableHeaders />
        </thead>
        <tbody>
          <Profiles data={testData} />
        </tbody>
      </table>
    </>
  );
}

export default TableComposition;
