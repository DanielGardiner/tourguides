import { getSession } from 'next-auth/react'

async function getHasPagePermission({req, redirectDestination='/'}) {
  const session = await getSession({ req })

  // TODO: do the check for role/permission

  return false
}

export async function getServerSideProps({req, res}) {
  const hasPagePermission = await getHasPagePermission({req})

  if (!hasPagePermission) {
    return {redirect: { destination: '/' }}
  }

  return { props: {}}
}

export default function Home({tours}) {

  return (
    <h1>Secret Page</h1>
  )
}
