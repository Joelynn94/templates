import Button from './Button'
import Heading from './Heading'
import BodyText from './BodyText'
import CourseCard from './CourseCard'

function App() {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between py-6 mb-8">
        <Heading level={1}>skilled</Heading>
        <Button>Get Started</Button>
      </nav>

      <div className="grid gap-16 md:grid-cols-2 items-center mb-16 lg:mb-36">
        <div className="flex flex-col gap-6">
          <Heading level={1}>
            Maximize skill,
            <br />
            minimize budget
          </Heading>
          <BodyText size="md">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </BodyText>
          <Button variant="primary" className="self-start">
            Get Started
          </Button>
        </div>
        <div className="relative flex flex-col">
          <div className="relative">
            <div className="flex flex-col rounded-xl bg-white p-6 drop-shadow-2xl absolute top-12 right-0 sm:right-16 md:-right-12 lg:right-4 2xl:right-28">
              <BodyText size="lg">Members</BodyText>
              <Heading level={2}>29K</Heading>
            </div>
            <img className="mx-auto max-w-xs" src="src/public/main-bg.png" />
            <div className="flex flex-col rounded-xl bg-white p-6 drop-shadow-2xl absolute bottom-20 left-0 sm:left-16 md:-left-12 lg:left-4 2xl:left-16">
              <BodyText size="lg">Course Hours</BodyText>
              <Heading level={2}>1,451</Heading>
            </div>
            <div className="hidden w-72 h-[800px] origin-center rotate-[50deg] bg-gradient-to-b from-indigo-600 to-pink-500 rounded-full absolute top-[-54px] right-[54px] z-[-1]"></div>
          </div>
        </div>
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="h-full flex gap-2.5 px-7 py-8 bg-gradient-to-b from-orange-400 to-pink-500 rounded-lg justify-center items-center">
          <div className="text-white text-2xl font-extrabold leading-loose">
            Check out our most popular courses!
          </div>
        </div>

        <CourseCard
          icon="animation"
          body="Learn the latest animation techniques to create stunning motion design and captivate your audience."
          heading="Animation"
          buttonText="Get Started"
        />

        <CourseCard
          icon="design"
          body="Create beautiful, usable interfaces to help shape the future of how the web looks."
          heading="Design"
          buttonText="Get Started"
        />

        <CourseCard
          icon="photography"
          body="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
          heading="Photography"
          buttonText="Get Started"
        />

        <CourseCard
          icon="crypto"
          body="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
          heading="Crypto"
          buttonText="Get Started"
        />

        <CourseCard
          icon="business"
          body="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
          heading="Business"
          buttonText="Get Started"
        />
      </div>
    </div>
  )
}

export default App
