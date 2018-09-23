
const initialState = {
  test: "ValueDuStore"
}
export default function TestReducer(state = initialState, action: any) {
  switch (action.type) {
    case "TEST":
      return {
        test: state.test
      }
    default:
      return state
  }

}