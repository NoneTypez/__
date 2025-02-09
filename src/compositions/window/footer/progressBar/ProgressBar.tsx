import styles from "./progressBar.module.css";
import cn from "classnames";
import IProgressBar from "./progressBarProps";

function ProgressBar({ value }: IProgressBar): JSX.Element {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.progress)}>
        <div
          className={cn(styles.progress_value)}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
