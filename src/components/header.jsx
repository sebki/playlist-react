import React from "react";
import { Navbar } from "./navbar.jsx";
import { Link } from 'react-router-dom';

function Logo() {
    return(
        <Link to={'/'}>
            <div className='justify-center w-20'>
                <svg width="80" height="80" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 400C0 179.086 179.086 0 400 0V0C620.914 0 800 179.086 800 400V400C800 620.914 620.914 800 400 800V800C179.086 800 0 620.914 0 400V400Z" fill="#FA26A0"/>
                    <path d="M132 560.639V294.684L365.484 167L595 294.684V560.639L357.547 687L132 560.639Z" fill="#01DEE6"/>
                    <path d="M132 560.639V294.684L365.484 167L595 294.684V560.639L357.547 687L132 560.639Z" stroke="#01DEE6"/>
                    <g filter="url(#filter0_d_24_6)">
                        <path d="M169 535.639V269.684L402.484 142L632 269.684V535.639L394.547 662L169 535.639Z" fill="#2F2D6D"/>
                    </g>
                    <line x1="323.019" y1="305.205" x2="522" y2="305.205" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="305.205" x2="522" y2="305.205" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="305.205" x2="522" y2="305.205" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="400.783" x2="522" y2="400.783" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="400.783" x2="522" y2="400.783" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="400.783" x2="522" y2="400.783" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="491.936" x2="522" y2="491.936" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="491.936" x2="522" y2="491.936" stroke="#01DEE6" strokeWidth="32" strokeLinecap="round"/>
                    <line x1="323.019" y1="491.936" x2="522" y2="491.936" stroke="#06C7D7" strokeWidth="32" strokeLinecap="round"/>
                    <circle cx="275.602" cy="306.602" r="14.6022" fill="#01DEE6"/>
                    <circle cx="275.602" cy="306.602" r="14.6022" fill="#01DEE6"/>
                    <circle cx="275.602" cy="402.18" r="14.6022" fill="#01DEE6"/>
                    <circle cx="275.602" cy="402.18" r="14.6022" fill="#01DEE6"/>
                    <circle cx="275.602" cy="493.334" r="14.6022" fill="#01DEE6"/>
                    <circle cx="275.602" cy="493.334" r="14.6022" fill="#01DEE6"/>
                    <defs>
                        <filter id="filter0_d_24_6" x="165" y="142" width="471" height="528" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_6"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_6" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <p className='text-center text-logotext font-mono font-extrabold text-lg'>
                    Playlist
                </p>
            </div>
        </Link>
    )
}
  
  function UserSymbol() {
    return (
        <Link to={'/login'}>
            <svg width="50" height="50" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="34.5" cy="34.5" r="34.5" fill="#01DEE6"/>
                <path d="M31.0614 26.4525C32.6794 23.9658 36.3205 23.9658 37.9385 26.4525L53.7162 50.7024C55.4918 53.4313 53.5334 57.0419 50.2777 57.0419H18.7221C15.4664 57.0419 13.5081 53.4313 15.2836 50.7024L31.0614 26.4525Z" fill="#2F2D6D"/>
                <circle cx="34.459" cy="19.6088" r="13.2093" fill="#2F2D6D" stroke="#01DEE6" strokeWidth="5.74316"/>
            </svg>
        </Link>
    )
}
  

export class Header extends React.Component {
    render() {
        return(
            <header className='flex flex-row bg-indigo'>
                <div className='px-8 py-8'>
                    <Logo />
                </div>
                <div className='grow'>
                    <Navbar />
                </div>
                <div className='px-8 py-12  '>
                    <UserSymbol />
                </div>
            </header>
        )
    }
}