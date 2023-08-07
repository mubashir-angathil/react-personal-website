/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import './App.css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import profile from '../src/assets/profile-pic.png'
interface PageProps {
  offset: number
  gradient?: string
  onClick: () => void
}
const Page = ({ offset, onClick }: PageProps) => (
  <React.Fragment>
    {/* <ParallaxLayer offset={offset} speed={0.3}  onClick={onClick}>
      <div className={'slopeBegin'} />
    </ParallaxLayer> */}
    {
      offset === 0
        ?
        <ParallaxLayer className='banner' offset={offset} factor={0.8} speed={0.2}>
          <div className='title-wrapper'>
            <h1 >
              <span>Hello!</span><br />
              I'm
              <span>Mubashir</span><br />
            </h1>
            <h4> MERN Stack Developer </h4>
          </div>
          <div>
            <img src={profile} alt='DP' />
          </div>
        </ParallaxLayer>
        : null
    }
    {
      offset === 1
        ?
        <ParallaxLayer offset={offset} speed={1}>
          <div className='about-section'>
            <div>
              <img src={profile} alt='DP' />
            </div>
            <div>
              <span className='name'>About Me</span>
              <div>
                <p>name     :<span>"Mubashir Ali Angathil"</span><span>,</span></p>
                <p>dob      :<span>"June 23, 2001"</span><span>,</span></p>
                <p>domain   :<span>"MERN Stack"</span><span>,</span></p>
                <p>Location :<span>"MERN Stack"</span><span>,</span></p>
                <p>email    :<span>"mail.mubashirangathil@gmail.com"</span><span></span></p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        : null
    }
  </React.Fragment>
)

export default function App() {
  const parallax = useRef<IParallax>(null)
  const [offset, setOffset] = React.useState(parallax.current?.offset)
  const scroll = (to: number) => {
    if (parallax.current) {
      setOffset(to)
      parallax.current.scrollTo(to)
    }
  }
  React.useEffect(() => {
    setOffset(0)
  }, [])
  return (
    <Parallax className='container' ref={parallax} pages={2} horizontal={false}>
      <ParallaxLayer sticky={{ start: 0.9 }}>
        <div className='navbar'>
          <ul>
            {
              ['Home', 'About', 'Resume'].map((item, index) =>
                <li
                  key={item}
                  className={index === offset ? 'active-item' : ''}
                >
                  <a
                    className={index === offset ? 'active-item' : ''}
                    onClick={() => index !== 2 ? scroll(index) : null}
                    // download={item === 'Resume' ? tr/ : false}
                    target='_blank'
                    href={item === 'Resume' ? 'https://docs.google.com/document/d/1S0BlG2AB-5yKlCjWbLQab8AmVpTu8XMmyKgN8nVEcMQ/edit?usp=sharing' : undefined} rel="noreferrer"
                  >{item}</a></li>
              )
            }
          </ul>
        </div>

      </ParallaxLayer>
      {/* <ParallaxLayer speed={1} >
        <div className='slopeEnd dark' />
      </ParallaxLayer> */}
      <Page offset={0} onClick={() => scroll(0)} />
      <Page offset={1} onClick={() => scroll(1)} />
      {/* <Page offset={2} onClick={() => scroll(2)} /> */}
    </Parallax >
  )
}
