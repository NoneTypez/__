import TableHeaders from "./columnHeaders";
import Profiles from "./Profiles";
import { testData } from "../../models";

function TableComposition(): JSX.Element {
  return (
    <>
      <table>
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
