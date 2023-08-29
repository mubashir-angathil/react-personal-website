import React from 'react'
import { SocialMediaSet } from '../../components/social media-icon-set/SocialMediaSet'
import './Contact.scss'

const PageContact: React.FC = () => {
  return (
        <section id="contact" className=' vh-100 d-flex align-items-center'>
            <div className="container-md">
                <div className="row">
                    <div className='col-12 about-title-section'>
                        <div>
                            <h2><span>Contact me</span>Lets get in touch</h2>
                            <p>I am available all the time for any project according to my skills.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card contact-card p-3 mb-md-3 mb-2">
                            <div className='d-flex align-items-center'>
                                <span>
                                    <i className="fa-regular fa-envelope fa-xl"></i>
                                </span>
                                <div className='ms-2'>
                                    <h5 className='text-light'>Email me</h5>
                                    <a href='mailto:mail.mubashirangathil@gmail.com' target='_top'>mail.mubashirangathil@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="card contact-card p-3 mb-3" >
                            <div className='d-flex align-items-center'>
                                <span>
                                    <i className="fa-solid fa-share-nodes fa-xl"></i>
                                </span>
                                <div className='ms-1'>
                                    <h5 className='text-light ms-2'>Message Me</h5>
                                    <SocialMediaSet />
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.729570172174!2d76.12630513429764!3d11.556704418293831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60d856224a9cd%3A0x348c54976be3ea5c!2sMeppadi%2C%20Kerala%20673577!5e0!3m2!1sen!2sin!4v1693331728620!5m2!1sen!2sin"
                        height="350"
                        className='col-md-6'
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
  )
}

export default PageContact
