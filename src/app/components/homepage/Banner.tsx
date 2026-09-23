import Image from "next/image";
import banner from "@/assets/banner.png"
const Banner = () => {
    return (
        <div className="container mx-auto flex justify-between my-12 items-center bg-[#222630] p-10 rounded-xl">
            <div>
                <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
                <h1 className="text-white text-[60px] font-bold">TRAIN WITH INTENT. LOG<br/>
                    EVERY SET.</h1>
                <p className="text-[#9CA3AF] mb-5">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>
                    into today's plan, and watch the week's work add up.</p>
                    <button className="p-3 rounded-xl bg-[#C2F800] text-black">BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={banner} alt="Banner image"></Image>
            </div>
        </div>
    );
};

export default Banner;