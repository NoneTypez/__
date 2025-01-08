import Checkbox from "../checkbox/CheckBox";
import ColumnHeader from "../columnHeader/ColumnHeader";
import SearchPanel from "../searchPanel/SearchPanel";
import SortColumn from "../sortColumn/SortColumn";
import SvgIcon from "../../icon/SvgIcon";
import { icons } from "../../../models";

function TableHeaders(): JSX.Element {
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
      <div className="tableheader-container">
        <Checkbox />
        <span>
          <ColumnHeader text="#" />
          <SortColumn />
        </span>
        <span>
          <ColumnHeader text="NAME" />
          <SortColumn />
        </span>
        <ColumnHeader text="EMAIL" />
        <ColumnHeader text="TWITTER" />
        <ColumnHeader text="DISCORD" />
        <ColumnHeader text="TELEGRAM" />
        <ColumnHeader text="TELEPHONE" />
        <ColumnHeader text="GITHUB" />
        <span>
          <ColumnHeader text="BALANCE" />
          <SortColumn />
        </span>
      </div>
    </>
  );
}

export default TableHeaders;
