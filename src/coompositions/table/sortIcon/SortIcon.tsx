import { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

interface SortIconProps {
  onClick: (isAscending: boolean) => void;
}

function SortIcon({ onClick }: SortIconProps): JSX.Element {
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = () => {
    const newDirection = !isAscending;
    setIsAscending(newDirection);
    onClick(newDirection); // Передаем состояние вверх
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Сортировка"
      style={{ border: "none", cursor: "pointer" }}
    >
      {isAscending ? (
        <FaSortUp style={{ color: "#999" }} />
      ) : (
        <FaSortDown style={{ color: "#999" }} />
      )}
    </button>
  );
}

export default SortIcon;
