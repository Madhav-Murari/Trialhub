import React from "react";
import { TaskDetails } from "../src/Api/PropTypes";

type Props = { tasks: TaskDetails | null };

const TasksList: React.FC<Props> = ({ tasks }) => {
  console.log(tasks, "tasks");
  return (
    <>
      {tasks && (
        <div>
          {tasks.data?.map((data, index) => (
            <div
              key={index}
              className="w-full bg-white flex flex-col md:flex-row items-start justify-between m-1 p-2 rounded-md"
            >
              <div className="w-[100%] text-left m-1 w-3/20">{data.userId}</div>
              <div className="w-[100%] text-left m-1 w-3/20">{data.clientId}</div>
              <div className="w-[100%] text-left m-1 w-3/20">{data.task}</div>
              <div className="w-[100%] text-left m-1 w-3/20"><span className="bg-sky-400 px-2 py-1 rounded-md text-white"> {data.status} </span> </div>
              <div className="w-[100%] text-left m-1 w-3/20">{data.startDate}</div>
              <div className="w-[100%] text-left m-1 w-3/20">{data.endDate}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TasksList;