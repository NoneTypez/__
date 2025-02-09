import cn from "classnames";
import styles from "./errorPage.module.css";

function ErrorPage(): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <span>There is nothing here ...</span>
    </div>
  );
}
export default ErrorPage;
