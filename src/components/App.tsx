import Button from './Button'
import Heading from './Heading'
import BodyText from './BodyText'

function App() {
  return (
    <div className="relative h-screen">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-6 mb-8">
          <Heading level={1}>skilled</Heading>
          <Button>Get Started</Button>
        </nav>
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <Heading level={1}>
              Maximize skill,
              <br />
              minimize budget
            </Heading>
            <BodyText size="md">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </BodyText>
            <Button variant="primary" className="self-start">
              Get Started
            </Button>
          </div>
          <div className="relative flex flex-col">
            <div className="relative">
              <div className="flex flex-col rounded-xl bg-white p-6 shadow absolute top-12 right-0 sm:right-16 md:-right-12 lg:right-4 2xl:right-28">
                <BodyText size="lg">Members</BodyText>
                <Heading level={2}>29K</Heading>
              </div>
              <img className="mx-auto max-w-xs" src="src/public/main-bg.png" />
              <div className="flex flex-col rounded-xl bg-white p-6 shadow absolute bottom-20 left-0 sm:left-16 md:-left-12 lg:left-4 2xl:left-16">
                <BodyText size="lg">Course Hours</BodyText>
                <Heading level={2}>1,451</Heading>
              </div>
              <div className="hidden w-72 h-[800px] origin-center rotate-[50deg] bg-gradient-to-b from-indigo-600 to-pink-500 rounded-full absolute top-[-54px] right-[54px] z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
