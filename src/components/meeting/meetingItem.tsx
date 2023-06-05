import React, { useState } from "react";
import StatusTile from "./status_tile";

interface Props {
  item: [
    {
      _id: string;
      status: string;
      clientId: string;
      role: string;
      purpose: string;
      time?: string;
      __v?: string;
    }
  ];
}

const MeetingItem: React.FC<Props> = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);
  function clickHandler() {
    setIsClicked((prevState) => !prevState);
  }

  function leaveHandler() {
    setIsClicked(false);
  }

  return (
    <>
      {item &&
        item.map((data, index) => {
          return (
            <>
              <tr className="h-10" key={index}>
                <td>{data && data._id}</td>
                <td>{data && <StatusTile status={data.status} />}</td>
                <td>{data && data.clientId}</td>
                <td>{data && data.role}</td>
                <td>{data && data.purpose}</td>
                <td>{data && data.time}</td>
              </tr>
            </>
          );
        })}
    </>
  );
};

export default MeetingItem;
