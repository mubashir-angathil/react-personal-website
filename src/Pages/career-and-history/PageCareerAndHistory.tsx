import React from 'react'
import './CareerAndHistory.scss'
import { historyAndCareer } from './Helper'

const PageCareerAndHistory: React.FC = () => {
  const DATE_OF_BIRTH = new Date('06-23-2001')
  const [age, setAge] = React.useState<number>(0)

  React.useEffect(() => {
    const currentDate = new Date()
    const dateDifferenceTime = currentDate.getTime() - DATE_OF_BIRTH.getTime()

    // To calculate total milliseconds per day
    const millisecondsPerDay = 24 * 60 * 60 * 1000

    // To calculate the no. of days between two dates
    const totalDays = dateDifferenceTime / millisecondsPerDay

    const yearsOld = Math.floor(totalDays / 365)
    setAge(yearsOld)
  }, [])

  return (
    // <ParallaxLayer offset={2} speed={0.3} className='bg-dark' >
    <section className='h-100 bg-dark' id='career'>
      <div className="container-md d-flex flex-column justify-content-center align-items-center career-history-section">
        <div className="row">
          <div className='col-12 d-flex justify-content-between about-title-section'>
            <div>
              <h2 className='col-lg-9'><span>My Career</span>History & Timeline</h2>
              <p>Look what i have done so far in my life.</p>
            </div>
            <div className='text-end'>
              <h3>{age}</h3>
              <p>Years Old</p>
            </div>
          </div>
          <div className='time-line-container'>
            <ul>
              {
                historyAndCareer.map(({ title, startDate, endDate, skills, location, link, logo, descriptions }) => {
                  return (
                    <li key={title} className='timeline-item'>
                      <div>
                        <div className="item-header-section row row-cols-auto m-0 d-flex justify-content-lg-between justify-content-center" >
                          <h6 className='text-center text-start-md'>{title}</h6>
                          <h6 className='badge bg-light text-dark'>{
                            endDate !== undefined
                              ? startDate.concat(' - ', endDate)
                              : startDate
                          }</h6>
                        </div>
                        <div className='item-body-section d-flex flex-md-row flex-column-reverse'>
                          <div >
                            <div className='row row-cols-auto' >
                              <span className='col'>
                                <i className='fa-solid fa-location me-1'></i>
                                {location}
                              </span>
                              {
                                typeof link === 'object'
                                  ? <span className='col'>
                                    <i className='fa-solid fa-link me-1'></i>
                                    <a href={link.url}>{link.title}</a>
                                  </span>
                                  : null
                              }
                            </div>
                            <div className='mb-1'>
                              <ul>
                                {
                                  descriptions.map((desc, index) => {
                                    return <li key={index}> {desc}</li>
                                  })
                                }
                              </ul>
                            </div>
                            {
                              // Iterate skills
                              Array.isArray(skills)
                                ? <div className='skills-section'>
                                  {
                                    skills.map((skill) => {
                                      return <span className="text-bg-dark" key={skill}>{skill}</span>
                                    })
                                  }
                                </div>
                                : null
                            }
                          </div>
                          {
                            logo !== undefined
                              ? <div className='align-self-center item-logo-section'>
                                <img src={logo} width='100%' height="auto" />
                              </div>
                              : null
                          }
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section >
    // </ParallaxLayer>
  )
}

export default PageCareerAndHistory
