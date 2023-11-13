import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram, AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
const Profile = () => {
    return (
        <div className='p-10'>

            <div className=" border-black border-2 h-screen overflow-hidden">
                <div className='ml-5 mt-5 text-7xl font-thin'>
                    Nishant Singh
                </div>
                <p className='ml-5  font-bold text-xl'>Full stack devopoer  </p>
                <div className='ml-5 font-bold mt-10 text-xl'>
                    <ul>
                        <li><Link to="/"> * </Link></li>
                        <li><Link to="/project"> Project </Link></li>
                        <li><Link to="/info"> Info</Link></li>
                        <li><Link to="/contact"> Contact</Link></li>
                    </ul>
                </div>


                <div className='absolute bottom-0 flex'>
                    <a href="https://www.instagram.com/" target='_blank'rel="noreferrer" >

                        <AiOutlineInstagram className='text-3xl ml-3' />
                    </a>
                    <a href="https://www.facebook.com/" target='_blank'rel="noreferrer" >

                    </a>
                    <AiFillFacebook className='text-3xl ml-3' />
                    <a href="https://www.linkedin.com/in/nishant-singh-42a020203/" target='_blank' rel="noreferrer">

                        <AiFillLinkedin className='text-3xl ml-3' />
                    </a>
                    <a href="https://github.com/Nishantsingh11" target='_blank' rel="noreferrer">

                        <AiFillGithub className='text-3xl ml-3' />
                    </a>
                </div>
                <div className='absolute bottom-3 right-0 p-12 font-bold -tracking-wide space-y-7'>
                    <p>
                        Born in 2003 <br /> In Mirzapur <br /> Uttar Prasdesh
                        <br /> <span className='font-mono'>
                            India
                        </span>
                    </p>
                    <p>
                        I belive that<br />   i can imporve  <br /> myself each day <br />with i mission to <br /> make myself <br /> a good devopoer
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Profile