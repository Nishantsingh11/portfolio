import React, { useState } from 'react';
import background from "./img/background.jpg";
import { AiOutlineClose } from "react-icons/ai";
import projectData from "./Projetsdata.json";
import { Link } from 'react-router-dom';

const Showproject = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = (id) => {
        setSelectedItemId((prevId) => (prevId === id ? null : id));
        setIsToggle(!isToggle);
        console.log(isToggle);
    };
    console.log(projectData.projectData);

    return (
        <div className='p-10'>
            <div className="border-black border-2 h-full ">
                <div className='font-thin text-5xl ml-5 mt-5'>
                    My Project
                </div>
                <div className='ml-5 font-bold mt-10 text-xl inline-block'>
                    <ul>
                        <li><Link to="/"> * </Link></li>
                        <li><Link to="/info"> Info</Link></li>
                        <li><Link to="/contact"> Contact</Link></li>
                    </ul>
                </div>
                {
                    projectData.projectData.map((item, index) => (
                        <div className='mx-auto container flex flex-col items-center  ' key={index} >

                            <div className={`flex flex-col bg-white border shadow-sm rounded-xl w-96 mt-5  ${isToggle ? "hidden" : ""}`} onClick={() => handleToggle(item.id)}
                            >
                                <img className="w-full rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt=" Description" />
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                                        {item.description}                        </p>

                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className='mx-auto container flex flex-col items-center mb-10'>

                    <div>
                        {selectedItemId && (
                            <div>
                                {projectData.projectData.map((item) => (
                                    selectedItemId === item.id && (
                                        <div key={item.id} className='text-center items-center relative mx-auto container'>
                                            <span className='absolute right-0 text-2xl font-bold top-0 p-2 cursor-pointer'>
                                                <AiOutlineClose onClick={() => handleToggle(selectedItemId)} />
                                            </span>

                                            <p className='font-bold text-5xl p-2 right-0 inline'>{item.title}</p>
                                            <div className='flex text-center items-center'>
                                                <img src={background} alt="background" className='rounded-lg ml-5' />
                                                <div>

                                                    <p className=' font-thin text-2xl mt-10'>{item.description}</p>
                                                    <p className='font-bold text-4xl'>Technology used:</p>
                                                    <p className='font-thin text-2xl'>
                                                        {item.technology_used}</p>

                                                    <p className='font-bold text-4xl'>Improvement:</p>
                                                    <p className='font-thin text-2xl'>{item.improvement}</p>
                                                    <p className='font-bold text-4xl'>Vist the site </p>
                                                    <p> <a href={item.website_link} className='font-thin text-2xl'> GenzStyles</a></p>
                                                    <p className='font-bold text-4xl'>See the code</p>
                                                    <p><a href={item.github_repo} className='font-thin text-2xl'>Github/Nishantsingh11/Genzstyles</a></p>
                                                    <p className='font-bold text-4xl'>Start Date</p>
                                                    <p className='font-thin text-2xl'> {item.start_date}</p>
                                                    <p className='font-bold text-4xl'>End Date</p>
                                                    <p className='font-thin text-2xl'   > {item.end_date}</p>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showproject;
