import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Question Responses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
        <h1>
          Marcus Campbell Take Home Assignment
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div>
            <h2>Question 3a</h2>
            <p> My top 5 faviorate task included:
                - Help train and onboard new support teammates 
                - Manage a support team
                - Run ticket review sessions to make sure tone is consistent
                - Work with engineering teams during incidents and provide updates to internal and external stakeholders
                - Find and recruit teammates for the support team
                
                 My top 5 least faviorate task included:
                - Help resolve billing issues for customers
                - Dig through logs to troubleshoot a customer's broken project
                - Respond to 50+ support requests via email every day </p>
          </div>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Question 3b</h2>
            <p>I would really like to take advatage of this opportunity by refining my react and javascript skills.
              I plan on doing this by taking advange of the learning fund to enroll in Udemy cources that are centered
                around these two lanages. Something that I am passionate about is supporting my teammates when it comes to 
                  understanding the techincal networking aspects of the web such as how to use tools such a cURL, mtr, and even dig to 
                    look deeper into a customer's issue and provide the appropiate guidence to get them the expected behavior they are looking for.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Question 3e</h2>
            <p>One way to redirect you can add the following within the "next.config.js" file if you are using Next.js or within the "vercel.json" 
            (https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects). If you are using something else
             By following this guide, you will see a "308" response code on your request. You can use this command to test this redirect behavior, "curl -svo dev/null https://vercel-take-home-mcampbell34.vercel.app/search"
             </p>
         

           <h2>Question 3f</h2>
            <p>
              To use your GoDaddy domain with Vercel, you can follow these steps: https://vercel.com/guides/transferring-domains-to-vercel. 
              Please let me know if you have any specific questions regarding this process and I'll be more than happy to further assist. 
            </p>
          
           <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          > 
           <h2>Question 3g</h2> 
            <p>
              One common issue that I can forsee customers at Vercel running into would be around DNS configuration. At times, DNS will cache
              results and even though a customer made changes that are correct, they may still need to wait for the TTL of their DNC configrations to 
              flush before the new changes are set. I would focus on helping our customer understand how DNS works and the tolls avalible they can use to 
              debug these issues on their end such as "dig". 
            </p>
          </a>
           <h2>Question 3h</h2>
            <p>
              This process overall was great, very straight forward and to the point and I had fun brushing up on my Git and Github skills. I now I will 
              need to put aside sometime to get back into using the git command line as I haven't used it since attending Lambda but, I was able to find
              alernatives to get the task done. 
            </p>
          </a>
        </div>
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
