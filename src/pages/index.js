import Head from 'next/head'
import Image from 'next/image'
import prisma from '../server/prismaClient'
import styles from '../styles/Home.module.css'
import { getSession, signIn, signOut } from 'next-auth/react'
import Button from '../components/Button'

export async function getServerSideProps({req, res}) {
  const session = await getSession({ req })
  const tours = await prisma.tour.findMany()


  return {
    props: {
      session,
      tours
    },
  }
}

export default function Home({
  session,
  tours,
}) {

  console.log('%c [qq]: session ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', session, '\n\n');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
          ) : (
          <Button onClick={() => signIn()}>Sign in</Button>
          )}

        
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className={styles.grid}>
          {tours?.map((tour) => {
            return (
              <a href="https://nextjs.org/docs" className={styles.card} key={tour?.id}>
                <h2>{tour?.name} &rarr;</h2>
                <p>{tour?.city}</p>
                <p>{tour?.descriptionShort}</p>
              </a>
            )
          })}
          
        </div>
        <pre>
          {JSON.stringify(tours, null, 2)}
        </pre>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
