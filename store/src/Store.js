import { atom } from 'nanostores'

const counter = atom(0)

const store = {
  counter,
  count: () => counter.get(),
  increase: () => counter.set(counter.get() + 1),
  reset: () => counter.set(0),
}

export default store
