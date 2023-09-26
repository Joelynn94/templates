import Button from './components/Button'
import Heading from './components/Heading'
import BodyText from './components/BodyText'
import CourseCard from './components/CourseCard'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SpecialCard from './components/SpecialCard'

export default function App() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50">
      <Navigation />

      <div className="container mx-auto">
        <div className="grid gap-16 md:grid-cols-2 items-center mb-16 lg:mb-36">
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
            <img
              src="src/public/image-hero-mobile@2x.webp"
              alt="hero"
              className="rounded-lg md:hidden z-1"
            />
            <div className="hidden md:flex flex-col rounded-xl bg-white p-6 drop-shadow-2xl absolute top-12 right-0 sm:right-16 md:-right-12 lg:right-4 2xl:right-28 z-1">
              <BodyText size="lg">Members</BodyText>
              <Heading level={2}>29K</Heading>
            </div>
            <img
              className="hidden md:block mx-auto max-w-xs z-1"
              src="src/public/main-bg.png"
            />
            <div className="hidden md:flex flex-col rounded-xl bg-white p-6 drop-shadow-2xl absolute bottom-20 left-0 sm:left-16 md:-left-12 lg:left-4 2xl:left-16 z-1">
              <BodyText size="lg">Course Hours</BodyText>
              <Heading level={2}>1,451</Heading>
            </div>
            {/* <div className="w-72 h-[800px] origin-center rotate-[50deg] bg-gradient-to-b from-indigo-600 to-pink-500 rounded-full absolute top-[-54px] right-[54px] z-0"></div> */}
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 items-center mb-12">
          <SpecialCard />

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

      <Footer />
    </div>
  )
}
