'use client';

import Image from 'next/image';
import { Card } from '../ui/card';
import { Circle, CircleDashed } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const useTimer = (totalSeconds: number) => {
  const queryClient = useQueryClient();

  return useQuery<number, Error>({
    queryKey: ['timer', totalSeconds],
    queryFn: () =>
      new Promise<number>((resolve) => {
        let elapsed = 0;
        const interval = setInterval(() => {
          elapsed += 1;
          queryClient.setQueryData(['timer', totalSeconds], elapsed);

          if (elapsed >= totalSeconds) {
            clearInterval(interval);
            resolve(totalSeconds);
          }
        }, 1000);
      }),
    refetchInterval: 1000,
    initialData: 0,
  });
};

const formattedTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default function Disk() {
  const totalDuration = 267;
  const { data: currentSeconds = 0 } = useTimer(totalDuration);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const diskItem = [
    {
      autor: 'PARTYNEXTDOOR',
      title: 'News',
      img: '/vaunblu/partymobile.webp',
    },
  ];

  return (
    <>
      {diskItem.map((disk, index) => (
        <Card
          key={index}
          className="px-16 py-24 rounded-[2.5rem] relative overflow-hidden bg-gradient-to-b from-neutral-100/10 via-neutral-300/10 to-neutral-500/10"
        >
          <div>
            <Image
              src={disk.img}
              width={100}
              height={100}
              alt=""
              className={
                isFullScreen
                  ? 'absolute animate-albumCover'
                  : 'animate-albumCoverReverse w-60 absolute -top-28 left-[0.95rem] rounded-full border-[0.5px] border-neutral-400'
              }
              onClick={toggleFullScreen}
            />
            <div className="absolute -top-4 left-[43%]">
              <Circle className="text-white stroke-[0.5] bg-neutral-300 rounded-full size-11 relative z-40" />
              <Circle className="absolute size-16 -top-2.5 -left-2.5 bg-neutral-400 stroke-[0.5] text-neutral-400 rounded-full border-[0.8px] border-white z-30" />
              <CircleDashed className="absolute size-[4.9rem] -top-[1.1rem] -left-[1.1rem] stroke-[0.5] text-neutral-200/40  animate-spin-slow" />
            </div>
            <div className="flex flex-col items-center justify-end h-full gap-3 translate-y-14 ">
              <p className="text-neutral-300 text-sm">{disk.autor}</p>
              <p className="text-sm">{disk.title}</p>
              <Progress
                value={(currentSeconds / totalDuration) * 100}
                className="w-10 h-0.5"
              />
              <p>
                {formattedTime(currentSeconds)}{' '}
                <span className="text-neutral-400"> / 4:27</span>
              </p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}
