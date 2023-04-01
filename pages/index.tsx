import * as React from 'react'
import cs from 'clsx'
import TypeIt from 'typeit-react'

import * as config from '@/lib/config'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'

import styles from './index.module.css'

const waitlistUrl =
  'https://forms.gle/SrXK9CxbkZtARw8z9'

const phrases = [
'can help you debug your code and identify common errors',
'can suggest best practices for version control and collaboration using Git',
'can provide feedback on your coding style and structure',
'can explain how to use APIs and webhooks in your projects',
'can recommend frameworks and libraries to use for specific projects',
'can assist you in setting up a development environment on your computer',
'can offer guidance on how to approach complex programming problems',
'can help you optimize your code for performance and scalability',
'can explain how to use testing and debugging tools to improve your code',
'can recommend resources and tools for staying up-to-date with the latest development trends and technologies',
 'Can provide one-on-one coding lessons to help you learn new languages and concepts',
'Can suggest coding challenges and projects to help you practice what you have learned',
'Can recommend online resources and tutorials to supplement your coursework',
'Can offer guidance on how to build a portfolio of coding projects to showcase your skills to potential employers',
'Can assist you in finding internship or job opportunities in the tech industry',
'Can explain how to use open-source software and contribute to community projects',
'Can provide feedback on your coding projects and offer suggestions for improvement',
'Can help you prepare for coding interviews and technical assessments',
'Can recommend coding bootcamps or workshops to help you accelerate your learning',
'Can offer advice on how to balance your coding education with your other coursework and responsibilities',
'Can help you create a study plan for your upcoming exams',
'Can provide feedback on your college essays and papers',
'Can suggest effective note-taking strategies for your classes',
'Can explain how to use academic databases and sources for your research papers',
'Can advise you on how to balance your coursework and extracurricular activities',
'Can help you improve your public speaking and presentation skills',
'Can offer tips on how to manage stress and maintain mental wellness during the school year',
'Can assist you in preparing for internships and job interviews',
'Can recommend resources and tools for improving your time management and productivity as a student',
'Can provide guidance on how to network and build professional relationships in your field',

  
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
                  <b>TutorAI</b>{' '}
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
                href="https://tsitutor.vercel.app/"
                target='_blank'
                rel='noopener noreferrer'
              >
                Get TutorAI
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
