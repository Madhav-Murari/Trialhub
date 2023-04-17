import React, { useState } from "react";
import{AiOutlineCheckCircle,AiFillHome} from "react-icons/ai"

function Rating() {
   
    const [data,setData] = useState(0)
    
    return(
        <span className="grid h-screen mx-8 mb-0 place-content-center bg-[#E3D5CA] ">
           <span className="flex flex-row px-12">
        <AiOutlineCheckCircle className="text-2xl bg-green-300 "/><input className={data>50?'heigh':'less'} type="range" min="0" max="100" step="10" value={data} onChange = { e => setData(Number(e.target.value)) } /><AiOutlineCheckCircle className="text-2xl bg-green-300"/>
            </span>

        <span className="mx-3 mt-0"><span className="pr-6">Personal info.</span><span className="pl-8">Documents</span></span>
        <div>All Documents <span className="font-bold text-green-900 ">Successfully</span> Uploaded.</div>
        <button className="flex justify-center px-10 py-4 mx-10 my-6 text-white bg-black rounded-3xl"><AiFillHome className="mr-2 text-2xl "/>    Go to Home </button>
        </span>
        
    );
}
export default Rating;