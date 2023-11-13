import React, { useState } from 'react';
import background from "./img/background.jpg";
import { AiOutlineClose } from "react-icons/ai";
import projectData from "./Projetsdata.json";

const Showproject = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [isToggle , setIsToggle] = useState(false);

    const handleToggle = (id) => {
        setSelectedItemId((prevId) => (prevId === id ? null : id));
        setIsToggle(!isToggle);
    };

    return (
        <div className='p-10'>
            <div className="border-black border-2 h-full ">
                <div className='font-thin text-5xl ml-5 mt-5'>
                    My Project
                </div>
                <div className='mx-auto container flex flex-col items-center mb-10'>
                    {projectData.projectData.map((item) => (
                        <div
                            key={item.id}
                            className={`border-2 w-72 h-auto border-black mt-10 relative transition-all duration-1000 ease-in-out 
                            ${
                                isToggle ? 'opacity-100 hidden' : ''
                            }
                            `
                            }
                            onClick={() => handleToggle(item.id)}
                        >
                            {console.log(item)}
                            <img src={background} alt="" />
                            {selectedItemId && selectedItemId === item.id && (
                                <p className='font-bold bg-white text-2xl absolute top-0 left-0 right-0 p-2'>{item.title}</p>
                            )}
                            <p className='bg-white'>{item.description}</p>
                        </div>
                    ))}
                    <div>
                        {selectedItemId && (
                            <div>
                                {projectData.projectData.map((item) => (
                                    <div key={item.id} className=' text-center items-center bg-white relative mb-10'>
                                        <span className='absolute right-0 text-2xl font-bold top-0 p-2 cursor-pointer'>
                                            <AiOutlineClose onClick={() => handleToggle(selectedItemId)} />
                                        </span>
                                        <div className='flex text-center items-center'>
                                            <img src={background} alt="background" className='rounded-lg' />
                                            <p className=''>{item.title}</p>
                                            <p className='font-bold text-2xl'>
                                                {item.description}
                                                <a className='text-blue-500 font-extrabold' href={item.website_link} target='_blank' rel="noopener noreferrer"> GO to website</a>
                                            </p>
                                        </div>
                                    </div>
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
