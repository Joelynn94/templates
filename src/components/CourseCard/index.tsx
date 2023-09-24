import BodyText from '../BodyText'

type CourseCardProps = {
  icon: string
  body: string
  heading: string
  buttonText: string
  className?: string
}

export default function CourseCard({
  icon,
  body,
  heading,
  buttonText
}: CourseCardProps) {
  return (
    <div className="relative">
      <div className="absolute left-7 -top-8">
        <img className="" src={`src/public/icon-${icon}.svg`} />
      </div>
      <div className="flex px-7 py-8 bg-white rounded-lg shadow-lg flex-col justify-center items-start gap-5">
        <BodyText size="xl" className="text-indigo-950">
          {heading}
        </BodyText>
        <BodyText size="md">{body}</BodyText>
        <div className="text-pink-500 text-lg font-bold leading-7">
          {buttonText}
        </div>
      </div>
    </div>
  )
}
