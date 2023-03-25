import React from "react";

interface props {
  item: {
    dp: string;
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
    <td><div><img src = {item.dp} className = "rounded-full w-10 m-auto"/></div></td>
    <td>{item.name}</td>
    <td>{item.Department}</td>
    <td>{item.Presence ? <p style = {{color:'green'}}>Present</p> : <p style = {{color:'red'}}>Absent</p>}</td>
    <td>{item.In}</td>
    <td>{item.Out}</td>
    <td>{item.TotalWorkingHours}</td>
  </tr>
  )
}

    <table>
      <tbody>
        <tr>
          <td>
            <div className="w-10 m-auto">
              <img src={item.dp} className="rounded-full" />
            </div>
          </td>
          <td>{item.name}</td>
          <td>{item.Department}</td>
          <td>
            {item.Presence ? (
              <p style={{ color: "green" }}>Present</p>
            ) : (
              <p style={{ color: "red" }}>Absent</p>
            )}
          </td>
          <td>{item.In}</td>
          <td>{item.Out}</td>
          <td>{item.TotalWorkingHours}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AttendanceItem;
 