import React from 'react'
import './About.scss'

const PageAbout: React.FC = () => {
//   const DATE_OF_BEGINNING = new Date('06-01-2022')
  const SKILLS: string[] = [
    'HTML',
    'CSS',
    'SASS',
    'ReactJs',
    'JavaScript',
    'TypeScript',
    'Redux',
    'Bootstrap',
    'Webpack',
    'MUI',
    'ExpressJs',
    'NodeJs',
    'Flutter',
    'MongoDB',
    'MYSQL'
  ]
  const [experience] = React.useState<string>('1.3')

  //   Find years of experiences
  //   React.useEffect(() => {
  //     const currentDate = new Date()
  //     const dateDifferenceTime =
  //       currentDate.getTime() - DATE_OF_BEGINNING.getTime()

  //     // To calculate total milliseconds per day
  //     const millisecondsPerDay = 24 * 60 * 60 * 1000

  //     // To calculate the no. of days between two dates
  //     const totalDays = dateDifferenceTime / millisecondsPerDay

  //     const years = Math.floor(totalDays / 365)
  //     const months = Math.floor((totalDays % 365) / 30)
  //     setExperience(years.toString().concat('.', months.toString(), '+'))
  //   }, [])

  return (
    // <ParallaxLayer offset={1} className='bg-dark about' >
    <div className="container-md d-flex align-items-center" id="about">
      <div className="row">
        <div className="col-12 d-flex justify-content-between about-title-section">
          <div>
            <h2 className="col-lg-10">
              <span>Full Stack developer &</span> UI/UX Designer
            </h2>
            <p>Specialized in software development and UI/UX designing</p>
          </div>
          <div className="text-end">
            <h3>{experience}</h3>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="col-lg-6 about-description-section">
          <p>
            I am an enthusiastic and adept Full Stack developer (MERN), weaving
            my tech tale from this small corner of the world. My journey into
            the realms of technology kicked off with the mystical embrace of a
            Bachelor&apos;s degree in Computer Application (BCA). Hailing from
            a small village, my dreams are limitless, fueled by a passion for
            coding and the wonders of software development.
          </p>
          <p>
            Proudly contributing to various projects, I&apos;ve found my home in
            the vibrant DJX community. Actively engaged in multiple projects, I
            bring the magic of small-town charm and big dreams to the tech
            world. I navigate through the vast landscapes of code. My
            familiarity with UI/UX principles ensures that the applications I
            craft are not only functional but also provide a delightful user
            experience.
          </p>
        </div>
        <div className="col-lg-6 about-skills-section">
          <h4>Technical Proficiency</h4>
          <p>I&apos;m well-versed in a range of technologies, including:</p>
          {SKILLS.map((skill) => {
            return (
              <span key={skill} className="d-inline-flex">
                {skill}
              </span>
            )
          })}
        </div>
      </div>
    </div>
    // </ParallaxLayer>
  )
}

export default PageAbout
