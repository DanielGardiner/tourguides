import Header from "./Header";

export default function FullPageWidth({ children }) {
  return (
    <div className="left-[50%] ml-[-50vw] mr-[-50vw] max-w-[100vw] relative right-[50%] w-[100vw] h-full">
      {children}
    </div>
  )
}
