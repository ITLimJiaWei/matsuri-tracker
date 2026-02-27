'use client';

import React, { createContext, useContext, useState } from 'react';

interface FilterContextType {
    selectedSeason: string | null;
    setSelectedSeason: (season: string | null) => void;
    selectedType: string | null;
    setSelectedType: (type: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    return (
        <FilterContext.Provider
            value={{
                selectedSeason,
                setSelectedSeason,
                selectedType,
                setSelectedType
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
}
