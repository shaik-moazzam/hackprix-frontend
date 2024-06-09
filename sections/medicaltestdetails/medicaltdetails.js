"use client"
import getTestById from '@/api/gettestbyid';
import Padding from '@/components/padding'
import formatDateAndTime from '@/utils/formatDateAndTime';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
const Medicaltdetails = () => {
  const params = useSearchParams()
  const id = params.get('id')
  const [data, setdata] = useState()
  useEffect(() => {
    const getdata = async () => {
      const d = await getTestById(id)
      setdata(d)
      console.log(d)
    }
    getdata()
  }, [])
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
            <div className=' font-circular font-medium text-[1.1rem] pb-[1rem]'>Laboratory Results:</div>
            <div className=' w-full bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]'>
              <div className=' font-circular font-medium text-[1rem] pb-[1rem]'>{data?.title}:</div>
              <div className=' grid grid-cols-2 gap-[2rem]'>
                <div>
                  <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Test name</div>
                  <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{data?.biologicalname}</div>
                </div>
                <div>
                  <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Test Time</div>
                  <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{formatDateAndTime(data?.date).localTime}</div>
                </div>
                <div>
                  <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Test Date</div>
                  <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{formatDateAndTime(data?.date).date}</div>
                </div>
                <div>
                  <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Price</div>
                  <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'> &#x20B9; {data.price}</div>
                </div>
                <div>
                  <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>Description</div>
                  <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{data.description}</div>
                </div>
              </div>
            </div>
          </Padding>
          {data.parameters.map((sub) => (


            <Padding>
              <div className='w-full bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]'>
                <div className=' font-circular font-medium text-[1.1rem] pb-[1rem]'>{sub.title}</div>
                <div className=' grid grid-cols-2 gap-[2rem]'>
                  {sub.subParameters.map((si) => (

                    <div>
                      <div className=' text-[#7A7D7F] font-circular text-[0.9rem] font-medium'>{si.title}</div>
                      <div className=' text-[#2F3133] font-circular text-[1rem] font-medium'>{si?.description}</div>
                    </div>
                  )

                  )}

                </div>

              </div>
            </Padding>
          ))}
        </div>
      </Padding>
    </div>
  )
}
export default Medicaltdetails  