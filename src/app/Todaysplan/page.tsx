'use client'
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext, useState } from 'react';
import { Icards } from '../type';
import PlanCard from '../components/shared/PlanCard';
import SaveCard from '../components/shared/SaveCard';
import Link from 'next/link';

const TodaysPlan = () => {



    const { addTodayex, saved } = useContext(ExerciseContext)

    const [sortby, setSortby] = useState<"rating" | "duration" | "calories">("rating")

    const sortedPlan = (exercises: Icards[]) => {
        const sortTplan =    [...exercises]

    if (sortby === "rating") {
      sortTplan.sort((a, b) => b.rating - a.rating);
    } else if (sortby === "duration") {
      sortTplan.sort((a, b) => b.duration - a.duration);
    } else if (sortby === "calories") {
      sortTplan.sort((a, b) => b.duration - a.duration);
    }

     return sortTplan;
 };

    const sortedTodaysplan = sortedPlan(addTodayex);
    const sortedSaved = sortedPlan(saved);


    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    const displayedExercises =
        activeTab === 'today' ? addTodayex : saved;

    const totalExercise = displayedExercises.length;


    const totalMinutes = displayedExercises.reduce(
        (total, exercise) => total + exercise.duration,
        0
    );

    const totalCalories = displayedExercises.reduce(
        (total, exercise) => total + exercise.caloriesBurned,
        0
    );

    return (

        <div className='container mx-auto'>


            <div className='mb-4 text-center lg:text-left'>
                <h1 className='font-bold text-white text-[50px]'>My Plan</h1>
                <p className='text-[20px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
                <div className='flex justify-between items-center border border-gray-900 rounded-xl  mt-5 p-10'>
                    <div>
                        <p className='text-white'>Excercises</p>
                        <p className='font-bold text-center text-[45px] text-[#CCFF00]'>{totalExercise}</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <p className='text-white'>Minutes</p>
                        <p className='font-bold text-white text-center text-[45px]' >{totalMinutes}</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <p className='text-white'>Calories</p>
                        <p className='font-bold text-white text-center text-[45px]'>{totalCalories}</p>
                    </div>
                </div>
            </div>






            <div className="tabs tabs-lift mb-5 pb-5">



                <input type="radio" name="my_tabs_3" className="tab text-white font-bold" aria-label="Today's Plan"
                    checked={activeTab === 'today'}
                    onChange={() => setActiveTab('today')}
                />
                <div className="tab-content bg-black border-base-300 p-6">
                    {
                        sortedTodaysplan.length === 0 ? (
                            <div className="py-14 text-center">
                                <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>
                                <p className="mt-2 text-gray-400">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link href='/'>
                                    <button
                                        className='btn rounded-2xl bg-[#C2F10D] text-black'>
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        ) :


                            (
                                sortedTodaysplan.map((Todayex: Icards) => {
                                    return (
                                        <PlanCard key={Todayex.id} Todayex={Todayex} />
                                    )
                                })
                            )
                    }

                </div>


                <input type="radio" name="my_tabs_3" className="tab font-bold" aria-label="Saved Excersice"
                    checked={activeTab === 'saved'}
                    onChange={() => setActiveTab('saved')}
                />
                <div className="tab-content bg-black border-base-300 p-6">

                    {
                        sortedSaved.length === 0 ? (
                            <div className="py-14 text-center">
                                <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>
                                <p className="mt-2 text-gray-400">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link href='/'>
                                    <button
                                        className='btn rounded-2xl bg-[#C2F10D] text-black'>
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        ) :
                            (
                                sortedSaved.map((save: Icards) => {
                                    return (
                                        <SaveCard key={save.id} save={save} />
                                    )
                                })
                            )
                    }



                </div>

                <div className='ml-20 flex  items-end lg:items-center  gap-4'>
                    <span className='text-[#8A92A0] text-[18px] text-center'>Sort</span>
                    <select
                        defaultValue={"duration"}
                        onChange={(e) => setSortby(e.target.value as "rating" | "duration" | "calories")}
                        className="select select-neutral  rounded-xl">
                        <option disabled={true}>Sort by</option>
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating</option>
                    </select>
                </div>


            </div>


        </div>
    );
};

export default TodaysPlan;