import Header from "./Header";

export default function Layout({ children, session }) {
  return (
    <>
      <Header session={session} />
      <div className="w-full flex justify-center min-h-screen">
        <div className="w-full max-w-7xl px-4">
          {children}
        </div>
      </div>
    </>
  )
}
