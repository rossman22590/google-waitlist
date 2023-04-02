export const environment = process.env.NODE_ENV || 'development'
export const isDev = environment === 'development'
export const isServer = typeof window === 'undefined'
export const isSafari =
  !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const title = 'TutorAI Waitlist'
export const description =
  "Join the thousands of students using Tutor AI now!!"
export const domain = 'google-waitlist.vercel.app'

export const author = 'Tech in Schoiols Initiative'
export const twitter = 'tsi_org'
export const twitterUrl = `https://twitter.com/${twitter}`
export const discordUrl = `https://mytsi.org`
export const githubRepoUrl =
  '#'
export const githubSponsorsUrl =
  '#'
export const copyright = `Copyright 2023 ${author}`
export const madeWithLove = 'Made with ❤️ in Brooklyn, NY'

export const port = process.env.PORT || '3000'
export const prodUrl = `https://${domain}`
export const url = isDev ? `http://localhost:${port}` : prodUrl

export const apiBaseUrl =
  isDev || !process.env.VERCEL_URL ? url : `https://${process.env.VERCEL_URL}`

// these must all be absolute urls
export const socialImageUrl = `${url}/social.jpg`
