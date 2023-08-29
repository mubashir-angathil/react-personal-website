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
    descriptions: ['Attained primary education from CMS Higher Secondary school']
  },
  {
    title: 'Secondary Education',
    startDate: 'Mar 2019',
    location: 'Meppadi, Wayanad',
    descriptions: ['Attained secondary education at GHSS Meppadi with a focus on Computer Applications.'],
    skills: ['C++', 'MySQL', 'HTML', 'CSS']
  },
  {
    title: 'Under Graduation',
    startDate: 'Mar 2022',
    location: 'WMO Arts & Science college,Muttil, Wayanad',
    descriptions: ["Holds a bachelor's degree in computer application from Calicut University"],
    skills: ['C', 'Data Structure', 'Java', 'PHP', 'Python', 'HTML & CSS', 'Android', 'Shell']
  },
  {
    title: 'Frontend developer @ WMO Arts and science college',
    startDate: 'Jun 2022',
    endDate: 'Aug 2023',
    location: 'Muttil, Wayanad',
    descriptions: ['Proficiently created UI designs utilizing Figma, and successfully translated them into fully functional web applications using a combination of React, TypeScript, JavaScript, MUI, and Bootstrap.'],
    logo: 'https://wmocollege.ac.in/frontend-assets/images/logo_wmo.png',
    link: {
      title: 'wmocollege.ac.in',
      url: 'https://wmocollege.ac.in/'
    },
    skills: ['ReactJs', 'TypeScript', 'JavaScript', 'Redux', 'Eslint', 'HTML', 'CSS', 'Git', 'RestAPIs', 'Axios', 'Figma', 'UI/UX', 'Project Management']
  },
  {
    title: 'Software developer @ DJX',
    startDate: 'Aug 2022',
    endDate: 'Present',
    location: 'Kalpatta, Wayanad',
    descriptions: ['Led UI design endeavors utilizing Figma and spearheaded web application development alongside crafting mobile applications through Flutter and Dart.',
      'Contributed to comprehensive UI/UX designs via Figma'],
    link: {
      title: 'djx.io',
      url: 'https://dev-jsx.github.io/'
    },
    skills: ['ReactJs', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Eslint', 'RestAPIs', 'TailWindCSS', 'Flutter', 'Dart', 'TypeScript', 'Figma', 'UI/UX']
  }

]
