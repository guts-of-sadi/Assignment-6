import { Icards } from '@/app/type';
import { ExerciseContext } from '@/context/ExerciseContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface Ipropsave {
    save: Icards
}

const SaveCard = ({ save }: Ipropsave) => {

    const { setSaved } = useContext(ExerciseContext)

    const removeExercise = () => {
        setSaved(items => items.filter(item => item.id !== save.id))
        toast.error(`${save.name} is removed!`, {
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



        <div key={save.id} className='grid grid-cols-1  lg:flex justify-between items-center border-2 border-gray-800 rounded-xl mb-4 bg-[#15171D]'>
            <div className='flex items-center gap-5'>
                <div>
                    <Image src={save.image} alt='image' width={150} height={80} className='rounded-xl'></Image>
                </div>
                <div>
                    <h2 className='font-bold  text-white text-[28px]'>{save.name}</h2>
                    <p className='text-[#8A92A0] mt-1'>{save.equipment}</p>
                    <ul className='flex gap-3 text-[#D1D5DB] mt-1'>
                        <li className='flex items-center'><MdOutlineWatchLater />{save.duration}min</li>
                        <li className='flex items-center'><PiFireSimpleFill />{save.caloriesBurned}Kcal</li>
                        <li className='flex items-center'><FaRegStar />{save.rating}</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center'>
                <Link href={`/excercise/${save.id}`}
                    className='btn rounded-3xl mt-4 mb-2 ml-8 lg:ml-2 mr-2 px-5'>
                    View Details
                </Link>

                <button
                    type="button"
                    onClick={removeExercise}
                    className='cursor-pointer px-4 mt-4 mb-2'
                >
                    <RxCross1 />
                </button>
            </div>
        </div>

        //   bleh
    );
};

export default SaveCard;