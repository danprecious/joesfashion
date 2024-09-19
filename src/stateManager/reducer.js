export const reducer = ( state, action ) => {
  if (action.type === "NAV_TOGGLE") {
    return {
      ...state,
      toggleNav:  action.payload,
    };
  }
};
