import React from 'react'
import './ToggleButton.scss'

/* Custom toggle button */
export const ToggleButton: React.FC<{ handleOffCanvasToggle: () => void }> = ({ handleOffCanvasToggle }) => {
  return <a className='custom-toggle' aria-controls='offcanvasNavbar-expand-xs' onClick={handleOffCanvasToggle}>
        <span></span>
        <span></span>
        <span></span>
    </a>
}
