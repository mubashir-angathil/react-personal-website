import React from 'react'
import { PROJECTS } from './Helper'
import './Works.scss'

const PageWorks: React.FC = () => {
  return (
        <section className='pb-5 pt-5' id='works'>
            <div className="container-lg">
                <div className="row">
                    <div className='col-12 pt-5 d-flex justify-content-between about-title-section'>
                        <div>
                            <h2 className='col-lg-10'><span>PORTFOLIO</span>MY RECENT WORK</h2>
                            <p>I believe in art and that is my passion throughout my life.
                                Here you will find some of the personal and clients projects </p>
                        </div>
                        <div className='text-end'>
                            <h3>{PROJECTS.length}</h3>
                            <p>Portfolio items</p>
                        </div>
                    </div>
                    <div className="projects-container">
                        <ul className='p-0 m-0'>
                            {
                                PROJECTS.map((details) => {
                                  return <li key={details.title} className='project-item'>
                                        <div className='p-0 thumbnail'>
                                            <img src={details.thumbnail} />
                                        </div>
                                        <div className='content-section'>
                                            <div className='row rows-cols-auto title-section mt-2' >
                                                <h3 className='col'>{details.title}</h3>
                                                <a className='col text-end' href={details.link}>Live</a>
                                            </div>
                                            <div className='description-section'>
                                                <p className='text-justify'>{details.description}</p>
                                            </div>
                                            <div className="footer-section">
                                                {
                                                    details.toolsUsed.map((tools) => {
                                                      return <span key={tools} className='bg-dark'>{tools}</span>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default PageWorks
