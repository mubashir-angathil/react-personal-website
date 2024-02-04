interface HistoryAndCareer {
  title: string
  startDate: string
  endDate?: string
  location: string
  descriptions: string[]
  link?: {
    url: string
    title: string
  }
  skills?: string[]
  logo?: string
}

export const historyAndCareer: HistoryAndCareer[] = [
  {
    title: 'Primary Education',
    startDate: 'Mar 2017',
    location: 'Wayanad,Kerala',
    descriptions: [
      'Attained primary education from CMS Higher Secondary school'
    ]
  },
  {
    title: 'Secondary Education',
    startDate: 'Mar 2019',
    location: 'Meppadi, Wayanad',
    descriptions: [
      'Attained secondary education at GHSS Meppadi with a focus on Computer Applications.'
    ],
    skills: ['C++', 'MySQL', 'HTML', 'CSS']
  },
  {
    title: 'Under Graduation',
    startDate: 'Mar 2022',
    location: 'WMO Arts & Science college,Muttil, Wayanad',
    descriptions: [
      "Holds a bachelor's degree in computer application from Calicut University"
    ],
    skills: [
      'C',
      'Data Structure',
      'Java',
      'PHP',
      'Python',
      'HTML & CSS',
      'Android',
      'Shell'
    ]
  },
  {
    title: 'MERN stack developer @ WMO Arts and science college',
    startDate: 'Jun 2022',
    endDate: 'Aug 2023',
    location: 'Muttil, Wayanad',
    descriptions: [
      'my role involved designing and developing dynamic web applications. I actively participated in client-side requirement gathering, demonstrating strong leadership by leading both UI/UX and development teams. Efficiently managing the codebase using GIT, I ensured code quality and seamless collaboration within the team.'
    ],
    logo: 'https://wmocollege.ac.in/frontend-assets/images/logo_wmo.png',
    link: {
      title: 'wmocollege.ac.in',
      url: 'https://wmocollege.ac.in/'
    },
    skills: [
      'ReactJs',
      'Typescript',
      'Javascript',
      'Redux',
      'Eslint',
      'HTML',
      'CSS',
      'Git',
      'RestAPIs',
      'Axios',
      'Figma',
      'UI/UX',
      'Project Management'
    ]
  },
  {
    title: 'Full Stack Developer @ DJX',
    startDate: 'Aug 2022',
    endDate: 'Present',
    location: 'Kalpatta, Wayanad',
    descriptions: [
      'I lead UI design using Figma, spearhead web development, and craft mobile apps with Flutter.'
    ],
    link: {
      title: 'djx.io',
      url: 'https://dev-jsx.github.io/'
    },
    skills: [
      'ReactJs',
      'NodeJs',
      'Express',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'Redux',
      'Eslint',
      'RestAPIs',
      'TailWindCSS',
      'Flutter',
      'Dart',
      'Figma',
      'UI/UX'
    ]
  }
]
