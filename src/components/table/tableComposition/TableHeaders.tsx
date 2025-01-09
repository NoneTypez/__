import Checkbox from "../checkbox/CheckBox";
import ColumnHeader from "../columnHeader/ColumnHeader";
import SearchPanel from "../searchPanel/SearchPanel";
import SortColumn from "../sortColumn/SortColumn";
import SvgIcon from "../../icon/SvgIcon";
import { icons } from "../../../models";

function TableHeaders(): JSX.Element {
  // USESTATE FOR SELECTED OPTION!!!!##########
  return (
    <>
      <div className="tableheader-container">
        <SearchPanel
          icon={
            <SvgIcon
              xlmns={icons.xlmn}
              viewbox={icons.viewBox}
              iconPath={icons.search}
              mainStyle="search-panel-icon"
            />
          }
          placeholder="Search"
        />
        <ColumnHeader text="SELECTED: 0" /> /* ##########################
        <a href="#">
          <SvgIcon
            xlmns={icons.xlmn}
            viewbox={icons.viewBox}
            iconPath={icons.scripts}
            mainStyle="svg"
          />
        </a>
      </div>
      <thead>
        <tr>
          <th>
            <Checkbox />
          </th>
          <th>
            <span>
              <ColumnHeader text="#" />
              <SortColumn />
            </span>
          </th>
          <th>
            <span>
              <ColumnHeader text="NAME" />
              <SortColumn />
            </span>
          </th>
          <th>
            <ColumnHeader text="EMAIL" />
          </th>
          <th>
            <ColumnHeader text="TWITTER" />
          </th>
          <th>
            <ColumnHeader text="DISCORD" />
          </th>
          <th>
            <ColumnHeader text="TELEGRAM" />
          </th>
          <th>
            <ColumnHeader text="TELEPHONE" />
          </th>
          <th>
            <ColumnHeader text="GITHUB" />
          </th>
          <th>
            <span>
              <ColumnHeader text="BALANCE" />
              <SortColumn />
            </span>
          </th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeaders;
