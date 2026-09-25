'use client'

import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { ExerciseContext } from '@/context/ExerciseContext';
const Navbar = () => {


    const pathname = usePathname();
    const links =
        <>
            <li><Link className={pathname === '/' ? 'text-[#C2F800] bg-[#1A2312] px-2 py-1 rounded-2xl' : ''} href="/">Workout</Link></li>
            <li><Link className={pathname === '/Todaysplan' ? 'text-[#C2F800] bg-[#1A2312] px-2 py-1 rounded-2xl' : ''} href="/Todaysplan">My plan</Link></li>
        </>

    const { addTodayex, saved } = useContext(ExerciseContext);


    return (
        <div className='bg-black '>
            <div className=' p-4  container mx-auto flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Image src={logo} alt='Fit log logo' width={28} height={28}></Image>
                    <h2 className='text-[18px] font-extrabold text-white'>FITLOG</h2>
                </div>
                <ul className='text-white flex gap-4'>

                    {links}
                    {/* <li><Link href="/">Workouts</Link></li>
                    <li>My Plan</li> */}
                </ul>
                <div className='text-white flex items-center gap-6'>
                    <Link href='/Todaysplan' className='flex items-center gap-2'>
                        <span className='text-sm font-medium'>Plan</span>
                        <span className="rounded-full bg-[#C2F800] w-5 h-5 text-black font-bold flex items-center justify-center">{addTodayex.length}</span>
                        {/* <button className=' btn mr-5'>Plan({addTodayex.length})</button> */}
                    </Link>

                    <Link href='/Todaysplan' className='flex items-center gap-2'>
                    <span className='text-sm font-medium'>Saved</span>
                    <span className='border border-gray-200 rounded-full w-5 h-5  text-gray-300 font-bold flex items-center justify-center'>{saved.length}</span>
                        {/* <button className='btn'>Saved({saved.length})</button> */}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Navbar;