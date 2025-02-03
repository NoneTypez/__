import ReactDOM from "react-dom";
import IPopupProps from "./PopUpProps";
import styles from "./popUp.module.css";
import cn from "classnames";

function Popup({
  isOpen,
  onClose,
  width,
  height,
  children,
}: IPopupProps): JSX.Element | null {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={cn(styles.overlay)} onClick={onClose}>
      <div
        className={cn(styles.popup)}
        style={{ width: width || 400, height: height || "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={cn(styles.closeButton)} onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Popup;
