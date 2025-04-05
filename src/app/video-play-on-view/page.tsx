'use client';

import { dummyData } from '@/dummy-data';
import { useEffect, useRef } from 'react';

const page = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      observer.disconnect()
    };
  }, []);

  return (
    <>
      <ul className="flex flex-col gap-5">
      {dummyData.map((data, i) => (
        <li key={i} className="flex flex-col gap-2 justify-start items-start bg-secondary rounded-lg p-5">
          <span>{data.name}</span> 
          <span>{data.lastName}</span> 
        </li>
      ))}
      </ul>
      <video ref={videoRef} src={'/tiktokVideo.mp4'} controls />
    </>
  );
};

export default page;
