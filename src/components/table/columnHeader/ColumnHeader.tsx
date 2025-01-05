import IColumnHeaderProps from "./ColumnHeader.props";
import style from ". ColumnHeader.module.css";
import cn from "classnames";

function ColumnHeader({
  appearance = "",
  text,
}: IColumnHeaderProps): JSX.Element {
  return <span className={cn(style["header"], style[appearance])}>{text}</span>;
}

export default ColumnHeader;
