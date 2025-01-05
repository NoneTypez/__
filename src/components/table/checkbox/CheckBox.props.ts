import { InputHTMLAttributes } from "react";
export default interface ICheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  appearance?: string;
}
