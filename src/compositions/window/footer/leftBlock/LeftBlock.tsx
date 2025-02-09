import styles from "./leftBlock.module.css";
import cn from "classnames";
import ILeftBlockProps from "./leftBlockProps";

function LeftBlock({ gasPrice, balance }: ILeftBlockProps): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <span>GAS PRICE: {gasPrice} $</span>
      <span>TOTAL BALANCE: {balance} $</span>{" "}
    </div>
  );
}

export default LeftBlock;
