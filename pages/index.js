import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Fragment } from 'react';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Question Response</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
        <h1>
          Marcus Campbell Take Home Assignment
        </h1>
    </div>

        <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Question 3a</h2>
            <ul> My top 5 faviorate task included:
                <li>Help train and onboard new support teammates</li>  
                <li> Manage a support team </li> 
                <li> Run ticket review sessions to make sure tone is consistent</li>
                <li> Work with engineering teams during incidents and provide updates to internal and external stakeholders</li>
                <li> Find and recruit teammates for the support team</li>
                
                 My top 5 least faviorate task included:
                <li>Help resolve billing issues for customers</li>
                <li>Dig through logs to troubleshoot a customers broken project</li>
                <li>Respond to 50+ support requests via email every day </li>
          
          </ul>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Question 3b</h2>
            <p>I would really like to take advatage of this opportunity by refining my react and javascript skills.
              I plan on doing this by taking advange of the learning fund to enroll in Udemy cources that are centered
                around these two lanages. Something that I am passionate about is supporting my teammates when it comes to 
                  understanding the techincal networking aspects of the web such as how to use tools such a cURL, mtr, and even dig to 
                    look deeper into a customers issue and provide the appropiate guidence to get them the expected behavior they are looking for.</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Question 3e</h2>
            <p>One way to redirect you can add the following within the next.config.js file if you are using Next.js or within the vercel.json 
            (https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects). If you are using something else
             By following this guide, you will see a 308 response code on your request. You can use this command to test this redirect behavior, curl -svo dev/null https://vercel-take-home-mcampbell34.vercel.app/search
             </p>


         <a href="https://nextjs.org/learn" className={styles.card}>

           <h2>Question 3f</h2>
            <p>
              To use your GoDaddy domain with Vercel, you can follow these steps: https://vercel.com/guides/transferring-domains-to-vercel. 
              Please let me know if you have any specific questions regarding this process and I will be more than happy to further assist. 
            </p>
        </a>

           <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          > 
           <h2>Question 3g</h2> 
            <p>
              One common issue that I can forsee customers at Vercel running into would be around DNS configuration. At times, DNS will cache
              results and even though a customer made changes that are correct, they may still need to wait for the TTL of their DNC configrations to 
              flush before the new changes are set. I would focus on helping our customer understand how DNS works and the tolls avalible they can use to 
              debug these issues on their end such as dig. 
            </p> 
            </a> 
           <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
           <h2>Question 3h</h2>
            <p>
              This process overall was great, very straight forward and to the point and I had fun brushing up on my Git and Github skills. I now I will 
              need to put aside sometime to get back into using the git command line as I have not used it since attending Lambda but, I was able to find
              alernatives to get the task done. 
            </p>
          </a>
        </a>
      </a>  
    </div>  

  )
}