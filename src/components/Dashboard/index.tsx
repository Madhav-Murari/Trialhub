import Link from "next/link";
import React, { useState, useEffect } from "react";
import WorkBox from "./WorkBox";
import { useRouter } from "next/router";
import {
  UserDetails,
  TaskDetails,
  MeetingDetails,
  AttendanceDetails,
  AuthData,
} from "./dashboardTypes";
import { calculateTotalTimeWorked, calculateHeight } from "./dashboardUtils";
import {
  fetchUserData,
  fetchTaskData,
  fetchMeetingData,
  fetchAttendanceData,
} from "./dashboardApi";
import { FaArrowRight } from "react-icons/fa";

export function Dashboard() {
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [taskData, setTaskData] = useState<TaskDetails | null>(null);
  const [meetingData, setMeetingData] = useState<MeetingDetails | null>(null);
  const [attendanceData, setAttendanceData] =
    useState<AttendanceDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }
    try {
      const authData: AuthData = JSON.parse(userDataString);
      const userId = authData.userId;
      const clientId = authData.clientId;

      // Fetch user data
      fetchUserData(clientId, userId)
        .then((response) => {
          setUserData(response);
        })
        .catch((err) => {
          console.error(err);
        });

      // Fetch task data
      fetchTaskData(clientId, userId)
        .then((response) => {
          setTaskData(response);
        })
        .catch((err) => {
          console.error(err);
        });

      // Fetch meeting data
      fetchMeetingData(clientId)
        .then((response) => {
          setMeetingData(response);
        })
        .catch((err) => {
          console.error(err);
        });

      // Fetch attendance data
      fetchAttendanceData(userId)
        .then((response) => {
          setAttendanceData(response);
        })
        .catch((err) => {
          console.log(err);
        });
      // setAttendanceData({
      //   userId: "",
      //   clientId: "Mah123",
      //   status: "active",
      //   attendance: {
      //     timeCollection: [
      //       {
      //         date: "05-06-2023",
      //         clock_in_time: "11:31:00",
      //         clock_out_time: "15:30:00",
      //       },
      //       {
      //         date: "04-06-2023",
      //         clock_in_time: "11:31:00",
      //         clock_out_time: "15:30:00",
      //       },
      //       {
      //         date: "03-06-2023",
      //         clock_in_time: "09:31:00",
      //         clock_out_time: "20:30:00",
      //       },
      //       {
      //         date: "02-06-2023",
      //         clock_in_time: "10:31:00",
      //         clock_out_time: "18:30:00",
      //       },
      //       {
      //         date: "01-06-2023",
      //         clock_in_time: "11:31:00",
      //         clock_out_time: "17:30:00",
      //       },
      //     ],
      //     request: [],
      //   },
      // });
    } catch (err) {
      console.error(err);
    }
  }, []);

  console.log(userData);

  return (
    <>
      {userData ? (
        <div className="md:h-full md:flex">
          <div className="w-full md:w-1/4 h-full text-center bg-gray-100 flex flex-col">
            <img
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              className="h-40 w-40 rounded-md mx-auto my-5"
            />
            <div>
              <div className="text-[2rem] font-semibold">{userData.name && 'Name : ' + userData.name}</div>
              <h3 className="text-[1rem] font-medium text-green">{userData.role && 'Role : ' + userData.role}</h3>
              <h3 className="text-[1rem] text-sky-500 text-green">{userData.email && 'Email : ' + userData.email}</h3>
            </div>
            <div className="mt-4 mb-1 mx-auto">
              Useful Links
            </div>
            <div className="w-3/4 flex flex-col justify-between items-start mx-auto my-2">
              <Link className="w-full text-blue-500 flex flex-row items-center justify-between px-2 py-1 bg-gray-200 shadow-sm rounded-md my-1" href="attendence">
                <h2 className="text-[20px] text-gray-700">Attendence</h2>
                <span className="text-gray-400 text-[12px]"><FaArrowRight /></span>
              </Link>
              <Link className="w-full text-blue-500 flex flex-row items-center justify-between px-2 py-1 bg-gray-200 shadow-sm rounded-md my-1" href="tasks">
                <h2 className="text-[20px] text-gray-700">View tasks</h2>
                <span className="text-gray-400 text-[12px]"><FaArrowRight /></span>
              </Link>
              <Link className="w-full text-blue-500 flex flex-row items-center justify-between px-2 py-1 bg-gray-200 shadow-sm rounded-md my-1" href="meeting">
                <h2 className="text-[20px] text-gray-700">My meetings</h2>
                <span className="text-gray-400 text-[12px]"><FaArrowRight /></span>
              </Link>
              <Link className="w-full text-blue-500 flex flex-row items-center justify-between px-2 py-1 bg-gray-200 shadow-sm rounded-md my-1" href="leave">
                <h2 className="text-[20px] text-gray-700">Check leave</h2>
                <span className="text-gray-400 text-[12px]"><FaArrowRight /></span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/4 p-4 flex flex-col justify-">
            <div className="md:flex justify-between">
              <div className="md:w-2/5 my-5 flex flex-col justify-around bg-white p-6 rounded-md shadow hover:shadow-md">
                <h2>WORKLOG</h2>
                <div>
                  <div className="flex justify-between">
                    <h2 className="text-[24px]">MONDAY</h2>
                    <h4>Clock In Time</h4>
                  </div>
                  <div className="flex justify-between">
                    <h2>
                      {attendanceData &&
                        attendanceData.attendance.timeCollection[0].date}
                    </h2>
                    <h3 className="text-red-400">
                      {attendanceData &&
                        attendanceData.attendance.timeCollection[0]
                          .clock_in_time}
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-green-400 text-[30px]">
                      {attendanceData &&
                        calculateTotalTimeWorked(
                          attendanceData.attendance.timeCollection[0]
                        )}
                    </h1>
                    <h4>Clock Out Time</h4>
                  </div>
                  <div className="flex justify-between">
                    <h2>Total Time Worked</h2>
                    <h3 className="text-yellow-400">
                      {attendanceData &&
                        attendanceData.attendance.timeCollection[0]
                          .clock_out_time}
                    </h3>
                  </div>
                </div>
              </div>
              {/* <div className="md:w-2/5 h-full flex justify-center items-end bg-white">
                {attendanceData &&
                  attendanceData.attendance.timeCollection
                    .slice(0, 7)
                    .map((entry, index) => (
                      <div
                        className={`w-8 h-${calculateHeight(
                          entry
                        )} mx-2 bg-green-500 flex justify-center items-end text-[10px]`}
                        key={index}
                      >
                        DAY {index + 1}
                      </div>
                    ))}
              </div> */}
            </div>
            <div className="py-4 flex flex-wrap justify-evenly">
              <WorkBox qnty="10" text="No of task assigned" icon="📃" />
              <WorkBox qnty="3" text="No of task left" icon="🖋️" />
              <WorkBox qnty="4" text="No of upcoming meetings" icon="🎦" />
              <WorkBox qnty="10" text="No of pending tasks" icon="⏰" />
            </div>
            <div className="flex flex-col bg-white p-6">
              <h2 className="text-[24px]">Date : 23/03/2023</h2>
              <p className="text-gray-600">Meeting</p>
              <h2 className="text-[24px]">Meeting with UI Team</h2>
              <p className="text-gray-600">Presentation</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
