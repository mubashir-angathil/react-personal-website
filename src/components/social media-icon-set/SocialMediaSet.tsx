import React from 'react'
import './SocialMediaSet.scss'

export const SocialMediaSet: React.FC = () => {
  // Define links
  const links = {
    gitHub: 'https://github.com/mubashir-angathil',
    linkedIn: 'https://www.linkedin.com/in/mubashir-angathil/',
    whatsapp: "https://api.whatsapp.com/send?phone=%2B917306292239&text=I'm%20looking%20to%20expand%20my%20network%20and%20exchange%20ideas%20with%20like-minded%20individuals.%20Please%20feel%20free%20to%20connect%20whenever%20it's%20convenient%20for%20you.%20I'm%20excited%20to%20learn%20from%20each%20other%20and%20engage%20in%20meaningful%20conversations%21"
  }

  return (
    <div className='social-media-icons'>
      <a href={links.gitHub} target='_blank' rel="noreferrer">
        <i data-toggle="tooltip" title='GitHub' className="fa-brands fa-github"></i>
      </a>
      <a href={links.linkedIn} target='_blank' rel="noreferrer">
        <i data-toggle="tooltip" title='LinkedIn' className="fa-brands fa-linkedin-in"></i>
      </a>
      <a target='_blank' href={links.whatsapp} rel="noreferrer">
        <i data-toggle="tooltip" title='Instagram' className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  )
}
