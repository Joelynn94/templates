import Avatar from 'components/Avatar'
import Button from './Button'
import Heading from './Heading'
import BodyText from './BodyText'

function App() {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <Heading level={1}>
                Maximize skill,
                <br />
                minimize budget
              </Heading>
              <BodyText size="lg" className="mt-4">
                Our modern courses across a range of in-demand skills will give
                you the knowledge you need to live the life you want.
              </BodyText>
              <Button variant="primary">Click me</Button>
            </div>
            <div className="flex flex-col">
              <Button>Click me</Button>
              <Button variant="primary">Click me</Button>
              <Button variant="secondary">Click me</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
