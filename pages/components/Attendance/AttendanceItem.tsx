import React from "react";

interface props {
  item: {
    dp?: string;
    name: string;
    Department: string;
    Presence: boolean;
    In: string;
    Out: string;
    TotalWorkingHours: string;
  };
}

const AttendanceItem: React.FC<props> = ({ item }) => {
  return (
    <tr>
      <td>
        <div className="w-10 m-auto">
        <img src={item.dp || ""} className="rounded-full" />
        </div>
      </td>
      <td>{item.name && item.name}</td>
      <td>{item.Department && item.Department}</td>
      <td>
        {item.Presence ? (
          <p style={{ color: "green" }}>Present</p>
        ) : (
          <p style={{ color: "red" }}>Absent</p>
        )}
      </td>
      <td>{item.In && item.In}</td>
      <td>{item.Out && item.Out}</td>
      <td>{item.TotalWorkingHours && item.TotalWorkingHours}</td>
    </tr>
  );
};

export default AttendanceItem;
