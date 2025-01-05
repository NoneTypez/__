import { HTMLAttributes } from "react";

export default interface IColumnHeaderProps
  extends HTMLAttributes<HTMLElement> {
  appearance?: string;
  text: string;
}
