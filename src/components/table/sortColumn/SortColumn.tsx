// import ISortColumn from "./SortColumn.props"
import SvgIcon from "../../icon/SvgIcon";
import { sortDirections } from "../../../models";

function SortColumn(): JSX.Element {
  return (
    <a href="#">
      <SvgIcon
        mainStyle="sort-rectangle"
        xlmns={sortDirections.xlmn}
        viewbox={sortDirections.viebox}
        iconPath={sortDirections.updir}
      />
      <SvgIcon
        mainStyle="sort-rectangle"
        xlmns={sortDirections.xlmn}
        viewbox={sortDirections.viebox}
        iconPath={sortDirections.downdir}
      />
    </a>
  );
}

export default SortColumn;
