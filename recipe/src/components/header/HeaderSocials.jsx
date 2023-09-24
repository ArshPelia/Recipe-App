import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/arshjit-pelia-585029207/" target='_blank'><GrLinkedin/></a>
        <a href="https://github.com/ArshPelia" target='_blank'><BsGithub/></a>
        {/* <a href="https://www.linkedin.com/in/arshjit-pelia-585029207/" target='_blank'></a> */}

    </div> 
    )
}

export default HeaderSocials