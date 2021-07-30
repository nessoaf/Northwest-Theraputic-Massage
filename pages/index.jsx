import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Northwest Therapeutic Massage</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainimg}>
          <img className={styles.img} src="massage.jpg" alt="" />
          <h1 className={styles.title}>Northwest Therapeutic Massage</h1>
          <h2 className={styles.ofname}>Michael Kaplan LMT</h2>
        </div>
        {/* <h1>Welcome to Northwest Therapeutic Massage</h1> */}
        <p className={styles.pgen}>We strive to work with you and your medical provider to insure you get the best custom tailored massages. Whether it is for relaxation and stress reduction or therapy treatments from an accident or surgery, we are here to help you.</p>


        <ul className={styles.ul}>
          <li className={styles.litop}>Our services:</li>

          <li className={styles.li}>Ultimate Relaxation</li>

          <li className={styles.li}>Auto Accident recovery</li>

          <li className={styles.li}>Post surgery treatments</li>

          <li className={styles.li}>Stress and/or pain reduction</li>

          <li className={styles.li}>Workplace injury recovery</li>

          <li className={styles.li}>And more!</li>
        </ul>


        <h1>Now offering on-site massage services at your home or location</h1>


        <p className={styles.pgen2}>On-site massages within seattle, bellevue, or greater east side area.</p>
        <footer>

          <ul className={styles.footer.ul} className={styles.serv}>
            <li>Service location:</li>

            <li className={styles.footer}>12951 Bel-Red Road, Suite 100</li>

            <li className={styles.footer}>Bellevue Washington 98005,</li>

            <li className={styles.footer}>BY APPOINTMENT ONLY</li>

            <li className={styles.footer}>No walk in accepted</li>

          </ul>
        </footer>
      </main>
    </div>
  )
}
