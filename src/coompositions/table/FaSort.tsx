// import { useState } from "react";
// import { FaSortUp, FaSortDown } from "react-icons/fa"; // Импортируем иконки

// interface SortIconProps {
//   onClick?: () => void; // onClick для обработки кликов
// }

// const SortIcon: React.FC<SortIconProps> = ({ onClick }) => {
//   const [isAscending, setIsAscending] = useState(true); // Состояние для отслеживания порядка сортировки

//   const handleClick = () => {
//     setIsAscending((prev) => !prev); // Меняем состояние на противоположное
//     if (onClick) onClick(); // Если передан onClick, вызываем его
//   };

//   return (
//     <button
//       onClick={handleClick}
//       aria-label="Сортировка"
//       style={{ background: "none", border: "none", cursor: "pointer" }}
//     >
//       {isAscending ? (
//         <FaSortUp style={{ color: "blue", transition: "color 0.3s ease" }} />
//       ) : (
//         <FaSortDown style={{ color: "blue", transition: "color 0.3s ease" }} />
//       )}
//     </button>
//   );
// };

// export default SortIcon;
