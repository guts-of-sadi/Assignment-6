import Image from 'next/image';
import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-black '>

            <div className=' p-4  container mx-auto flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Image src={logo} alt='Fit log logo' width={28} height={28}></Image>
                    <h2 className='text-[18px] font-extrabold text-white'>FITLOG</h2>
                </div>
                <ol className='text-white flex gap-4'>
                    <li>Workouts</li>
                    <li>My Plan</li>
                </ol>
                <div className='text-white'>
                    <button className='mr-5'>Plan</button>
                    <button>saved</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;