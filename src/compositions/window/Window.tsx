import cn from "classnames";
import styles from "./Window.module.css";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { WindowProps } from "./Window.props";

function Window({ children }: WindowProps): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.page)}>
        {children}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Window;
