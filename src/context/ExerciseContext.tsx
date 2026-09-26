'use client'

import { Icards } from '@/app/type';
import React, { createContext, ReactNode, useState } from 'react';


interface ExerciseInterface {
  addTodayex: Icards[];
  setTodayex: React.Dispatch<React.SetStateAction<Icards[]>>;
  saved: Icards[];
  setSaved: React.Dispatch<React.SetStateAction<Icards[]>>;
}

export const ExerciseContext = createContext<ExerciseInterface>({} as ExerciseInterface)

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [addTodayex, setTodayex] = useState<Icards[]>([])
    const [saved, setSaved] = useState<Icards[]>([])

    const sharedData = {
        addTodayex, setTodayex, saved, setSaved
    };

    return <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>
};

export default ExerciseProvider;