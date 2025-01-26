import cn from "classnames";
import styles from "./Window.module.css";
import { WindowProps } from "./Window.props";
import Footer from "./footer/Footer";

function Window({ children }: WindowProps): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.page)}>{children}</div>
      <Footer />
    </div>
  );
}

export default Window;
