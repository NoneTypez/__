import Checkbox from "../../components/checkbox/CheckBox";
import SortColumn from "../../components/sortColumn/SortColumn";
import { CheckboxAppearance } from "../../enums";

function TableHeaders(): JSX.Element {
  // USESTATE FOR SELECTED OPTION!!!!##########
  return (
    <>
      <tr>
        <th>
          <Checkbox appearance={CheckboxAppearance.tableCheckbox} />
        </th>
        <th>
          <span>
            #
            <SortColumn />
          </span>
        </th>
        <th>
          <span>
            NAME
            <SortColumn />
          </span>
        </th>
        <th>EMAIL</th>
        <th>TWITTER</th>
        <th>DISCORD</th>
        <th>TELEGRAM</th>
        <th>TELEPHONE</th>
        <th>GITHUB</th>
        <th>
          <span>
            BALANCE
            <SortColumn />
          </span>
        </th>
      </tr>
    </>
  );
}

export default TableHeaders;
