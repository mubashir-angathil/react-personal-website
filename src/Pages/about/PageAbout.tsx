import React from 'react'
import './About.scss'

const PageAbout: React.FC = () => {
  const DATE_OF_BEGINNING = new Date('06-01-2022')
  const SKILLS: string[] = ['HTML', 'CSS', 'SASS', 'ReactJs', 'JavaScript', 'TypeScript', 'Redux', 'Bootstrap', 'Webpack', 'MUI', 'ExpressJs', 'NodeJs', 'Flutter', 'MongoDB', 'MYSQL']
  const [experience, setExperience] = React.useState<string>('0')

  //   Find years of experiences
  React.useEffect(() => {
    const currentDate = new Date()
    const dateDifferenceTime = currentDate.getTime() - DATE_OF_BEGINNING.getTime()

    // To calculate total milliseconds per day
    const millisecondsPerDay = 24 * 60 * 60 * 1000

    // To calculate the no. of days between two dates
    const totalDays = dateDifferenceTime / millisecondsPerDay

    const years = Math.floor(totalDays / 365)
    const months = Math.floor((totalDays % 365) / 30)
    setExperience(years.toString().concat('.', months.toString(), '+'))
  }, [])

  return (
        // <ParallaxLayer offset={1} className='bg-dark about' >
        <div className='container-md vh-100 d-flex align-items-center' id='about'>
            <div className="row">
                <div className='col-12 d-flex justify-content-between about-title-section'>
                    <div>
                        <h2 className='col-lg-10'><span>MERN Stack developer &</span> UI/UX Designer</h2>
                        <p>Specialized in software development and UI/UX designing</p>
                    </div>
                    <div className='text-end'>
                        <h3>{experience}</h3>
                        <p>Years of Experience</p>
                    </div>
                </div>
                <div className='col-lg-6 about-description-section'>
                    <p>
                        I&apos;m an enthusiastic and adept <b>MERN stack developer</b> hailing from the enchanting landscapes of Kerala.
                        My journey into the realms of technology commenced with the mystical realms of a Bachelor&apos;s degree in <b>Computer Applications</b> (BCA),
                        paving the way for my illustrious career in the realm of software.
                    </p>
                    <p> I&apos;ve had the privilege of contributing to various projects.
                        I&apos;m proud to be a part of the DJX community, where I&apos;ve been actively involved in multiple projects.
                        My familiarity with UI/UX principles ensures that the applications I work on are not only functional but also provide a delightful user experience.
                    </p>
                </div>
                <div className='col-lg-6 about-skills-section'>
                    <h4>Technical Proficiency</h4>
                    <p>I&apos;m well-versed in a range of technologies, including:</p>
                    {SKILLS.map((skill) => {
                      return <span key={skill} className='d-inline-flex'>{skill}</span>
                    })}
                </div>
            </div>
        </div>
        // </ParallaxLayer>
  )
}

export default PageAbout
