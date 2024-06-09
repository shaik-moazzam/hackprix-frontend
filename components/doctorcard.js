import React from 'react'

const Doctorcard = ({ name, qualification, feild, subject, desc }) => {
    return (
        <div className=" border-[1px] border-[#E2E4E8] bg-[#FAFAFC] w-full px-[1.5rem] pt-[1.5rem] pb-[0.1rem] rounded-2xl   ">
            <div className=" flex items-center gap-4">
                <div className="rounded-full min-h-16 min-w-16 px-2 py-2 h-max w-max bg-black text-white text-[1.2rem] 2xl:text-[2rem] font-Matter font-semibold flex justify-center items-center up">
                    {name.split("")[0]}
                </div>
                <div>
                    <div className="text-[#3F3F3F] text-[1rem] font-Matter font-semibold up ">
                        {name}
                    </div>
                    <div className="text-[#7A828A] text-[0.9rem] font-Matter font-normal">
                        {qualification}
                    </div>
                </div>
            </div>
            <div className=" flex flex-wrap gap-2 pt-4 w-full">

                <div

                    className="font-Matter w-max hover:cursor-pointer flex justify-center border-[1px] border-[#edebeb] items-center text-[12px] leading-none rounded-full px-3 h-max pt-2 pb-[0.38rem] text-[#717171] bg-[#FFFFFF]"
                >
                    {feild}
                </div>

            </div>
            <div className=" py-[1rem] text-[#727272]  font-regular  font-Matter text-[0.8rem] leading-6">
                {desc}
            </div>
        </div>
    );
}

export default Doctorcard

