'use client'
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext, useState } from 'react';

const TodaysPlan = () => {
 const [active, setActive] = useState("saved");

    const { addTodayex } = useContext(ExerciseContext)
    return (
        <div>
            <div className="flex bg-base-200 p-1 rounded-2xl w-fit">
                <button
                    onClick={() => setActive("plan")}
                    className={`px-6 py-3 rounded-xl ${active === "plan"
                            ? "bg-base-100"
                            : "text-gray-400"
                        }`}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => setActive("saved")}
                    className={`px-6 py-3 rounded-xl ${active === "saved"
                            ? "bg-base-100"
                            : "text-gray-400"
                        }`}
                >
                    Saved
                </button>
            </div>

            {active === "plan" && <div>Plan content</div>}
            {active === "saved" && <div>Saved content</div>}
        </div>
    );
};

export default TodaysPlan;