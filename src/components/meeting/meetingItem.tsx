import React from "react";
import StatusTile from "./status_tile";
import { MeetingDetails } from "../../Api/Interface";

interface Props {
  item: MeetingDetails;
}

const MeetingItem: React.FC<Props> = ({ item }) => {

  return (
    <>
      {item &&
        item?.data.map((data, index) => {
          return (
              <tr className="h-10" key={index}>
                <td>{data && <StatusTile status={data.status} />}</td>
                <td>{data && data.clientId}</td>
                <td>{data && data.role}</td>
                <td>{data && data.purpose}</td>
                <td>{data && data.time}</td>
              </tr>
          );
        })}
    </>
  );
};

export default MeetingItem;
