interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'chatapp with rust',
    description: `This is chatapp using Rust`,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/chatapp',
  },
  {
    title: 'Talktive',
    description: `this is desktop app made using tauri for messaging and video calls.`,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/Talktive',
  },
  {
    title: 'async-play',
    description: `this is a repository for my async echo client and server model with and without tokio.`,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/async-play',
  },
  {
    title: 'Hackathon',
    description: `this is a hackathon project `,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/TechTitans',
  },
  {
    title: 'Rotating Cube',
    description: `this is a rotating cube using c++ made using OpenGL`,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/Rotating-Cube',
  },
]

export default projectsData
