import Button from 'components/Button'
import Heading from 'components/Heading'

export default function Footer() {
  return (
    <div className="h-28 bg-indigo-950 flex justify-between items-center mt-24">
      <div className="container mx-auto flex justify-between items-center gap-2.5">
        <Heading level={1} className="text-white">
          skilled
        </Heading>
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </div>
  )
}
