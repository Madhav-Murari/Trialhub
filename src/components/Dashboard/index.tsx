import Link from "next/link";
import React, { useState, useEffect } from "react";
import WorkBox from "./WorkBox";
import axios from "axios";
import { useRouter } from "next/router";

interface UserDetails {
  coverage: {
    working_hours: {
      [key: string]: any[];
    };
    alternate_working_days: any[];
    partial_working_hours: any[];
    holidays: any[];
  };
  paidHolidayRemaining: string;
  password: string;
  skills: any[];
  language: any[];
  _id: string;
  email: string;
  phone_number: string;
  name: string;
  clientId: string;
  dateOfBirth: string;
  role: string;
  parent: string;
  __v: number;
}
//task
interface TaskDetails {
  userId: string;
  clientId: string;
  task: string;
  status: string;
  startDate: string;
  endDate: string;
}

//meeting
interface MeetingDetails {
  totalCount: number;
  page: number;
  limit: number;
  data: any[];
  totalUsers: any[];
}

//attendence
interface TimeCollection {
  date?: string;
  clock_in_time?: string;
  clock_out_time?: string;
}

interface AttendanceRequest {
  date?: string;
  complain?: string;
}

interface AttendanceDetails {
  userId: string;
  clientId: string;
  status: string;
  attendance: {
    timeCollection: TimeCollection[];
    request: AttendanceRequest[];
  };
}
interface AuthData {
  userId: string;
  clientId: string;
}

function calculateTotalTimeWorked(entry: TimeCollection): string {
  const clockInTime = new Date(`1970-01-01T${entry.clock_in_time}`);
  const clockOutTime = new Date(`1970-01-01T${entry.clock_out_time}`);
  const timeDiff = clockOutTime.getTime() - clockInTime.getTime();

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number: number): string {
  return number.toString().padStart(2, "0");
}

function calculateHeight(entry: TimeCollection): string {
  const clockInTime = new Date(`1970-01-01T${entry.clock_in_time}`);
  const clockOutTime = new Date(`1970-01-01T${entry.clock_out_time}`);
  const timeDiff = clockOutTime.getTime() - clockInTime.getTime();

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));

  return `${hours}`;
}

export function Dashboard() {
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const userDataString: string | null = localStorage.getItem("userData");
  const [taskData, setTaskData] = useState<TaskDetails | null>(null);
  const [meetingData, setMeetingData] = useState<MeetingDetails | null>(null);
  const [attendanceData, setAttendenceData] =
    useState<AttendanceDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!userDataString) {
      router.push("/login");
      return;
    }
    try {
      const authData: AuthData = JSON.parse(userDataString);
      const userId = authData.userId;
      const clientId = authData.clientId;

      //user data
      axios
        .get(
          `https://trialhub-backend.onrender.com/api/v1/${clientId}/user/${userId}`
        )
        .then((response) => {
          setUserData(response.data);
        })
        .catch((err) => {
          console.error(err);
        });

      //task data
      axios
        .get(
          `https://trialhub-backend.onrender.com/api/v1/${clientId}/task/${userId}`
        )
        .then((response) => {
          setTaskData(response.data);
        })
        .catch((err) => {
          console.error(err);
        });

      //meeting data
      axios
        .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/meeting`)
        .then((response) => {
          setMeetingData(response.data);
        })
        .catch((err) => {
          console.error(err);
        });

      //attendence data
      axios
        .get(
          `https://trialhub-backend.onrender.com/api/v1/attendance/${userId}`
        )
        .then((response) => {
          setAttendenceData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      // setAttendenceData({
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
  }, [userDataString]);

  console.log(userData);

  return (
    <>
      {userData ? (
        <div className="h-screen md:flex">
          <div className=" w-full md:w-1/4 pt-16 h-full text-center bg-red-300 flex flex-col justify-around">
            <img
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              className="h-40 w-40 rounded-md mx-auto"
            />
            <div>
              <h4>{userData.name}</h4>
              <h3 className="text-white">{userData.role}</h3>
            </div>
            <div className="rounded-md w-5/6 bg-red-200 py-4 mx-auto">
              AT WORK FOR : 1 YEAR
            </div>
            <div className="rounded-md w-3/4 bg-red-200 py-4 mx-auto">
              OVERVIEW
            </div>
            <div className="w-3/4 flex flex-col justify-between items-start mx-auto">
              <Link href="#">
                <h2 className="text-[24px]">Profile</h2>
              </Link>
              <Link href="#">
                <h2 className="text-[24px]">Calander</h2>
              </Link>
              <Link href="#">
                <h2 className="text-[24px]">Collegues</h2>
              </Link>
              <Link href="#">
                <h2 className="text-[24px]">Documents</h2>
              </Link>
              <Link href="#">
                <h2 className="text-[24px]">Support</h2>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/4 md:pt-16 p-4 flex flex-col justify-between">
            <div className="h-1/3 md:flex justify-between">
              <div className="md:w-2/5 h-full flex flex-col justify-around bg-white p-6">
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
              <div className="md:w-2/5 h-full flex justify-center items-end bg-white">
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
              </div>
            </div>
            <div className="h-1/10 py-4 bg-white flex flex-wrap justify-around">
              <WorkBox qnty="10" text="No of task assigned" icon="📃" />
              <WorkBox qnty="3" text="No of task left" icon="🖋️" />
              <WorkBox qnty="4" text="No of upcoming meetings" icon="🎦" />
              <WorkBox qnty="10" text="No of pending tasks" icon="⏰" />
            </div>
            <div className="flex flex-col bg-white p-6">
              <h2 className="text-[24px]">Today</h2>
              <p className="text-gray-600">Birthday</p>
              <h2 className="text-[24px]">Its Deepak Birthday</h2>
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
