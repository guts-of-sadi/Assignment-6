import Savedbtn from "@/app/components/exercise Details/saved";
import TodaysPlanbtn from "@/app/components/exercise Details/TodaysPlanbtn";
import { Icards } from "@/app/type";
import Image from "next/image";



interface IExcerciseDetails {
    params: Promise<{
        id: string
    }>
}

const getSingleexercise = async (id: string) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const data = await res.json();
    return data;
}



const ExcerciseDetails = async ({ params }: IExcerciseDetails) => {
    const { id } = await params
    const exercise: Icards = await getSingleexercise(id)
    if (!exercise || !exercise.name) {
        return <div className="container mx-auto p-8 text-white">Exercise not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 mt-8 gap-10 lg:gap-12">
            <div className="relative h-80 lg:h-auto w-full lg:w-auto">
                <Image src={exercise.image} alt={exercise.name} fill  sizes="(max-width: 1024px) 100vw, 800px" priority className="object-cover rounded-2xl"></Image>
            </div>


            <div>
                <h1 className="font-bold text-white text-[36px] mb-4">{exercise.name}</h1>
                <p className="text-[#9CA3AF] mb-4">{exercise.description}</p>

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

                <div className="overflow-hidden rounded-3xl border border-gray-700 bg-[#151922]">

                    <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">
                        <span className="font-semibold tracking-wider text-gray-400">
                            EQUIPMENT
                        </span>

                        <span className="text-lg text-gray-100">
                            {exercise.equipment}
                        </span>
                    </div>


                    <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">
                        <span className="font-semibold tracking-wider text-gray-400">
                            DIFFICULTY
                        </span>

                        <span className="text-lg text-gray-100">
                            {exercise.difficulty}
                        </span>
                    </div>


                    <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">
                        <span className="font-semibold tracking-wider text-gray-400">
                            SETS
                        </span>

                        <span className="text-lg text-gray-100">
                            {exercise.sets}
                        </span>
                    </div>


                    <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">
                        <span className="font-semibold tracking-wider text-gray-400">
                            REPS
                        </span>

                        <span className="text-lg text-gray-100">
                            {exercise.reps}
                        </span>
                    </div>


                    <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">
                        <span className="font-semibold tracking-wider text-gray-400">
                            DURATION
                        </span>

                        <span className="text-lg text-gray-100">
                            {exercise.duration}
                        </span>
                    </div>


                    <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">
                        <span className="font-semibold tracking-wider text-gray-400">
                            CALORIES
                        </span>

                        <span className="text-lg text-gray-100">
                            {exercise.caloriesBurned}
                        </span>
                    </div>


                    <div className="flex items-center justify-between px-8 py-6">
                        <span className="font-semibold tracking-wider text-gray-400">
                            RATING
                        </span>

                        <span className="text-lg text-gray-100">
                            {exercise.rating}
                        </span>
                    </div>
                </div>

                <div className="mt-6 p-6">
                    <h3 className="mb-4 text-lg font-bold text-white uppercase">Instructions</h3>
                    <ol className="space-y-3">
                        {
                            exercise.instructions.map((step, index) => (
                                <li key={index} className="flex gap-3 text-sm text-gray-400">
                                    <span className="shrink-0">{index + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))
                        }
                    </ol>
                </div>
                <TodaysPlanbtn exercise={exercise} />
                <Savedbtn exercise={exercise} />
            </div>
        </div>
    );
};

export default ExcerciseDetails;