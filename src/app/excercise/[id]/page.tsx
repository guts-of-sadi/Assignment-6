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

    return (
        <div className="container mx-auto grid grid-cols-2">
            <div className="relative h-200 w-130">
                <Image src={exercise.image} alt={exercise.name} fill sizes="800px" loading="eager" className="object-cover"></Image>
            </div>
            <div>
                <h1>{exercise.name}</h1>
                <p>{exercise.description}</p>
                <p>{exercise.muscleGroups}</p>



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
                <TodaysPlanbtn exercise={exercise}/>
                <Savedbtn exercise={exercise}/>
            </div>
        </div>
    );
};

export default ExcerciseDetails;