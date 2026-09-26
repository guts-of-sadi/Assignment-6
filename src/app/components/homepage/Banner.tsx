import Image from "next/image";
import banner from "@/assets/banner.png"
const Banner = () => {
    return (
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-12 items-center bg-[#15171D] p-10 rounded-xl">
            <div className="text-center md:text-left lg:text-left">
                <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
                <h1 className="text-white text-[60px] font-bold">TRAIN WITH INTENT.LOG<br />
                    EVERY SET.</h1>
                <p className="text-[#9CA3AF] mb-5">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br />
                    into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <a href="#library"
                    className="inline-block rounded-xl bg-[#C2F800] p-3 text-black font-semibold">BROWSE WORKOUTS</a>
            </div>
            <div className="flex items-center justify-end space-y-4">
                <Image src={banner} alt="Banner image" className="hidden md:block lg:block"></Image>
            </div>
        </div>
    );
};

export default Banner;