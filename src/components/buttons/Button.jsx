export default function Button(props) {
  return (
    <button
      {...props}
      className={`
        inline-block
        px-6
        py-2.5
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
        
        ${props.muted ? 'bg-blue-300' : 'bg-blue-600'}
      `}
    >{props.children}</button>
  )
}
