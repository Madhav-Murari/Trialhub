import React, { useState, useEffect } from "react";
import Profile from "../../src/components/Manager/Profile";
import { useRouter } from "next/router";
import axios from "axios";

interface UserDetails {
  coverage: {
    working_hours: {
      [key: string]: any[];
    };
    alternate_working_days: any[];
    partial_working_hours: any[];
    holidays: any[];
  };
  paidHolidayRemaining: string;
  password: string;
  skills: any[];
  language: any[];
  _id: string;
  email: string;
  phone_number: string;
  name: string;
  clientId: string;
  profilePic: string
  dateOfBirth: string;
  role: string;
  parent: string;
}

interface AuthData {
  clientId: string;
  userId: string;
}

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const router = useRouter();
  const { employeeId } = router.query;

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }

    try {
      const authData: AuthData = JSON.parse(userDataString);
      const clientId = authData.clientId;
      axios
        .get(
          `https://trialhub-backend.onrender.com/api/v1/${clientId}/user/${employeeId}`
        )
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      {userDetails ? (
        <Profile userDetails={userDetails} />
      ) : (
        <p>Loading user details...</p>
      )}
    </>
  );
};

export default ProfilePage;
