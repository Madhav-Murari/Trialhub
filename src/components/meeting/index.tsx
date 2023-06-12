import React from "react";
import MeetingItem from "./meetingItem";
import { MeetingDetails } from "../../Api/Interface";

interface Props {meetingData : MeetingDetails;}

const Meeting: React.FC<Props> = ({ meetingData }) => {
  return (
    <>
      <div className="m-4 py-2 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr className="h-12">
              <th>Status</th>
              <th>Client ID</th>
              <th>Role</th>
              <th>Purpose</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {meetingData &&
              meetingData?.data.map((item, index) => (
                <MeetingItem key={index} item={meetingData} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Meeting;
