import axios from 'axios';
import { TaskDetails } from './PropTypes';

export function fetchTaskData(clientId: string): Promise<TaskDetails> {
  return axios
    .get(`https://trialhub-backend.onrender.com/api/v1/${clientId}/task`)
    .then((response) => response.data);
}
