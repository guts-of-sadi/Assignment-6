'use client'
import { Icards } from '@/app/type';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { toast } from 'react-toastify';

interface Iexercise {
    exercise: Icards
}

const TodaysPlanbtn = ({ exercise }: Iexercise) => {

    const { addTodayex, setTodayex } = useContext(ExerciseContext)


    const handleplan = () => {
        setTodayex([...addTodayex, exercise])

        toast.success("Added to today's plan", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return <button className="btn bg-[#CCFF00] text-black mr-4 rounded-xl" onClick={() => handleplan()}><LuCalendarPlus2 />Add to today&apos;s plan</button>
};

export default TodaysPlanbtn;