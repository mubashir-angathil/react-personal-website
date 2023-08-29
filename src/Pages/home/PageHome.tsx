import React from 'react'
// import { ParallaxLayer } from '@react-spring/parallax'
import './Home.scss'

const PageHome: React.FC = () => {
  return (
        // <ParallaxLayer offset={0} speed={1} >
        <div className="home container-fluid vh-100" id='home'>
            <div className="row align-items-center h-100">
                {/* <div className="col-lg-6 order-lg-0 order-md-2 order-2 d-flex justify-content-center">

                    <img src='https://megaone.acrothemes.com/personal-hotspot/images/slider-img.png' alt='DP' className='ratio ratio-1x1' />
                </div> */}
                <div className='col-12 mt-lg-0 pt-lg-0 mt-5 pt-5 justify-content-center'>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='d-flex flex-column text-center align-items-center align-items-lg-start'>
                            <span>Hello, I am</span>
                            <span className='d-block'>Mubashir Angathil.</span>
                        </h1>
                        <p>MERN Stack developer</p>
                    </div>
                </div>
                <a className='swipe-button' href='#about'>
                    <span></span>
                </a>
            </div>
        </div>
        // </ParallaxLayer>
  )
}

export default PageHome
