// import React, { useRef, useEffect, ReactNode } from 'react';
// import confetti from 'canvas-confetti';

// type ConfettiProps = {
//   particleCount?: number;
//   spread?: number;
//   origin?: { x?: number; y?: number };
//   autoStart?: boolean;
//   children: ReactNode;
// };

// const Confetti: React.FC<ConfettiProps> = ({
//   particleCount = 100,
//   spread = 90,
//   origin = { y: 1 },
//   autoStart = true,
//   children
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const confettiInstance = useRef<any>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (canvas) {
//       confettiInstance.current = confetti.create(canvas, {
//         resize: true,
//         useWorker: true,
//       });

//       if (autoStart) {
//         fireConfetti();
//       }
//     }
//   }, [autoStart]);

//   const fireConfetti = () => {
//     if (confettiInstance.current) {
//       confettiInstance.current({
//         particleCount,
//         spread,
//         origin,
//       });
//     }
//   };

//   return (
//     <canvas ref={canvasRef} className='w-full h-full'>
//         {children}
//     </canvas>
//   )
// };

// export default Confetti;



import React, { useRef, useEffect, ReactNode } from 'react';
import confetti from 'canvas-confetti';

type ConfettiProps = {
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
  autoStart?: boolean;
  children: ReactNode;
};

const Confetti: React.FC<ConfettiProps> = ({
  particleCount = 300,
  spread = 90,
  origin = { y: 0.85 },
  autoStart = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiInstance = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      confettiInstance.current = confetti.create(canvas, {
        resize: true,
        useWorker: true,
      });

      if (autoStart) {
        fireConfetti();
      }
    }
  }, [autoStart]);

  const fireConfetti = () => {
    if (confettiInstance.current) {
      confettiInstance.current({
        particleCount,
        spread,
        origin,
      });
    }
  };

  return (
    <div className="relative w-full h-full">
        <canvas ref={canvasRef} className='absolute w-full h-full'/>
        <div>
         {children}
        </div>
    </div>
  );
};

export default Confetti;

