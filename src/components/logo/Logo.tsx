import LogoProps from "./Logo.props";
import cn from "classnames";
import styles from "./Logo.module.css";

function Logo({ src }: LogoProps): JSX.Element {
  return (
    <span>
      <img className={cn(styles.logo)} src={src} alt="Logo" />
    </span>
  );
}

export default Logo;
