import React, { useState } from "react";
import { addTask } from "../../Api/TaskApi";
import { TaskDetails } from "../../Api/PropTypes";
import Toast from "../toast/Toast";

type Props = { role: String };

export default function AddTaskForm({ role }: Props) {
  const [toast, setToast] = useState<boolean>(false)
  const [addTaskData, setAddTaskData] = useState<TaskDetails>({
    userId: "",
    clientId: "",
    task: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setAddTaskData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      addTask(addTaskData).then((response) => {
        console.log(response);
        setAddTaskData(response);
        setToast(true)
      }).catch((err) => console.log(err, "err add task"))
    } catch (err) {
      console.log("Erros is ");
    }
  };

  return (
    <>
      {toast &&
        <Toast
          message="Task Assigned successfully"
          setToast={setToast}
        />
      }
      {role && (
        <>
          <div className="text-[2rem] text-center mt-6">Assign new task</div>
          <div className="my-5 w-full flex justify-center">
            <form className="flex flex-col w-[90%] md:w-[70%]">
              <input
                type="text"
                id="userId"
                name="userId"
                value={addTaskData.userId}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter user ID"
                required
              />
              <input
                type="text"
                id="clientId"
                name="clientId"
                value={addTaskData.clientId}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter client ID"
                required
              />
              <input
                type="text"
                id="task"
                name="task"
                value={addTaskData.task}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter task"
                required
              />
              <input
                type="text"
                id="status"
                name="status"
                value={addTaskData.status}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter status"
                required
              />
              <input
                type="text"
                id="startDate"
                name="startDate"
                value={addTaskData.startDate}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter startDate"
                required
              />
              <input
                type="text"
                id="endDate"
                name="endDate"
                value={addTaskData.endDate}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter end date"
                required
              />
              <div className="flex justify-center">
                <button
                  className="px-6 py-3 my-3 bg-primary text-white font-bold rounded-md"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Assign
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
