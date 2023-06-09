import React, { useState, useEffect } from "react";
import { updateTask } from "../../Api/TaskApi";
import { AuthData, TaskDetails } from "../../Api/PropTypes";
import Toast from "../toast/Toast";
import { useRouter } from "next/router";

type Props = { role: String };

type UserData = {
  userId: string;
  clientId: string;
}
export default function UpdateTaskForm({ role }: Props) {
  const router = useRouter();

  const [userDataString, setUserDataString] = useState<UserData>({
    userId: "",
    clientId: ""
  })
  const [toast, setToast] = useState<boolean>(false)
  const [updateTaskData, setUpdateTaskData] = useState<TaskDetails>({
    userId: "",
    clientId: "",
    task: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUpdateTaskData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }

    const authData: AuthData = JSON.parse(userDataString);
    setUserDataString({ userId: authData.userId, clientId: authData.clientId })
  });

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      updateTask(updateTaskData, userDataString.clientId, userDataString.userId).then((response) => {
        console.log(response);
        setUpdateTaskData(response);
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
          message="Task Updated successfully"
          setToast={setToast}
        />
      }
      {role && (
        <>
          <div className="text-[2rem] text-center mt-6">Update client's task</div>
          <div className="my-5 w-full flex justify-center">
            <form className="flex flex-col w-[90%] md:w-[70%]">
              <input
                type="text"
                id="userId"
                name="userId"
                value={updateTaskData.userId}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter user ID"
                required
              />
              <input
                type="text"
                id="clientId"
                name="clientId"
                value={updateTaskData.clientId}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter client ID"
                required
              />
              <input
                type="text"
                id="task"
                name="task"
                value={updateTaskData.task}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter task"
                required
              />
              <input
                type="text"
                id="status"
                name="status"
                value={updateTaskData.status}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter status"
                required
              />
              <input
                type="text"
                id="startDate"
                name="startDate"
                value={updateTaskData.startDate}
                onChange={handleChange}
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter startDate"
                required
              />
              <input
                type="text"
                id="endDate"
                name="endDate"
                value={updateTaskData.endDate}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
