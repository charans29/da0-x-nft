import React, { ReactNode } from 'react';

function JoinDao({ children, blink }: { children: ReactNode, blink:boolean }) {

    return (
        <div className='h-full w-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-transparent'
            style={{
                backgroundImage: blink 
                ? `linear-gradient(19deg, rgba(6,246,136,1) 0%, rgba(69,105,177,1) 52%, rgba(177,0,255,1) 100%)`
                : ``
            }}
        >
            <div className={`z-20 absolute rounded-xl p-5 ${blink ? 'border-[0.25px]' : ''}`}
                style={{
                    backgroundImage: blink 
                    ? `linear-gradient(219deg, rgba(6,246,136,1) 0%, rgba(69,105,177,1) 52%, rgba(177,0,255,1) 100%)`
                    : `linear-gradient(300deg, rgba(88,88,234,0.25) 100%, rgba(130,110,118,0.35) 120%)`
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default JoinDao;
