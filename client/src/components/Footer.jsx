import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @kunalgavit28 | All right reserved.</p>
        <div className='flex gap-2.5'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://x.com/KGavit99960" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/kunalgavit28/" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.instagram_icon} alt="Instagram" />
            </a>
        </div>
    </div>
  )
}

export default Footer