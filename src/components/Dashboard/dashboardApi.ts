import axios from 'axios';
import { UserDetails, TaskDetails, MeetingDetails, AttendanceDetails, AuthData } from './dashboardTypes';


export function fetchUserData(clientId: string, userId: string): Promise<UserDetails> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/user/${userId}`)
    .then((response) => response.data);
}

export function fetchTaskData(clientId: string, userId: string): Promise<TaskDetails> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/task/${userId}`)
    .then((response) => response.data);
}

export function fetchMeetingData(clientId: string): Promise<MeetingDetails> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/meeting`)
    .then((response) => response.data);
}

export function fetchAttendanceData(userId: string): Promise<AttendanceDetails> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/attendance/${userId}`)
    .then((response) => response.data);
}