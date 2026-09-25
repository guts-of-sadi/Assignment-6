'use client'
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext, useState } from 'react';
import { Icards } from '../type';
import PlanCard from '../components/shared/PlanCard';
import SaveCard from '../components/shared/SaveCard';
import Link from 'next/link';

const TodaysPlan = () => {



    const { addTodayex, saved } = useContext(ExerciseContext)

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
            <div className='mb-4'>
                <h1 className='font-bold text-[50px]'>My Plan</h1>
                <p className='text-[20px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
                <div className='flex justify-between items-center border border-gray-900 rounded-xl p-4 mt-5'>
                    <div>
                        <p>Excercises</p>
                        <p className='text-center'>{totalExercise}</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <p>Minutes</p>
                        <p>{totalMinutes}</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <p>Calories</p>
                        <p>{totalCalories}</p>
                    </div>
                </div>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab font-bold" aria-label="Today's Plan"
                    checked={activeTab === 'today'}
                    onChange={() => setActiveTab('today')}
                />
                <div className="tab-content bg-black border-base-300 p-6">
                    {
                        addTodayex.length === 0 ? (
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
                                addTodayex.map((Todayex: Icards) => {
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
                        saved.length === 0 ? (
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
                                saved.map((save: Icards) => {
                                    return (
                                        <SaveCard key={save.id} save={save} />
                                    )
                                })
                            )
                    }



                </div>
            </div>

        </div>
    );
};

export default TodaysPlan;