import React, { useEffect, useState } from "react";
import Meeting from "../src/components/meeting";

interface MeetingDataProps {
  meetingData: [
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

const meeting: React.FC<MeetingDataProps> = ({ meetingData }) => {
  const [getMeetings, setGetMeetings] = useState<MeetingDataProps[]>([]);

  const getMeetingData = async () => {
    try {
      const response = await fetch(
        "https://trialhub-backend.onrender.com/api/v1/123/meeting"
      );
      const data = await response.json();
      setGetMeetings(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMeetingData();
  }, []);

  return (
    <>
      <Meeting meetingDataIFC={getMeetings} />
    </>
  );
};

export default meeting;
