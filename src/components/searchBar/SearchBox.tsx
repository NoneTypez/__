import React, { useState } from "react";
import cn from "classnames";
import styles from "./searchBox.module.css";
function SearchBox() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleClear() {
    setInputValue("");
  }

  return (
    <div className={cn(styles.searchBar)}>
      <input
        type="text"
        placeholder="Search..."
        className={cn(styles.searchInput)}
        value={inputValue}
        onChange={handleChange}
      />
      {inputValue && (
        <button className={cn(styles.clearButton)} onClick={handleClear}>
          ×
        </button>
      )}
      {/* {console.log(inputValue)} */}
    </div>
  );
}

export default SearchBox;
