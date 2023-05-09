import './Button.css'
import { useStore } from '@nanostores/react'
import store from 'remoteStore/Store'

export const Button = () => {
  const { counter, increase } = store
  const count = useStore(counter)

  return (
    <div>
      <button className="shared-btn" onClick={() => increase()}>
        REMOTE count is: {count}
      </button>
    </div>
  )
}

export default Button
