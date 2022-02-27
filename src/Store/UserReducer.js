export const initialState = {
  name: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      <return>...state,name:action.payload</return>;
      break;
    case "":
      <return>...state,name:action.payload</return>;
      break;
    // case "":
    //   <return>...state,name:action.payload</return>;
    //   break;

    default:
      return state;
  }
};
