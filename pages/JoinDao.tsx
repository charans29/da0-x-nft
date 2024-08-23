import React, { useState, ReactNode } from 'react';

function JoinDao({ children }: { children: ReactNode }) {

    return (
        <div className="h-full w-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl">
            <div className="inset-80 z-20 h-max absolute rounded-xl"
                style={{
                    backgroundImage: `linear-gradient(300deg, rgba(88,88,234,0.5) -50%, rgba(130,110,118,0.35) 120%)`
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default JoinDao;
