export const reducer = (state, action) => {
  if (action.type === "NAV_TOGGLE") {
    return {
      ...state,
      toggleNav: action.payload,
    };
  }
  if (action.type === "OPEN_GET_AN_ATTIRE") {
    return {
      ...state,
      getAnAttireOpen: true,
    };
  }
  if (action.type === "CLOSE_GET_AN_ATTIRE") {
    return {
      ...state,
      getAnAttireOpen: false,
    };
  }
};
