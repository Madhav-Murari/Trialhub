import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AuthData } from "../../Api/Interface";
import AddTaskForm from "./AddTaskForm";
import UpdateTaskForm from "./UpdateTaskForm";

type Props = {};

export default function TaskaAdd({}: Props) {
  const router = useRouter();
  const [taskMethod, setTaskMethod] = useState<String>("assign");
  const [role, setRole] = useState<String | null>("");
  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }

    const authData: AuthData = JSON.parse(userDataString);
    const clientId = authData.clientId;
    setRole(authData.role);
  });

  return (
    <>
      <div className="flex flex-row justify-evenly mb-4 mt-[2rem]">
        <div
          className={`text-[1.5rem] hover:cursor-pointer border-b-2 px-3 py-2 ${
            taskMethod === "assign" ? "text-primary border-primary" : ""
          }`}
          onClick={() => setTaskMethod("assign")}
        >
          Assign Task
        </div>
        <div
          className={`text-[1.5rem] hover:cursor-pointer border-b-2 px-3 py-2 ${
            taskMethod === "update" ? "text-primary border-primary" : ""
          }`}
          onClick={() => setTaskMethod("update")}
        >
          Update Task
        </div>
      </div>

      {role === "superAdmin" &&
        (taskMethod === "assign" ? (
          <AddTaskForm role={role} />
        ) : (
          <UpdateTaskForm role={role} />
        ))}
    </>
  );
}
