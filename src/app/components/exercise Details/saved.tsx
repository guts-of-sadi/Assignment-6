'use client'
import { Icards } from '@/app/type';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';

interface Iexercise {
    exercise: Icards
}

const Savedbtn = ({ exercise }: Iexercise) => {

    const { saved, setSaved} = useContext(ExerciseContext)
   

    const handleplan = () => {
        console.log('saved',exercise);
        setSaved([...saved,exercise])
    }

    return <button className="btn" onClick={()=>handleplan()}>Save for later</button>
};

export default Savedbtn;