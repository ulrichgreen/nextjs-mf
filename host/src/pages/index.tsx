import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { Text, TextJsx, TextHook } from "remote/components";

export async function getServerSideProps() {
  return { props: { data: 'Hello from the server!' } }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Feel free to toggle the text.</h1>
        <p>{Text}</p>
        <TextJsx />
        <TextHook />
      </main>
    </>
  );
}
