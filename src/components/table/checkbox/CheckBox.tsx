import ICheckboxProps from "./CheckBox.props";
import style from "./CheckBox.module.css";
import cn from "classnames";

function Checkbox({
  checked,
  label,
  onChange,
  id,
  appearance = "",
}: ICheckboxProps): JSX.Element {
  const input = (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className={cn(style["checkbox"], style[appearance])}
    />
  );

  return (
    <div className="checkbox-container">
      {label ? (
        <label htmlFor={id} className="checkbox-wrapper">
          {input}
          <span className="checkbox-label">{label}</span>
        </label>
      ) : (
        input
      )}
    </div>
  );
}

export default Checkbox;
