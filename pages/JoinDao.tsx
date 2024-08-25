import React, { ReactNode } from 'react';

function JoinDao({ children }: { children: ReactNode }) {

    return (
        <div className="h-full w-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl">
            <div className="z-20 absolute rounded-xl p-5"
                style={{
                    backgroundImage: `linear-gradient(300deg, rgba(88,88,234,0.25) 100%, rgba(130,110,118,0.35) 120%)`
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default JoinDao;
