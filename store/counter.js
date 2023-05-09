import store from './src/Store'

export function setupCounter(element) {
  const { count, increase, reset } = store
  const incCounter = () => {
    increase()
    element.innerHTML = `count is ${count()}`
  }
  element.addEventListener('click', () => incCounter())
  reset()
  element.innerHTML = `count is ${count()}`
}
