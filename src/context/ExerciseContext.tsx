'use client'

import React, { createContext, ReactNode, useState } from 'react';

export const ExerciseContext = createContext({})

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [addTodayex, setTodayex] = useState([])
    const [saved, setSaved] = useState([])

    const sharedData = {
        addTodayex, setTodayex, saved, setSaved
    };

    return <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>
};

export default ExerciseProvider;