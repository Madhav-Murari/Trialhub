import AttendanceList from './AttendanceList';
import React, { useState, useEffect } from 'react';
import { AttendanceResponse, AuthData } from '../../Api/Interface';
import { useRouter } from 'next/router';
import { fetchAllAttendence } from '../../Api/AttendenceAPI';
import AddAttendenceForm from './AddAttendenceForm';

function Attendance() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true)
  const [attendenceData, setAttendenceData] = useState<AttendanceResponse>({
    data: [],
    totalAttendances: [],
    limit: 0,
    page: 0,
    totalCount: 0
  });
  const [role, setRole] = useState<string>();

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login")
      return;
    };

    const authData: AuthData | null = userDataString ? JSON.parse(userDataString) : null;
    const clientId = authData?.clientId ?? undefined;
    setRole(authData?.role);
    const role = authData?.role ?? undefined;
    if (clientId && role === "superAdmin") {
      fetchAllAttendence(clientId)
        .then((response) => { setAttendenceData(response); setLoading(false); })
        .catch(error => console.error(error));
    }
  }, []);

  return (
    <>
      <div className="bg-white h-[300px] shadow m-6 overflow-y-scroll py-4 rounded-md">
        <div className='text-[1.5rem] my-3 px-4'>Attendence of all employees</div>
        <div className='w-full'>
          <div className='flex flex-row bg-gray-100'>
            <div className='w-full font-medium p-4'>User ID</div>
            <div className='w-full font-medium p-4'>Client ID</div>
            <div className='w-full font-medium p-4'>Status</div>
          </div>
          <div>
            {!loading ?
              <AttendanceList item={attendenceData} />
              :
              <div className='p-3 animate-pulse'>Fetching attendence details...</div>
            }
          </div>
        </div>
      </div>

      <div>
        {role != "superAdmin" && <AddAttendenceForm />}
      </div>
    </>
  );
}

export default Attendance;