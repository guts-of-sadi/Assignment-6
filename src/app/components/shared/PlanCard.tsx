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
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

interface Ipropsinterface {
    Todayex: Icards;
}


const PlanCard = ({ Todayex }: Ipropsinterface) => {

    const { setTodayex } = useContext(ExerciseContext);

    const [done, setDone] = useState(false)
    
    const removeExercise = () => {
        setTodayex(items => items.filter(item => item.id !== Todayex.id))
        toast.error(`${Todayex.name} is removed!`, {
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

    const markAsDone = () => {
        setDone(true);
        toast.success(`${Todayex.name} marked as done!`, {
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


    return (

        <div>
            <div key={Todayex.id} className=' grid grid-cols-1  lg:flex justify-between items-center border-2 border-gray-800 rounded-xl mb-4 bg-[#15171D]'>
                <div className='flex items-center gap-5'>
                    <div>
                        <Image src={Todayex.image} alt='image' width={150} height={80} className='rounded-xl'></Image>
                    </div>
                    <div>
                        <h2 className='font-bold text-white text-[28px]'>{Todayex.name}</h2>
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
                        <button className='btn rounded-3xl mt-4 mb-2 ml-8 lg:ml-2 mr-2 px-5'>View Details</button>
                    </Link>


                    <button
                        onClick={markAsDone}
                        disabled={done}
                        className='btn rounded-3xl mt-4 mb-2 ml-8 lg:ml-2 mr-2 bg-[#CCFF00] text-black'><TiTick />

                        {done ? 'Done' : 'Mark As Done'}
                    </button>

                    <button
                        type="button"
                        onClick={removeExercise}
                        className='cursor-pointer px-4 mt-4 mb-2'
                    >
                        <RxCross1 />
                    </button>
                </div>

            </div>

        </div>

    );
};

export default PlanCard;