import { useState } from "react";
import SortIconProps from "./sortIconProps";
import { FaSortUp, FaSortDown } from "react-icons/fa";

function SortIcon({ onClick }: SortIconProps): JSX.Element {
  const [isAscending, setIsAscending] = useState(true); // Состояние для отслеживания порядка сортировки

  const handleClick = () => {
    setIsAscending((prev) => !prev); // Меняем состояние на противоположное
    if (onClick) onClick(); // Если передан onClick, вызываем его
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Сортировка"
      style={{ border: "none", cursor: "pointer" }}
    >
      {isAscending ? (
        <FaSortUp style={{ color: "#999", transition: "color 0.3s ease" }} />
      ) : (
        <FaSortDown style={{ color: "#999", transition: "color 0.3s ease" }} />
      )}
    </button>
  );
}

export default SortIcon;
