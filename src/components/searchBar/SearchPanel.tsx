import ISearchPanel from "./SearchPanel.props";
import styles from "./SearchPanel.module.css";
import cn from "classnames";

function SearchPanel({
  icon,
  placeholder,
  appearance,
}: ISearchPanel): JSX.Element {
  return (
    <div className={cn(styles[appearance])}>
      {icon && icon}
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default SearchPanel;
