import Header from "./Header";

// {session ? (
//   <button onClick={() => signOut()}>Sign out</button>
//   ) : (
//   <Button onClick={() => signIn()}>Sign in</Button>
//   )}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </div>
    </>
  )
}
