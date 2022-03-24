export default function wordReducer(state = [], action) {
  switch (action.type) {
    case "Add_Item":
      return [...state, action.payload];
    default:
      return state;
  }
}
