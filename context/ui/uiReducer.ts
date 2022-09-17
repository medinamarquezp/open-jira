import { UIProviderInterface } from "./UIProvider";

type Action =
  | { type: "[UI] toggle-sidebar" }
  | { type: "[UI] toggle-dragging" };

export const uiReducer = (state: UIProviderInterface, action: Action) => {
  switch (action.type) {
    case "[UI] toggle-sidebar":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    case "[UI] toggle-dragging":
      return { ...state, isDragging: !state.isDragging };
    default:
      return state;
  }
};
