type ButtonProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      {...props}
    >
      {children}
    </button>
  )
}
