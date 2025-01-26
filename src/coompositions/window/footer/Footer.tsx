import LeftBlock from "./leftBlock/LeftBlock";
import ProgressBar from "./progressBar/ProgressBar";
import cn from "classnames";
import styles from "./footer.module.css";

function Footer(): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <LeftBlock gasPrice={"10 GWEI 0.1"} balance="1" />
      <ProgressBar value={45} />
    </div>
  );
}

export default Footer;
