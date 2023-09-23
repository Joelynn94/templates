import Avatar from 'components/Avatar'
import Button from './Button'

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
]

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <Button>Click me</Button>
      </div>
    </div>
  )
}

export default App
