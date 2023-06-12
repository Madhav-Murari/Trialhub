import React, { useState } from "react";
import { AttendanceDetails } from "../../Api/Interface";
import Toast from "../toast/Toast";
import { markAttendence } from "../../Api/AttendenceAPI";

type Props = {};

export default function AddAttendenceForm({ }: Props) {
  const [toast, setToast] = useState<boolean>(false)
  const [addAttendenceData, setAddAttendenceData] = useState<AttendanceDetails>({
    userId: "",
    clientId: "",
    status: "",
    attendance: {
      timeCollection: [],
      request: []
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setAddAttendenceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      markAttendence(addAttendenceData).then((response) => {
        console.log(response);
        setAddAttendenceData(response);
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
          message="Attendence marked successfully"
          setToast={setToast}
        />
      }
      <div className="text-[2rem] text-center mt-6">Mark your attendence</div>
      <div className="my-5 w-full flex justify-center">
        <form className="flex flex-col w-[90%] md:w-[70%]">
          <input
            type="text"
            id="userId"
            name="userId"
            value={addAttendenceData.userId}
            onChange={handleChange}
            className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter user ID"
            required
          />
          <input
            type="text"
            id="clientId"
            name="clientId"
            value={addAttendenceData.clientId}
            onChange={handleChange}
            className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter client ID"
            required
          />
          <input
            type="text"
            id="status"
            name="status"
            value={addAttendenceData.status}
            onChange={handleChange}
            className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter status"
            required
          />
          <input
            type="time"
            id="startDate"
            name="startDate"
            // value={addAttendenceData.attendance?.timeCollection}
            // onChange={handleChange}
            className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter startDate"
            required
          />
          <input
            type="date"
            id="endDate"
            name="endDate"
            // value={addAttendenceData.attendance?.request}
            // onChange={handleChange}
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
              Mark Attendence
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
