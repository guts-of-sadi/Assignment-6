import { Icards } from "@/app/type";
import Cardsdesign from "./Cardsdesign";


const getAllexercise = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json();
    return data;
}


const ExerciseCards = async () => {
    const data = await getAllexercise();
    return (

        <div className="container mx-auto">
            <div className="my-10">
                <h1 className="font-bold text-[40px] text-white">THE LIBRARY</h1>
                <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    data.map((exercise: Icards, ind: number) => {
                        return (
                            <Cardsdesign key={ind} exercise={exercise}></Cardsdesign>
                        )


                    })
                }
            </div>
        </div>
    );
};

export default ExerciseCards;