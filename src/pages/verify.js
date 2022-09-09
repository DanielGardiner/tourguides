import { getSession } from 'next-auth/react'
import Layout from '../components/Layout'


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

export default function VerifyPage({tours}) {

  return (
    <Layout>
      <h1>Go look at your email</h1>
    </Layout>
  )
}
