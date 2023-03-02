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
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/white_logo.svg"
            alt="Caribu Logo"
            width={720}
            height={240}
            sizes="max-width: 90vw"
            priority
          />
        </div>

        <div className={styles.info}>
        <p><i style={{ color: '#05C7C7' }}>
          Microservice Migration Simplified
        </i>
          </p>
        </div>
          <br/><br/>
          <div style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
            <p className={styles.blurb}>
            Caribu is a microservice migration planning tool for Express.js that assists you in analyzing your monolithic architecture by parsing your server's routes and middleware to identifying ready-to-migrate clusters.
            </p>
            <br></br>
          </div>
          <div style={{display : 'flex', alignItems : 'center', justifyContent : 'center', marginTop : '10px', marginBottom : '50px'}}>
              <p style={{fontSize : 'small', fontFamily : 'Helvetica, Arial, sans-serif', textAlign : 'center'}}> 
              Note: If you cannot run our application. Run <i><b>sudo xattr -r -d com.apple.quarantine '/Applications/Caribu.app'</b></i> in your terminal
              </p>
            <br></br>
          </div>

        <div className={styles.grid}>
          {/* <Link
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
          </Link> */}

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
              Check out our repo
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
              Try the app out for yourself
            </p>
          </a>

          <Link
            href="/about"
            className={styles.card}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Meet the developers
            </p>
          </Link>

        </div>
      </main>
    </>
  )
}
