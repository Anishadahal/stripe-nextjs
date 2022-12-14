import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Buy my physical NFT&apos;</h1>

        <p className={styles.description}>Get started</p>
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <Image src="/images/image2.jpeg" alt="" height={300} width={250} />
            <p>Very expensive art piece 1</p>
          </a>
          <a href="" className={styles.card}>
          <Image src="/images/image1.webp" alt="" height={300} width={250} />
          <p>Very expensive art piece 2</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
