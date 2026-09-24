'use client'

import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {


    const pathname = usePathname();
    const links =
        <>
            <li><Link className={pathname === '/' ? 'text-[#C2F800] bg-[#1A2312] px-2 py-1 rounded-2xl' : ''} href="/">Workout</Link></li>
            <li><Link className={pathname === '/Todaysplan' ? 'text-[#C2F800] bg-[#1A2312] px-2 py-1 rounded-2xl' : ''} href="/Todaysplan">My plan</Link></li>
        </>



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
                <div className='text-white'>
                    <button className='mr-5'>Plan</button>
                    <button>Saved</button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;