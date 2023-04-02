import { githubRepoUrl, isSafari, isServer } from './config'

const detail = `This webapp is part of Tutor AI: https://tutorai-landing.vercel.app/`
const banner = `

████████╗██╗░░░██╗████████╗░█████╗░██████╗░  ░█████╗░██╗
╚══██╔══╝██║░░░██║╚══██╔══╝██╔══██╗██╔══██╗  ██╔══██╗██║
░░░██║░░░██║░░░██║░░░██║░░░██║░░██║██████╔╝  ███████║██║
░░░██║░░░██║░░░██║░░░██║░░░██║░░██║██╔══██╗  ██╔══██║██║
░░░██║░░░╚██████╔╝░░░██║░░░╚█████╔╝██║░░██║  ██║░░██║██║
░░░╚═╝░░░░╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝  ╚═╝░░╚═╝╚═╝

   ${detail}
`

export async function bootstrap() {
  if (isServer) return

  if (isSafari) {
    console.log(detail)
  } else {
    console.log(banner)
  }
}
