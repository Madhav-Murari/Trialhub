import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/navbar';
import WorkBox from './workBox';

function Worklog(){
    return (
        <>
        {/* <Navbar/> */}
        <div className='h-screen md:flex'>
            <div className=' w-full md:w-1/4 pt-16 h-full text-center bg-red-300 flex flex-col justify-around'>
                <img src = "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" className="h-40 w-40 rounded-md mx-auto"/>
                <div>
                <h4>Rohan Sharma</h4>
                <h3 className="text-white">UI/UX Designer</h3>
                </div>
                <div className="rounded-md w-5/6 bg-red-200 py-4 mx-auto">AT WORK FOR : 1 YEAR</div>
                <div className="rounded-md w-3/4 bg-red-200 py-4 mx-auto">OVERVIEW</div>
                <div className="w-3/4 flex flex-col justify-between items-start mx-auto">
                    <Link href = "#"><h2 className='text-[24px]'>Profile</h2></Link>
                    <Link href = "#"><h2 className='text-[24px]'>Calander</h2></Link>
                    <Link href = "#"><h2 className='text-[24px]'>Collegues</h2></Link>
                    <Link href = "#"><h2 className='text-[24px]'>Documents</h2></Link>
                    <Link href = "#"><h2 className='text-[24px]'>Support</h2></Link>
                </div>
            </div>
            <div className = "w-full md:w-3/4 md:pt-16 p-4 flex flex-col justify-between">
                <div className='h-1/3 md:flex justify-between'>
                    <div className='md:w-2/5 h-full flex flex-col justify-around bg-white p-6'>
                        <h2>WORKLOG</h2>
                        <div>
                            <div className='flex justify-between'>
                                <h2 className = "text-[24px]">MONDAY</h2>
                                <h4>Clock In Time</h4>
                            </div>
                            <div className='flex justify-between'>
                                <h2>16 JUN 2023</h2>
                                <h3 className='text-red-400'>10:15:56</h3>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <h1 className = "text-green-400 text-[30px]">05:18:32</h1>
                                <h4>Clock Out Time</h4>
                            </div>
                            <div className='flex justify-between'>
                                <h2>Total Time Worked</h2>
                                <h3 className='text-yellow-400'>00:00:00</h3>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-2/5 h-full flex justify-center items-end bg-white'>
                        <div className='w-8 h-[24px] mx-2 bg-green-500 flex  justify-center items-end text-[10px]'>DAY 1</div>
                        <div className='w-8 h-[64px] mx-2 bg-green-500 flex  justify-center items-end text-[10px]'>DAY 2</div>
                        <div className='w-8 h-[48px] mx-2 bg-green-500 flex  justify-center items-end text-[10px]'>DAY 3</div>
                        <div className='w-8 h-[100px] mx-2 bg-green-500 flex  justify-center items-end text-[10px]'>DAY 4</div>
                        <div className='w-8 h-[50px] mx-2 bg-green-500 flex  justify-center items-end text-[10px]'>DAY 5</div>
                        <div className='w-8 h-[20px] mx-2 bg-green-500 flex  justify-center items-end text-[10px]'>DAY 6</div>
                        <div className='w-8 h-[60px] mx-2 bg-green-500 flex  justify-center items-end text-[10px]'>DAY 7</div>
                    </div>
                </div>
                <div className='h-1/10 py-4 bg-white flex flex-wrap justify-around'>
                    <WorkBox qnty = "10" text = "No of task assigned" icon="📃"/>
                    <WorkBox qnty = "3" text = "No of task left" icon="🖋️"/>
                    <WorkBox qnty = "4" text = "No of upcoming meetings" icon="🎦"/>
                    <WorkBox qnty = "10" text = "No of pending tasks" icon="⏰"/>
                </div>
                <div className='flex flex-col bg-white p-6'>
                    <h2 className='text-[24px]'>Today</h2>
                    <p className='text-gray-600'>Birthday</p>
                    <h2 className='text-[24px]'>Its Deepak Birthday</h2>
                    <p className='text-gray-600'>Meeting</p>
                    <h2 className='text-[24px]'>Meeting with UI Team</h2>
                    <p className='text-gray-600'>Presentation</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Worklog;