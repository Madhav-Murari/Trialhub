import React from "react";
import MeetingItem from "./meetingItem";

interface Props {
  meetingDataIFC: [
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

const Meeting: React.FC<Props> = ({ meetingDataIFC }) => {
  return (
    <>
      <div className="m-4 py-2 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr className="h-12">
              <th>Your ID</th>
              <th>Status</th>
              <th>Client ID</th>
              <th>Role</th>
              <th>Purpose</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {meetingDataIFC &&
              meetingDataIFC.map((item, index) => (
                <MeetingItem key={index} item={meetingDataIFC} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Meeting;
