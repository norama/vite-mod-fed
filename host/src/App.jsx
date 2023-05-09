import './App.css'
import { useStore } from '@nanostores/react'
import Button from 'remoteApp/Button'
import store from 'remoteStore/Store'

function App() {
  const { counter, increase } = store
  const count = useStore(counter)

  return (
    <div className="App">
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => increase()}>HOST count is {count}</button>
      </div>
    </div>
  )
}

export default App
