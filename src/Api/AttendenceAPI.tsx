import axios from "axios";
import { AttendanceDetails, AttendanceResponse } from "./Interface";

export function fetchAllAttendence(
    clientId: string
): Promise<AttendanceResponse> {
    return axios
        .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/attendance`)
        .then((response) => response.data);
}

export function markAttendence(
    attendenceData: AttendanceDetails
): Promise<AttendanceDetails> {
    return axios
        .post(
            `https://trialhub-backend.onrender.com/api/v1/attendance`,
            attendenceData
        )
        .then((response) => response.data);
}
