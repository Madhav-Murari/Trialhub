import axios from "axios";
import { MeetingDetails } from "./Interface";

export function getMeetings(clientId: string): Promise<MeetingDetails> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/meeting`)
    .then((response) => response.data);
}
