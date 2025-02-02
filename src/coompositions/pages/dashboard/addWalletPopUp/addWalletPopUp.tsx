import styles from "./addWalletPopUp.module.css";
import cn from "classnames";
import IAddWalletPopUpProps from "./addWalletPopUpProps";
import Button from "../../../../components/button/button";
import { ButtonAppearance } from "../../../../enums";

function AddWalletPopUp({ children }: IAddWalletPopUpProps): JSX.Element {
  return (
    <>
      <div className={cn(styles.mainBlock)}>{children}</div>
      <div className={cn(styles.bottomBlock)}>
        <Button appearance={ButtonAppearance.grey} text="CANCEL" />
        <Button appearance={ButtonAppearance.grey} text="CREATE" />
      </div>
    </>
  );
}

export default AddWalletPopUp;
