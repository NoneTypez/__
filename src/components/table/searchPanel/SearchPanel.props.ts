import { HTMLAttributes } from "react";

export default interface ISearchPanel extends HTMLAttributes<HTMLElement> {
  icon?: JSX.Element;
  placeholder: string;
}
