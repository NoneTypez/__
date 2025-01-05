import ISearchPanel from "./SearchPanel.props";
import styles from "./SearchPanel.module.css";
import cn from "classnames";

function SearchPanel({ icon, placeholder }: ISearchPanel): JSX.Element {
  return (
    <div className={cn(styles["main"], styles["input"])}>
      {icon && icon}
      <input
        type="text"
        placeholder={placeholder}
        // onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchPanel;
