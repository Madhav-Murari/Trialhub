import axios from "axios";
import { TaskDetails, TaskResponse } from "./PropTypes";


export function fetchTaskData(clientId: string): Promise<TaskResponse> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/task`)
    .then((response) => response.data);
}

export function fetchAllTasks(): Promise<TaskResponse> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/task`)
    .then((response) => response.data);
}

export function addTask(addTask: TaskDetails | null): Promise<TaskDetails> {
  return axios
    .post(`https://trialhub-backend.onrender.com/api/v1/addTask`, addTask)
    .then((response) => response.data);
}
