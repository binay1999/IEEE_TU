export default function(state = {}, action) {
  switch (action.type) {
    case "GET_EVENTS":
      return { ...state, list: action.payload };
    case "ADD_EVENT":
      return { ...state, newevent: action.payload };
    default:
      return state;
  }
}
