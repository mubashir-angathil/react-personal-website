import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SocialMediaSet } from '../social media-icon-set/SocialMediaSet'
import { ToggleButton } from '../toggle-button/ToggleButton'
import './Navbar.scss'
import IMAGES from '../../utilities/types/constants/assets'

export const NavbarComponent: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [showOffCanvas, setShowOffCanvas] = React.useState(false)

  // Handle Canvas toggle
  const handleOffCanvasToggle = (): void => {
    setShowOffCanvas(!showOffCanvas)
  }

  return (
        <Navbar expand='xs' className="p-4 w-100" bg="transparent" data-bs-theme="dark">
            <Container fluid >
                <ToggleButton handleOffCanvasToggle={handleOffCanvasToggle} />
                <span className='d-flex' style={{ width: '2.5rem', height: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={IMAGES.logo} alt='Logo' width='36px' height='36px' />
                </span>
                <Navbar.Offcanvas
                    show={showOffCanvas}
                    onHide={handleOffCanvasToggle}
                    id='offcanvasNavbar-expand-xs'
                    aria-labelledby='offcanvasNavbarLabel-expand-xs'
                    placement="end"
                >
                    <Offcanvas.Header >
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand-xs'>
                            <img src={IMAGES.logo} alt='Logo' width='30px' height='30px' />
                        </Offcanvas.Title>
                        <i className="fa-solid fa-xmark fa-xl custom-close" onClick={handleOffCanvasToggle}></i>

                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="align-items-center flex-grow-1 pe-3 h-100" style={{ justifyContent: 'space-between' }}>
                            <div className='navbar-items' onClick={handleOffCanvasToggle}>
                                <Nav.Link href="#home" >Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#career">Timeline</Nav.Link>
                                <Nav.Link href="#works">Works</Nav.Link>
                                {/* <Nav.Link href="#services">Services</Nav.Link> */}
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </div>
                            <a
                                className="btn btn-outline-warning custom-rounded"
                                href='https://docs.google.com/document/d/1S0BlG2AB-5yKlCjWbLQab8AmVpTu8XMmyKgN8nVEcMQ/export?format=pdf'
                                target='_blank' rel="noreferrer">Download Resume</a>
                            <div className='offcanvas-footer'>
                                <SocialMediaSet />
                                <p> &copy; {currentYear} All rights reserved.</p>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
  )
}
