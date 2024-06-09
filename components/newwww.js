"use client"
import bookSlot from '@/api/bookSlot'
import React, { useState } from 'react'
import { useToast } from './ui/use-toast'
import Button from './button'
import clsx from 'clsx'

const Newwww = ({ scheduleData, }) => {
    const [bookload, setbookload] = useState(false)
    const { toast } = useToast()
    const slotBooked = async (scheduleData) => {
        setbookload(true)
        const data = await bookSlot(scheduleData?.slotId, scheduleData?.date);
        console.log(data, "read");
        if (data.error) {
            toast({ title: "Something went wrong " });
        }
        else {
            toast({ title: "Slot have been booked " });
            window.location.reload();
        }
        setbookload(false)
    }
    return (
        <div onClick={() => slotBooked(scheduleData)} className={clsx(' w-[100%] h-[100%] flex justify-center items-center ', !scheduleData?.busy ? "" : "hidden")}>
            <Button wfull={" w-[120px]"} text={bookload ? <div className='loader1' /> : "Book now"} className={" border-[1px] border-[#000]"} />
        </div>
    )
}

export default Newwww
