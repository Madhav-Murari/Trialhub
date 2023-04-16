import React from "react";

function Trail3(){
    return(
        <>
        <div className="flex h-screen w-screen justtify-between bg-[#E3D5CA] ">
        <div className= "w-1/5 bg-[#0B0808CF]">
            <div className="h-1/2 bg-[#0B0808CF] flex flex-col justify-around items-center">
            <button className="w-4/5 py-2 text-center text-white bg-[#5983D3]">LEAVE</button>
            <button className="w-4/5 py-2 text-center text-white">Balance</button>
            <button className="w-4/5 py-2 text-center text-white">Apply</button>
            <button className="w-4/5 py-2 text-center text-white">Manage</button>
            <button className="w-4/5 py-2 text-center text-white">Status</button>
            </div>
            <div className="h-1/2  bg-[#0B0808CF]">
            </div>
        </div>
        <div className="w-4/5">
            <div className="h-1/4">
                <div className="pl-4 font-bold lg:py-8 md:py-6 sm:py-4 lg:text-4xl md:text-3xl sm:text-xl h-1/2 bold justify-left">YOU HAVE 3 LEAVES LEFT THIS MONTHS</div>
                <div className="flex flex-col pl-1 lg:pl-4 md:pl-2 md:pt-8 sm:pt-4 lg:text-3xl md:text-2xl sm:flex-row sm:text-xl h-1/2 ">
                    <button className="font-bold lg:pr-20 md:pr-8 sm:pr-6">Apply for Leaves</button>
                    <button className="font-bold lg:pr-20 md:pr-8 sm:pr-6">Manage Leaves</button>
                    <button className="font-bold">View Status </button>
                    <div><hr/></div>
                </div>
            </div>
            <div className="py-2 m-1 bg-white sm:px-6 h-5/7">        
                <div className="py-1 text-2xl">Designation</div>
                    <input type="text"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                <div className="w-full">
                   <div className="flex flex-col py-2 md:flex-row">
                       <div className="pt-3 md:pt-10 md:w-1/2">
                       <button className="lg:px-8 sm:px-2 py-3 w-1/2 md:w-1/3 text-white bg-[#5983D3]">FULL DAY</button>
                       <button className="lg:px-8 sm:px-2 py-3 w-1/2 md:w-1/3 text-black bg-[#DAE8E5]">HALF DAY</button>
                        </div> 
                       <div className="md:w-1/2">
                                    <div className="py-1 lg:text-2xl sm:text-xl ">No. of Days Leave required</div>
                                    <input type="text"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                       </div>
                    </div>

                    <div className="flex py-2 ">
                       <div className="w-1/2 mx-1">
                                    <div className="py-1 text-2xl">Start Date</div>
                                    <input type="date"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                        </div> 
                       <div className="w-1/2">
                                    <div className="py-1 text-2xl">End date</div>
                                    <input type="date"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                       </div>
                    </div>
                    <div className="py-1 text-2xl">Reason for leave</div>
                    <input type="text"className="w-full py-2 bg-[#DAE8E5] h-36" ></input> 
                    <div className="flex justify-center py-2 sm:justify-end">
                    <button className="px-10 py-3 text-black bg-white rounded">Reset</button>
                    <button className="px-10 py-3 text-white bg-black rounded">Apply</button>
                    </div>
                </div>     
         </div>
        </div>
    </div>
        </>
    )
   

}
export default Trail3;