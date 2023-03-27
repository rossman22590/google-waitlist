import * as React from 'react'
import cs from 'clsx'
import TypeIt from 'typeit-react'

import * as config from '@/lib/config'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'

import styles from './index.module.css'

const waitlistUrl =
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'

const phrases = [
 // 'can help you debug your code and identify common errors',
// 'can suggest best practices for version control and collaboration using Git',
// 'can provide feedback on your coding style and structure',
// 'can explain how to use APIs and webhooks in your projects',
// 'can recommend frameworks and libraries to use for specific projects',
// 'can assist you in setting up a development environment on your computer',
// 'can offer guidance on how to approach complex programming problems',
// 'can help you optimize your code for performance and scalability',
// 'can explain how to use testing and debugging tools to improve your code',
// 'can recommend resources and tools for staying up-to-date with the latest development trends and technologies'.
  'can help you draft the perfect resignation letter from Google',
  'can help you create a website mocking Google\'s waitlist "launches"',
  'can help you avoid Google ads by suggesting the best tinfoil hats to wear',
  "can suggest non-Google products that won't sell your personal data",
  "won't become sentient and try to take over the world... we promise...",
  'can do a fraction of the cool stuff that ChatGPT could do 3 months ago...',
  'can write a blog post about how "don\'t be evil" got lost along the way',
  'can help you check your email for other Google waitlists...',
  'can suggest open source alternatives to expensive Google products',
  "can help you reduce anxiety by knowing that you'll never get off the waitlist"
]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

shuffle(phrases)

const longestPhrase = phrases.reduce(
  (acc, phrase) => (phrase.length > acc.length ? phrase : acc),
  ''
)

export default function HomePage() {
  return (
    <Layout>
      <PageHead />

      <div className={styles.homePage}>
        <div className={styles.body}>
          <div className={cs(styles.section)}>
            <div className={cs(styles.hero)}>
              <div className={styles.titleWrapper}>
                <h1 className={cs(styles.title, styles.sizingHack)}>
                  <b>TutorAI</b> {longestPhrase}
                </h1>

                <h1 className={styles.title}>
                  <b>Bard</b>{' '}
                  <TypeIt
                    options={{
                      loop: true,
                      cursor: false,
                      strings: phrases,
                      breakLines: false,
                      speed: 25,
                      deleteSpeed: 0,
                      nextStringDelay: [5000, 0] as any
                    }}
                    className={styles.subtitle}
                  />
                </h1>
              </div>

              <p className={styles.desc}>{config.description}</p>

              <HeroButton
                href={waitlistUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Join the Waitlist
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
