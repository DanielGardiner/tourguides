import { getSession } from 'next-auth/react'


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

  return (
    <h1>Go look at your email</h1>
  )
}
