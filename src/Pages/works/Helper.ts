import IMAGES from '../../utilities/types/constants/assets'

interface Project {
  title: string
  link: string
  thumbnail: string
  description: string
  toolsUsed: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'FMS.',
    link: 'https://office.wmocollege.in/',
    thumbnail: IMAGES.projects.fms,
    description: `
    FMS is an academic software specially developed for WMO Arts and Science College, Wayanad.
          Permission-based architecture provides scalability and robustness. Seamlessly integrated with existing software.
          A key feature is optimized performance, maintainable code base, and well-written documentation.

          The academic admission process has been automated,
           egrantz (special grants provided by the government) has been digitized and accounts and fee management has been made paperless.
            Scholarship module helps to manage data banks and details of related scholarship students
    `,
    toolsUsed: ['ReactJs', 'TypeScript', 'Javascript', 'jQuery', 'AJAX', 'Redux', 'Figma', 'Webpack', 'babel', 'CSS', 'NodeJs', 'MariaDB', 'Prisma ORM', 'Git', 'GitHub', 'ZOD', 'Eslint', 'husky']
  },
  {
    title: 'Fixtures.',
    link: 'https://github.com/mubashir-angathil/shopping_cart',
    thumbnail: IMAGES.projects.fixtures,
    description: `Fixture is a robust and scalable web application developed by me.
    Server-side logic, routing, and database management are seamlessly handled for a seamless user experience.
     Aimed at the furniture industry, anyone can use it to present their business online.
    Users can discover the evolving trends of the exterior and interior world.
   Featured products and other sales products can be well displayed.  
    `,
    toolsUsed: ['NodeJs, Javascript', 'CSS', 'ExpressJs', 'MongoDB', 'Git', 'GitHub']
  },
  {
    title: 'WMO Alumni.',
    link: 'https://alumni.wmocollege.ac.in/',
    thumbnail: IMAGES.projects.alumniWMOC,
    description: `WMO Alumni is a scalable web application designed for Alumni Association of WMO Arts and Science College, Wayanad to manage subscription fees.
    They can dynamically modify the content of the website and alumni can become members by filling basic details and initiate subscription through this website.`,
    toolsUsed: ['ReactJs, Javascript', 'CSS', 'php codeigniter', 'Figma', 'MYSQL', 'Git', 'GitHub']
  },
  {
    title: 'Portfolio.',
    link: 'https://portfolio-mubashirangathli.vercel.app/',
    thumbnail: IMAGES.projects.portfolio,
    description: `
    The portfolio website is currently built as a static site utilizing React with TypeScript.
    While its current state is static, it has been strategically designed with scalability and robustness in mind.
    There are plans to evolve it into a dynamic website that can adapt to changing content requirements in the future.
    `,
    toolsUsed: ['ReactJs', 'TypeScript', 'Sass', 'CSS', 'Webpack', 'Babel']
  },
  {
    title: 'XandO.',
    link: 'https://xando-web.vercel.app/',
    thumbnail: IMAGES.projects.xando,
    description: `
    XandO is a Tic Tac Toe multiplayer game (two players to mark 'X' and 'O' on a 3x3 grid.
    The goal is for their three marks to be in a row, column or diagonal, this is an open source project.
    I got a great opportunity to contribute to this rich project.
    The rich user interface gives an immense look
    `,
    toolsUsed: ['ReactJs', 'Javascript', 'TailwindCSS', 'CSS', 'websocket', 'Figma']
  }
]
