import { createContext } from "react";

interface UIContextInterface {
  isSidebarOpened: boolean;
  toggleSidebar: () => void;
}

export const UIContext = createContext({} as UIContextInterface);
