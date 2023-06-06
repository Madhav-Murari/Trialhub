import React from "react";
// import Avatar from "./Avatar";
import Statusbar from "./Statusbar";
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
              className="bg-white flex flex-col md:flex-row items-center justify-between m-1 p-2 rounded-md"
            >
              <div className="w-full text-left m-1 w-3/20">{data.userId}</div>
              <div className="w-full text-left m-1 w-3/20">{data.clientId}</div>
              <div className="w-full text-left m-1 w-3/20">{data.task}</div>
              <div className="w-full text-left m-1 w-3/20"><span className="bg-sky-400 px-2 py-1 rounded-md text-white"> {data.status} </span> </div>
              <div className="w-full text-left m-1 w-3/20">{data.startDate}</div>
              <div className="w-full text-left m-1 w-3/20">{data.endDate}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TasksList;

// {tasks && tasks.map((tasks, index) => {
//   return (
//     <div
//       className="bg-white flex flex-col md:flex-row items-center justify-between m-1 p-2 rounded-md"
//       key={index}
//     >
//       {/* <div className="w-6/12 md:w-3/20">{tasks._id}</div> */}
//       <div className="w-full text-left m-1 flex-col md:flex-row w-3/20"> {tasks.userId} </div>
//       <div className="w-full text-left m-1 flex-col md:flex-row w-3/20">{tasks.clientId}</div>
//       <div className="w-full text-left m-1 flex-col md:flex-row w-3/20">{tasks.task}</div>
//       <div className="w-full text-left m-1 flex-col md:flex-row w-3/20">
//         <Statusbar num={tasks.status} />
//       </div>
//       <div className="w-full text-left m-1 flex-col md:flex-row w-3/20"> {tasks.startDate} </div>
//       <div className="w-full text-left m-1 flex-col md:flex-row w-3/20"> {tasks.endDate} </div>
//     </div>
//   );
// })}
