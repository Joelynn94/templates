import Button from '../Button'
import Heading from '../Heading'

export default function Navigation() {
  return (
    <nav className="py-6 mb-8">
      <div className="container mx-auto flex items-center justify-between">
        <Heading level={1}>skilled</Heading>
        <Button>Get Started</Button>
      </div>
    </nav>
  )
}
