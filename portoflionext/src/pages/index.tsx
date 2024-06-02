import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar";
import Separator from "@/components/separator";
import Html from "@/components/skills/html";
import Css from "@/components/skills/css";
import Php from "@/components/skills/php";
import Js from "@/components/skills/js";
import Sql from "@/components/skills/sql";
import Footer from "@/components/footer/footer";
import MessageInput from "@/components/form/message";
import NameInput from "@/components/form/nom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Charles de Feligonde</title>
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
        <section className={styles.containerApropos}>
          <Separator />
          <div className={styles.titleApropos}>
            <h1>A propos de moi</h1>
          </div>
          <div className={styles.containerTextApropos}>
            <div className={styles.containerBio}>
              <div className={styles.bio}>
                <p>
                  Je m'appelle Charles de Feligonde, j'ai 20 ans, je suis étudiant à l'EPSI - Paris La Défense.
                  Je suis en 3ème année du programme Socle Numérique que propose l'EPSI avec obtention du BTS SIO
                  (Services Informatiques aux Organisations) avec la spécialité SLAM (Solutions Logicielles et Applications Métier).
                  Plus jeune, jamais je n'aurai pensé entrer dans ce domaine et c'est en dernière année de lycée général,
                  par manque d'idée pour mon avenir, que l'idée de me tourner vers l'informatique m'est venue. Aujourd'hui,
                  c'est grâce à ma curiosité et ma créativité que mes choix m'ont amenés vers le développement.
                </p>
              </div>
            </div>
            <section className={styles.containerCards}>

              <div className={styles["flip-card"]}>
                <div className={styles["flip-card-inner"]}>
                  <div className={styles["flip-card-front"]}>
                    <h1>Persévérant</h1>
                    <img src="images/persévérance.jpg" alt="curieux" />
                  </div>
                  <div className={styles["flip-card-back"]}>
                    <p>La persévérance est essentielle pour les développeurs car elle les aide à surmonter les obstacles, à trouver des solutions alternatives et à tenir face aux problèmes complexes.
                      C'est la qualité qui permet de s'améliorer dans la difficultée.</p>
                  </div>
                </div>
              </div>

              <div className={styles["flip-card"]}>
                <div className={styles["flip-card-inner"]}>
                  <div className={styles["flip-card-front"]}>
                    <h1>Curieux</h1>
                    <img src="images/curieux.jpg" alt="curieux" />
                  </div>
                  <div className={styles["flip-card-back"]}>
                    <p>La curiosité est essentielle pour un développeur car elle stimule l'apprentissage continu, la créativité et la prise de risque.
                      Les développeurs curieux sont plus enclins à chercher des solutions innovantes et à résoudre des problèmes complexes.</p>
                  </div>
                </div>
              </div>

              <div className={styles["flip-card"]}>
                <div className={styles["flip-card-inner"]}>
                  <div className={styles["flip-card-front"]}>
                    <h1>Créatif</h1>
                    <img src="images/créativité.webp" alt="Avatar" />
                  </div>
                  <div className={styles["flip-card-back"]}>
                    <p>La créativité est importante pour un développeur, elle permet de trouver des solutions originales et d'offrir une expérience utilisateur exceptionnelle.
                      La créativité permet de se démarquer en proposant des fonctionnalités uniques et innovantes.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className={styles.containerCompétences}>
          <Separator />
          <div className={styles.titleCompétences}>
            <h1>Compétences</h1>
          </div>
          <div className={styles.compétencesFade}>
            <div className={styles.compétencesBg}>
              <div className={styles.progressCard}>
                <Html percentage={90} />
                <h2>Html</h2>
              </div>
              <div className={styles.progressCard}>
                <Css percentage={85} />
                <h2>Css</h2>
              </div>
              <div className={styles.progressCard}>
                <Js percentage={35} />
                <h2>Js</h2>
              </div>
              <div className={styles.progressCard}>
                <Php percentage={65} />
                <h2>Php</h2>
              </div>
              <div className={styles.progressCard}>
                <Sql percentage={75} />
                <h2>Sql</h2>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.containerProjets}>
          <Separator />
          <div className={styles.titleProjets}>
            <h1>Projets</h1>
          </div>
        </section>
        <section className={styles.containerContact}>
          <Separator />
          <div className={styles.titleContact}>
            <h1>Me contacter</h1>
          </div>
          <div className={styles.containerForm}>
            <div className={styles.leftForm}>
              <MessageInput />
              <NameInput />
            </div>
            <div className={styles.rightForm}>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
