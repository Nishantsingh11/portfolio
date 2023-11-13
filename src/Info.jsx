import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
    return (
        <div className="border-black border-2 h-screen ">
            <div className='ml-5 font-bold mt-10 text-xl'>
                    <ul>
                        <li><Link to="/"> * </Link></li>
                        <li><Link to="/project"> Project </Link></li>
                        <li><Link to="/contact"> Contact</Link></li>
                    </ul>
                </div>


            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>

                <p className="text-lg leading-7 mb-6">
                    Hi there! I'm Nishant, a passionate MERN stack developer based in [Your Location]. Currently, I'm in my 3rd year of BCA at Nehru Gram Bharti College. I have a strong foundation in web development and am proficient in technologies like React, Node.js, Express, MongoDB, and more.
                </p>
                <p className="text-lg leading-7 mb-6">
                    My coding journey began with HTML, CSS, and JavaScript, and I've since expanded my skills to include popular frameworks like React. I'm well-versed in front-end technologies such as Tailwind CSS, Bootstrap, and Redux. I enjoy creating responsive and user-friendly web applications that provide seamless experiences for users.
                </p>
                <p className="text-lg leading-7 mb-6">
                    Despite being in my 3rd year, I've already built several websites, including an e-commerce site called GenzStyles and a movie booking platform. These projects have not only honed my technical skills but also allowed me to apply my knowledge in real-world scenarios.
                </p>
                <p className="text-lg leading-7">
                    While I may not have formal industry experience yet, my passion for coding, coupled with my hands-on projects, demonstrates my commitment to continuous learning and growth as a developer.
                </p>
            </div>



        </div>
    )
}

export default Info