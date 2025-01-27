import styles from "./SortColumn.module.css";
import SortIconProps from "./SortColumn.props";

function SortIcon({ isAscending, onClick }: SortIconProps): JSX.Element {
  return (
    <button
      className={styles.sortIcon}
      onClick={onClick}
      aria-label="Сортировка"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width="24"
        height="24"
      >
        {/* Стрелка вверх */}
        <path
          d="m280-400 200-200 200 200H280Z"
          stroke={isAscending ? "blue" : "gray"} // Подсветка в зависимости от состояния
          strokeWidth="2"
          fill="#5b5b5b"
        />
        {/* Стрелка вниз */}
        <path
          d="M480-360 280-560h400L480-360Z"
          stroke={isAscending ? "gray" : "blue"} // Подсветка в зависимости от состояния
          strokeWidth="2"
          fill="#5b5b5b"
        />
      </svg>
    </button>
  );
}

export default SortIcon;
