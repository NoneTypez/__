import { HTMLAttributes } from "react";
import { SearcherAppearance } from "../../enums";

export default interface ISearchPanel extends HTMLAttributes<HTMLElement> {
  icon?: JSX.Element;
  placeholder: string;
  appearance: SearcherAppearance;
}
