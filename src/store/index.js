import { createStore } from 'redux'

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === 'increment') {
    return { counter: state.counter + 1 }
  }
  if (action.type === 'decrement') {
    return { counter: state.counter - 1 }
  }

  return state
}

export const store = createStore(counterReducer)

/* function reduceSuscribe() {
  const lastState = store.getState()

  console.log(lastState)
} */
/* store.suscribe(reduceSuscribe)
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' }) */
