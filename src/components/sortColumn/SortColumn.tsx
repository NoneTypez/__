// import ISortColumn from "./SortColumn.props"
import SvgIcon from "../svgIcon/SvgIcon";
import { icons } from "../../models";
import { SvgIconAppearance } from "../../enums";

function SortColumn(): JSX.Element {
  return (
    <a href="#">
      <SvgIcon
        path={icons.arrow_up}
        appearance={SvgIconAppearance.sortTriangle}
      />
      <SvgIcon
        path={icons.arrow_down}
        appearance={SvgIconAppearance.sortTriangle}
      />
    </a>
  );
}

export default SortColumn;
