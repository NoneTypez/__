import styles from "./addWalletPopUp.module.css";
import cn from "classnames";
import IAddWalletPopUpProps from "./addWalletPopUpProps";
import Button from "../../../../components/button/button";
import { ButtonAppearance } from "../../../../enums";

function AddWalletPopUp({ children }: IAddWalletPopUpProps): JSX.Element {
  return (
    <>
      {/* GENERATE!!!!!!!!!!!!!!!!!!!####### */}
      <div className={cn(styles.mainBlock)}>
        {/* NAME */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="name"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="name" className={cn(styles.placeholder)}>
              name
            </label>
          </div>
        </div>
        {/* EMAIL */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="email"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="email" className={cn(styles.placeholder)}>
              email
            </label>
          </div>
        </div>
        {/* TWITTER */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="twitter"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="twitter" className={cn(styles.placeholder)}>
              twitter
            </label>
          </div>
        </div>
        {/* DISCORD */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="discord"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="discord" className={cn(styles.placeholder)}>
              discord
            </label>
          </div>
        </div>
        {/* TELEGRAM */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="telegram"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="telegram" className={cn(styles.placeholder)}>
              telegram
            </label>
          </div>
        </div>
        {/* TELEPHONE */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="phone"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="phone" className={cn(styles.placeholder)}>
              phone
            </label>
          </div>
        </div>
        {/* GITHUB */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="github"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="github" className={cn(styles.placeholder)}>
              github
            </label>
          </div>
        </div>
        {/* EVM */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="evm"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="evm" className={cn(styles.placeholder)}>
              evm
            </label>
            <span className={cn(styles.address)}>address:</span>
          </div>
          <Button appearance={ButtonAppearance.grey} text="generate" />
        </div>
        {/* SOLANA */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="solana"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="email" className={cn(styles.placeholder)}>
              solana
            </label>
            <span className={cn(styles.address)}>address:</span>
          </div>
          <Button appearance={ButtonAppearance.grey} text="generate" />
        </div>
        {/* BTC */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="btc"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="btc" className={cn(styles.placeholder)}>
              btc
            </label>
            <span className={cn(styles.address)}>address:</span>
          </div>
          <Button appearance={ButtonAppearance.grey} text="generate" />
        </div>
        {/* ATOM */}
        <div className={cn(styles.form)}>
          {children}
          <div className={cn(styles.inputContainer, styles.ic1)}>
            <input
              type="text"
              id="atom"
              className={cn(styles.input)}
              placeholder=" "
            />
            <div className={cn(styles.cut)}></div>
            <label htmlFor="atom" className={cn(styles.placeholder)}>
              atom
            </label>
            <span className={cn(styles.address)}>
              address: 0xAe99cA2b7C75Daf396b2Ad27d5e59D9a5119445B
            </span>
          </div>
          <Button appearance={ButtonAppearance.grey} text="generate" />
        </div>
      </div>
      <div className={cn(styles.bottomBlock)}>
        <Button appearance={ButtonAppearance.cancelBtn} text="CANCEL" />
        <Button appearance={ButtonAppearance.modBtn} text="CREATE" />
      </div>
    </>
  );
}

export default AddWalletPopUp;
