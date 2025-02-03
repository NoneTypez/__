import { ReactNode } from "react";

export default interface IPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  width?: number;
  height?: number;
}
