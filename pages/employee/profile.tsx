import React, { useState, useEffect } from "react";
import Profile from "../../src/components/Manager/Profile";

interface UserDetails {
  phone_number: string;
  email: string;
  name: string;
  profilePic: string;
  dateOfBirth: string;
  role: string;
  skills: string[];
  addressDetails: {
    addressLine1: string;
    townORcity: string;
    pinCode: string;
    state: string;
    country: string;
  };
}

interface ProfilePageProps {
  clientId: string;
  userId: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { clientId, userId } = props;
  const apiurl = `https://trialhub-backend.onrender.com/api/v1/${clientId}/user/${userId}`;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(apiurl);
        if (response.ok) {
          const data: UserDetails = await response.json();
          setUserDetails(data);
        } else {
          console.error("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchUserDetails();
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
