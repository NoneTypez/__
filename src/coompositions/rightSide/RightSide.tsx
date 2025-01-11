import cn from "classnames";
import styles from "./rightSide.module.css";
import { RightSideProps } from "./rightSide.props";

function RightSide({ children }: RightSideProps): JSX.Element {
  return <div className={cn(styles.rightSide)}>{children}</div>;
}

export default RightSide;
