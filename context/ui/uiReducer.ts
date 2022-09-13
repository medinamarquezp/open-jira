import { UIProviderInterface } from "./UIProvider";

type Action = { type: "toggle-sidebar" };

export const uiReducer = (state: UIProviderInterface, action: Action) => {
  switch (action.type) {
    case "toggle-sidebar":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default:
      return state;
  }
};
