'use client'

import { useEffect, useRef, useState } from "react";

const page = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [emoji, setEmoji] = useState('😐');

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setEmoji(width > 750 ? '😄' : width > 300 ? '😐' : '🥵');
    });
    
    if (boxRef.current) observer.observe(boxRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className="
        resize-x overflow-auto
        w-[500px] min-w-[200px] max-w-[800px] h-[200px]
        border-2 border-gray-300 rounded-lg
        flex items-center justify-center
        text-8xl select-none
      "
      style={{
        backgroundColor: 'white'
      }}
    >
      {emoji}
    </div>
  );
}

export default page;