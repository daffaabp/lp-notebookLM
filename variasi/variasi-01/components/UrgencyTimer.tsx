import React, { useState, useEffect } from 'react';

interface UrgencyTimerProps {
  variant?: 'on-white' | 'on-dark';
  label?: string;
}

const UrgencyTimer: React.FC<UrgencyTimerProps> = ({ 
  variant = 'on-white',
  label = 'Diskon Berakhir Dalam:'
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const textColor = variant === 'on-white' ? 'text-red-600' : 'text-white';
  const bgColor = variant === 'on-white' ? 'bg-white' : 'bg-red-600';
  const borderColor = variant === 'on-white' ? 'border-red-200' : 'border-red-500';

  return (
    <div className={`text-center ${textColor}`}>
      <p className="text-xs font-semibold mb-2">{label}</p>
      <div className="flex justify-center gap-2">
        <div className={`${bgColor} ${borderColor} border-2 rounded-lg px-3 py-2 min-w-[50px]`}>
          <div className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-xs opacity-70">Jam</div>
        </div>
        <div className="text-lg font-bold self-center">:</div>
        <div className={`${bgColor} ${borderColor} border-2 rounded-lg px-3 py-2 min-w-[50px]`}>
          <div className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-xs opacity-70">Menit</div>
        </div>
        <div className="text-lg font-bold self-center">:</div>
        <div className={`${bgColor} ${borderColor} border-2 rounded-lg px-3 py-2 min-w-[50px]`}>
          <div className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-xs opacity-70">Detik</div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyTimer;

