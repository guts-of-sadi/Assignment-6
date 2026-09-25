'use client'
import { Icards } from '@/app/type';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { toast } from 'react-toastify';

interface Iexercise {
    exercise: Icards
}

const Savedbtn = ({ exercise }: Iexercise) => {

    const { saved, setSaved} = useContext(ExerciseContext)
   

    const handleplan = () => {
        setSaved([...saved,exercise])
          toast.success("Added to Saved", {
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

    return <button className="btn  rounded-xl" onClick={()=>handleplan()}><CiBookmark />Save for later</button>
};

export default Savedbtn;