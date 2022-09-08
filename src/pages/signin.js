import { getSession } from 'next-auth/react'
import {signIn, signOut} from 'next-auth/react';


export async function getServerSideProps({req, res}) {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
    },
  }
}

export default function Home({tours}) {
signIn
  return (
<>
    <h1>Do sign in</h1>
    <button onClick={() => signIn("email", { email: "daniel.gardiner.tech+999@gmail.com" })}>Sign in</button>
    </>
  )
}
