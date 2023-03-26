import React from 'react'
import FilterIcon from '../icons/filterIcon';
import Navbar from '../Navbar/navbar';
import AttendanceItem from './AttendanceItem';

const attendanceSheet = [
  {
    dp:"https://www.w3schools.com/howto/img_avatar.png",
    name:"Harsh",
    Department:"Web Design",
    Presence:true,
    In:"8:30 AM",
    Out:"4:30 PM",
    TotalWorkingHours:"8.00 Hrs",
  },
  {
    dp:"https://www.w3schools.com/howto/img_avatar.png",
    name:"Abhishek",
    Department:"Web Design",
    Presence:false,
    In:"8:30 AM",
    Out:"4:30 PM",
    TotalWorkingHours:"8.00 Hrs",
  },
  {
    dp:"https://www.w3schools.com/howto/img_avatar.png",
    name:"Harsh",
    Department:"Web Design",
    Presence:false,
    In:"8:30 AM",
    Out:"4:30 PM",
    TotalWorkingHours:"8.00 Hrs",
  },
];

function Attendance() {
  return (
    <>
    <Navbar/>
    <div className = 'flex justify-between max-w-1280px mt-14 py-1 px-4 border-b bg-white'>
            <h3 className='font-bold my-3'>Attendance</h3>
            <div className="hidden md:inline-flex items-center space-x-10 ">
                 <h3 className='my-3'>Search</h3>
                 <FilterIcon />
                 <h3>18-12-2022</h3>
            </div>
    </div>
    <div className="bg-white m-4 overflow-auto py-2">
      <table className='w-full'>
        <thead>
          <tr>
          <th>DP</th>
          <th>Name</th>
          <th>Department</th>
          <th>Presence</th>
          <th>In</th>
          <th>Out</th>
          <th>Total Working Hours</th>
        </tr>
        </thead>
        <tbody>
        {attendanceSheet.map((i,index) => (
          <AttendanceItem key = {index} item = {i}/>
        ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Attendance;