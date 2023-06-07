import { React, useState, useEffect } from "react";
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

import axios from "axios";

const InformationCard = () => {
  const [user, setUser] = useState(false);
  const [load, setLoad] = useState([]);

  useEffect(() => {
    setLoad(true);
    async function getData() {
      const get = await fetch("https://trialhub-backend.onrender.com/api/v1/:clientId/leave/");
      const res = await get.json();
      setUser(res);
      setLoad(false);
    }
    getData();
  }, []);

  return (
    <>
      {load ? (
        " "
      ) : 
        user.data[0].leave.fullDay.map((element,index)=>{
          return(<div key={index}>
          <div className="grid grid-cols-2  text-center py-4">
          <div className="grid grid-cols-3 text-center py-2">
            <div>{element.from_date}</div>
            <div>{element.to_date}</div>
            <div>{element.type}</div>
          </div>
          <div className="grid grid-cols-3 text-center py-2">
            <div>{element.duration}</div>
            <div className="bg-green-600 rounded w-20 text-white m-auto">
            {element.status}
            </div>
            <div className="flex m-auto">
              <span className="">
                <IoMdCreate />
              </span>
              <span>
                <IoMdTrash />
              </span>
            </div>
          </div>
        </div>
          </div>
          );
        })
        
      }
    </>
  );
};

export default InformationCard;
