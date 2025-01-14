import { InputHTMLAttributes } from "react";
import { CheckboxAppearance } from "../../enums";

export default interface ICheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  appearance: CheckboxAppearance;
}
