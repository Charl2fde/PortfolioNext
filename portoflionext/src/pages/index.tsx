import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav style={inter.style}>
        <NavBar />
      </nav>
      <main style={inter.style}>
        <section className={styles.containerHomePage}>
          <div className={styles.titleHomePage}>
            <h1>Charles de Feligonde</h1>
          </div>
          <div className={styles.descritpionHomePage}>
            <p>Etudiant en 3ème année à l’EPSI Paris <br />
              Passionné du <span>développement web</span>, j’aime <br />
              <span>créer</span> et participer à des projets.</p>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonFade}>
              <div className={styles.buttonCV}>
                <p>Mon CV</p>
              </div>
            </div>
            <div className={styles.buttonProjets}>
              <p>Projets</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
