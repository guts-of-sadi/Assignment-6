'use client'
import { Icards } from '@/app/type';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import { ExerciseContext } from '@/context/ExerciseContext';

interface Ipropsinterface {
    Todayex: Icards;
}


const PlanCard = ({ Todayex }: Ipropsinterface) => {
    const { setTodayex } = useContext(ExerciseContext);
    const [done, setDone] = useState(false)
    const removeExercise = () => {
        setTodayex(items => items.filter(item => item.id !== Todayex.id))
    }

   

    return (

        <div>
          

            <div key={Todayex.id} className='flex justify-between items-center border-2 border-gray-900 rounded-xl mb-4 bg-[#232732]'>
                <div className='flex items-center gap-5'>
                    <div>
                        <Image src={Todayex.image} alt='image' width={150} height={80} className='rounded-xl'></Image>
                    </div>
                    <div>
                        <h2 className='font-bold text-[28px]'>{Todayex.name}</h2>
                        <p className='text-[#8A92A0] mt-1'>{Todayex.equipment}</p>
                        <ul className='flex gap-3 text-[#D1D5DB] mt-1'>
                            <li className='flex items-center'><MdOutlineWatchLater />{Todayex.duration}min</li>
                            <li className='flex items-center'><PiFireSimpleFill />{Todayex.caloriesBurned}Kcal</li>
                            <li className='flex items-center'><FaRegStar />{Todayex.rating}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Link href={`/excercise/${Todayex.id}`}>
                        <button className='btn rounded-2xl mr-2'>View Details</button>
                    </Link>


                    <button
                        onClick={() => setDone(true)}
                        disabled={done}
                        className='btn rounded-2xl mr-2'>
                        {done ? 'Done' : 'Mark As Done'}
                    </button>

                    <button
                        type="button"
                        onClick={removeExercise}
                        className='cursor-pointer px-4'
                    >
                        <RxCross1 />
                    </button>
                </div>

            </div>

        </div>

    );
};

export default PlanCard;