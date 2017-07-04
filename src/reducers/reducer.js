//reducerは，現在のstateとactionから新しいstateの生成を行う
export default function Counter(state={count: 0}, action) {
  switch(action.type){
    case "INCREMENT":
      return {count: state.count + 1}
    case "DECREMENT":
      return {count: state.count - 1}
    default:
      return state
  }
}
