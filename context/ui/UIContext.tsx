import { createContext } from "react";

interface UIContextInterface {
  isSidebarOpened: boolean;
  isDragging: boolean;
  toggleSidebar: () => void;
  toggleDragging: () => void;
}

export const UIContext = createContext({} as UIContextInterface);
