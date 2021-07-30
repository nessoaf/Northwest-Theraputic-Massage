import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Northwest Therapeutic Massage</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className='mainimg'>
          <img src="massage.jpg" alt="" />
          <h1 className='title'>Northwest Therapeutic Massage</h1>
          <h2 className='ofname'>Michael Kaplan LMT</h2>
        </div>
        {/* <h1>Welcome to Northwest Therapeutic Massage</h1> */}
        <p className='pgen'>We strive to work with you and your medical provider to insure you get the best custom tailored massages. Whether it is for relaxation and stress reduction or therapy treatments from an accident or surgery, we are here to help you.</p>


        <ul>
          <li className='litop'>Our services:</li>

          <li>Ultimate Relaxation</li>

          <li>Auto Accident recovery</li>

          <li>Post surgery treatments</li>

          <li>Stress and/or pain reduction</li>

          <li>Workplace injury recovery</li>

          <li>And more!</li>
        </ul>


        <h1>Now offering on-site massage services at your home or location</h1>


        <p className='pgen2'>On-site massages within seattle, bellevue, or greater east side area.</p>
        <footer>

          <ul className='footer ul' className='serv'>
            <li>Service location:</li>

            <li className='footer'>12951 Bel-Red Road, Suite 100</li>

            <li className='footer'>Bellevue Washington 98005,</li>

            <li className='footer'>BY APPOINTMENT ONLY</li>

            <li className='footer'>No walk in accepted</li>

          </ul>
        </footer>
      </main>
    </div>
  )
}
