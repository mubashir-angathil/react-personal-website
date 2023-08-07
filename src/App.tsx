/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import './App.css';
import profile from '../src/assets/profile-pic.png'
interface PageProps {
  offset: number
  gradient?: string
  onClick: () => void
}

const Page = ({ offset, onClick }: PageProps) => (
  <React.Fragment>
    {/* <ParallaxLayer offset={offset} speed={0.3} onClick={onClick}>
      <div className={'slopeBegin'} />
    </ParallaxLayer> */}
    {
      offset === 0
        ?
        <>
          <ParallaxLayer className='banner' offset={offset} speed={1} factor={0.5}>
            <div className='title-wrapper'>
              <h1 >
                <span>Hello!</span><br />
                I'm
                <span>Mubashir</span><br />
              </h1>
              <h4> MERN Stack Developer </h4>
            </div>
            <div>
              <img src={profile} />
            </div>
          </ParallaxLayer>
        </>

        : null
    }
    {
      offset === 1
        ?
        <>
          <ParallaxLayer className='about-section' offset={offset} speed={0.3}>
            <div>
              <span className='name'>About Me</span>
              <p>
                I am flexible, reliable and possess excellent time keeping skills.
                I am an enthusiastic, self-motivated, reliable, responsible and hard working person.
                I am a mature team worker and adaptable to all challenging situations.
                I am able to work well both in a team environment as well as using own initiative.
              </p>
            </div>
          </ParallaxLayer>
        </>

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
    <Parallax className='container' ref={parallax} pages={3} horizontal={false}>
      <ParallaxLayer sticky={{start:0.9,end:3}}>
        <div className='navbar'>
          <ul>
            {
              ['Home', 'About', 'Contact', 'Resume'].map((item, index) =>
                <li key={item}>
                  <a
                    onClick={() => index!==3 ? scroll(index): null} 
                    className={index === offset ? 'active-border' : ''}
                    download={item === 'Resume' ? true : false}
                    href={item === 'Resume' ? '#home' : undefined}
                  >{item}</a></li>
              )
            }
          </ul>
        </div>

      </ParallaxLayer>
      {/* <ParallaxLayer offset={offset} speed={1} >
        <div className='slopeEnd tomato' />
      </ParallaxLayer> */}
      <Page offset={0} onClick={() => scroll(1)} />
      <Page offset={1} onClick={() => scroll(2)} />
      <Page offset={2} onClick={() => scroll(0)} />
    </Parallax >
  )
}
