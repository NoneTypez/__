import IColumnHeaderProps from "./ColumnHeader.props";
import styles from ". ColumnHeader.module.css";
import cn from "classnames";

function ColumnHeader({
  appearance = "",
  text,
}: IColumnHeaderProps): JSX.Element {
  return (
    <span className={cn(styles["header"], styles[appearance])}>{text}</span>
  );
}

export default ColumnHeader;
