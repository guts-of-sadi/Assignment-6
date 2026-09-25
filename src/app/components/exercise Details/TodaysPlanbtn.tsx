'use client'
import { Icards } from '@/app/type';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';

interface Iexercise {
    exercise: Icards
}

const TodaysPlanbtn = ({ exercise }: Iexercise) => {

    const {addTodayex,setTodayex} = useContext(ExerciseContext)
   

    const handleplan = () => {
        console.log("Today's plan",exercise);
        setTodayex([...addTodayex,exercise])
    }

    return <button className="btn" onClick={() => handleplan()}>Add to today's plan</button>
};

export default TodaysPlanbtn;