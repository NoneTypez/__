import { ReactNode } from "react";

export default interface IPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  width?: number; // ✅ Добавили возможность задать ширину
  height?: number; // ✅ Добавили возможность задать высоту
}
