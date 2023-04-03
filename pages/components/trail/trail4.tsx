import React from "react";
import{FaCalendarAlt} from "react-icons/fa"

function Trail4(){
    return(
        <>
             <div className="flex h-screen w-screen bg-white sm:bg-[#E3D5CA]">
        <div className="w-1/5 bg-[#0B0808CF] ">
            <div className = "h-1/2 bg-[#0B0808CF] flex flex-col justify-around items-center">
            <button className="w-4/5 text-center py-2 text-white bg-[#5983D3]">LEAVE</button>
            <button className="w-4/5 text-center py-2 text-white">Balance</button>
            <button className="w-4/5 text-center py-2 text-white">Apply</button>
            <button className="w-4/5 text-center py-2 text-white">Manage</button>
            <button className="w-4/5 text-center py-2 text-white">Status</button>
            </div>
            <div className="h-1/2 bg-[#0B0808CF]">
                
            </div>
            {/* </div> */}
        </div>
        <div className="w-4/5">
            <div className="h-1/4">
                {/* <div className="py-8 pl-4 text-4xl h-1/2 bold justify-left"></div> */}
                <div className="flex flex-col px-1 pt-6 text-xl sm:pt-16 sm:flex-row sm:text-2xl lg:text-3xl h-1/2 ">
                    <button className="py-2 font-bold sm:pr-4 lg:pr-20 md:pr-12">Apply for Leaves</button>
                    <button className="py-2 font-bold sm:pr-4 lg:pr-20 md:pr-12">Manage Leaves</button>
                    <button className="py-2 font-bold sm:pr-4 lg:pr-20 md:pr-12">View Status </button>
                    <div><hr/></div>
                </div>
            </div>
            <div className="grid px-2 py-2  pb-10 mx-4 sm:bg-white bg-[#E3D5CA] sm:mx-8 sm:px-10 pb-auto h-5/8">  
            <div className="py-4 text-2xl font-bold text-center sm:py-8 sm:text-4xl md:text-left"> Leaves you applied</div>
           <div  className="flex ">
            <span  className="pr-4 text-xl sm:text-2xl md:text-3xl "><FaCalendarAlt/> </span>
            <span className="text-xl font-bold sm:text-3xl">Tuesday,june 25 to Friday june 28 (3 days)</span>
            </div>
           
            <div className="py-8 pl-12 text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto dolore corporis similique officia enim quo consequuntur cumque quis laboriosam veritatis optio itaque dolorem, exercitationem atque, laborum qui veniam natus.</div>
            <div className="flex flex-col justify-start py-2 md:flex-row">
                    <button className="px-8 py-3 mb-2 text-white bg-black rounded sm:px-16 md:mr-10">Cancel leave</button>
                    <button className="sm:px-16 px-8 py-3 mb-2 text-white bg-[#5983D3] rounded">Reschedule</button>
             </div>  
            </div>     
         </div>
        </div>
    
        </>
    )
   

}
export default Trail4;