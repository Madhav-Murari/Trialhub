import FilterIcon from '../icons/filterIcon';
import AttendanceItem from './AttendanceItem';
import React, { useState, useEffect } from 'react';
import { AuthData } from '../../Api/PropTypes';
import { useRouter } from 'next/router';

function Attendance() {
  const router = useRouter()
  const [attendanceSheet, setAttendanceSheet] = useState([]);

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login")
      return;
    }
    const authData: AuthData | null = userDataString ? JSON.parse(userDataString) : null;
    const clientId = authData?.clientId ?? "";
    console.log(clientId)
    if (clientId) {
      fetch(`https://trialhub-backend.onrender.com/api/v1/${clientId}/attendance`)
        .then(response => response.json())
        .then(data => {
          setAttendanceSheet(data.data);
          console.log(data);
        })
        .catch(error => console.error(error));
    }
  }, []);


  return (
    <>
      <div className='flex justify-between max-w-1280px mx-auto py-1 px-4 border-b bg-white'>
        <h3 className='font-bold my-3'>Attendance</h3>
        <div className="hidden md:inline-flex items-center space-x-10 ">
          <h3 className='my-3'>Search</h3>
          <FilterIcon />
          <h3>18-12-2022</h3>
        </div>
      </div>
      <div className="bg-white m-6 overflow-auto py-4 rounded-3xl">
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
            {attendanceSheet.map((item, index) => (
              <AttendanceItem key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Attendance;