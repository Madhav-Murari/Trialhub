import React, { useEffect, useState } from "react";
import Meeting from "../src/components/meeting";
import { AuthData, MeetingDetails } from "../src/Api/Interface";
import { useRouter } from "next/router";
import { getMeetings } from "../src/Api/MeetingAPI";

type Props = {};
const meeting: React.FC<Props> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [meetingData, setMeetingData] = useState<MeetingDetails>({
    totalCount: 0,
    page: 0,
    limit: 0,
    data: [],
    totalUsers: [],
  });

  const router = useRouter();

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }

    const authData: AuthData = JSON.parse(userDataString);
    const clientId = authData.clientId;

    getMeetings(clientId)
      .then((response) => {
        setMeetingData(response);
        setLoading(false);
      })
      .catch((err) => console.log("Erros is ", err.message));
  }, []);

  return (
    <>
      {!loading ? (
        <Meeting meetingData={meetingData} />
      ) : (
        <div className="p-3 animate-pulse">Fetching meeting details...</div>
      )}
    </>
  );
};

export default meeting;
