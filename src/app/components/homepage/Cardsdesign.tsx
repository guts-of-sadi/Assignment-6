import { Icards } from '@/app/type';
import Image from 'next/image';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';

export interface dataProps {
    exercise: Icards;
}

const Cardsdesign = ({ exercise }: dataProps) => {
    return (
        <div className='rounded-xl transition duration-300 hover:scale-105 bg-[#20242E]'>
            <div className='relative h-80 w-full overflow-hidden rounded-xl'>
                <Image src={exercise.image} alt='Exercise image' fill className="object-cover"></Image>
            </div>

            <div className='mt-5 p-8'>
                <div className="mb-4 flex flex-wrap gap-2">
                    {
                        exercise.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#baff00] px-4 py-1 text-xs font-bold uppercase tracking-wide text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                </div>

                <h2 className="text-2xl text-white font-extrabold uppercase tracking-wide">
                    {exercise.name}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-gray-400">
                    <span>{exercise.equipment}</span>
                </div>

                <div className="my-5 border-t border-gray-700" />

                <div className="grid grid-cols-3 gap-4">

                    <div className="flex items-center gap-2">

                        <p className="text-sm text-gray-500 font-semibold flex items-center "><MdOutlineWatchLater />    {exercise.duration} min</p>
                    </div>


                    <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-500 font-semibold flex items-center">
                            <PiFireSimpleFill />
                            {exercise.caloriesBurned}
                        </p>
                        <p className="text-xs text-gray-500">Kcal</p>
                    </div>


                    <span className="font-semibold text-gray-500 flex items-center"> <FaRegStar /> {exercise.rating}/ 5.0</span>
                </div>
            </div>
        </div>

    );
};

export default Cardsdesign;