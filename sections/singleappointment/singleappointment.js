import Padding from '@/components/padding'
import React from 'react'

const Singleappointment = () => {
    const appointmentInfo = [
        {
            doctor: "Dr. Basheer Rehman",
            speciality: "Cardiology",
            date: "20 June, 2024"
            , description: "Dr. Basheer Rehman, a renowned Cardiologist, has scheduled an appointment on June 20, 2024, for a comprehensive cardiac examination. During this appointment, Dr. Rehman will conduct a thorough assessment of your heart health, including checking your blood pressure, listening to your heart sounds, and possibly performing an electrocardiogram (ECG) to evaluate your heart's electrical activity."
        }
    ];
    return (
        <div>
            <Padding className={" py-[3rem]"}>
                <div className=' rounded-3xl py-[2rem]  flex flex-col gap-[2rem] bg-[#F7F7F7]'>
                    <Padding>
                        <div className=' font-circular font-medium text-[1.1rem] pb-[1rem]'>Appointment Result:</div>
                        <div className=' w-full bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]'>
                            <div className=' font-circular font-medium text-[1rem] pb-[1rem]'>Appointment Details:</div>
                            <div className=' grid grid-cols-2 gap-[2rem]'>
                                <div>
                                    <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Doctor name</div>
                                    <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{appointmentInfo[0].doctor}</div>
                                </div>
                                <div>
                                    <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Appointment name</div>
                                    <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{appointmentInfo[0].doctor}</div>
                                </div>
                                <div>
                                    <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Doctor Speciality</div>
                                    <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{appointmentInfo[0].speciality}</div>
                                </div>
                                <div>
                                    <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Date</div>
                                    <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{appointmentInfo[0].date}</div>
                                </div>
                            </div>
                        </div>
                    </Padding>
                    <Padding>
                        <div className='w-full bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]'>

                            <div className=' font-circular font-medium text-[1.1rem] pb-[1rem]'>Appointment description:</div>
                            <div className=' text-[#7A7D7F] font-circular w-[80%] text-[0.9rem] font-medium'>{appointmentInfo[0].description}</div>
                        </div>


                    </Padding>
                </div>

            </Padding>
        </div>
    )
}

export default Singleappointment
