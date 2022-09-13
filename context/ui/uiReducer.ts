import { UIProviderInterface } from "./UIProvider";

type Action = { type: "[UI] toggle-sidebar" };

export const uiReducer = (state: UIProviderInterface, action: Action) => {
  switch (action.type) {
    case "[UI] toggle-sidebar":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default:
      return state;
  }
};
