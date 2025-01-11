import styles from "./leftSide.module.css";
import cn from "classnames";
// import ILeftSide from "./leftSide.props";

// function LeftSide({
//   topSection,
//   centerSection,
//   bottomSection,
// }: ILeftSide): JSX.Element {
//   return (
//     <aside className={cn(styles.leftSide)}>
//       {topSection}
//       {centerSection}
//       {bottomSection}
//     </aside>
//   );
// }

function LeftSide(): JSX.Element {
  return <aside className={cn(styles.leftside)}></aside>;
}
export default LeftSide;
