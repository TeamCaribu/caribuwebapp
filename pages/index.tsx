import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Caribu Splash Page</title>
        <meta name="description" content="Caribu's home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Try out our migration assistant!
          </p>
          <div>
            <a
              href="https://github.com/oslabs-beta/Caribu"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Team Caribu
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/CaribuLogo.png"
            alt="Caribu Logo"
            width={720}
            height={240}
            priority
          />
        </div>

        <div className={styles.info}>
        <p>
          Migration like the majestic Caribu.
          </p>
          <p>
          Like the majestic Caribu, our application is migratory.
          </p>
          <p>
          Caribu is a tool for assisting with migration of an application from a monolithic architecture to a microservice based architecture.
          </p>
        </div>

        <div className={styles.grid}>
          <Link
            href="/documentation"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get started with Caribu
            </p>
          </Link>

          <a
            href="https://github.com/oslabs-beta/Caribu"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Checkout our Github
            </p>
          </a>

          <a
            href="https://github.com/oslabs-beta/Caribu"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Download <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Download our app and try it out for yourself
            </p>
          </a>

          <Link
            href="/about"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About us <span>-&gt;</span>
            </h2>
          </Link>

        </div>
      </main>
    </>
  )
}
