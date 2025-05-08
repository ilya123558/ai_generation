'use client'
import { useAppSelector } from '@/views/store';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressProfileLoader = () => {
  const router = useRouter();
  const { user } = useAppSelector(state => state.main);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getSpeed = (value: number) => {
      if (value < 34) return 30;       // медленно
      if (value < 58) return 10;       // быстро
      if (value < 94) return 25;       // медленно
      return 50;                       // финальное замедление
    };

    const tick = () => {
      progressRef.current += 1;
      setProgress(progressRef.current);

      if (progressRef.current >= 100 && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        if(user?.role === 'new') {
          router.push('/profile-create-loading')
          return
        }

        router.push('/home')
      } else {
        const newSpeed = getSpeed(progressRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(tick, newSpeed);
      }
    };

    intervalRef.current = setInterval(tick, getSpeed(0));

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-white z-50">
      <div style={{ width: 130, height: 130 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth={6}
          styles={buildStyles({
            textSize: '30px',
            pathColor: '#23262F',
            textColor: '#23262F',
            trailColor: '#DCDDDF',
          })}
        />
      </div>
    </div>
  );
};

