'use client';

import { dummyData } from "@/dummy-data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const page = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const [footerHeight, setFooterHeight] = useState(0);
  
    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        const height = entries[0].contentRect.height;
        setFooterHeight(height);
      });
      
      if (footerRef.current) {
        observer.observe(footerRef.current)
      };

      return () => observer.disconnect();
    }, []);
  
    return (
      <>
        <ul className="flex flex-col gap-5" style={{ marginBottom: `${footerHeight}px` }}>
          {dummyData.map((data, i) => (
            <li key={i} className="flex flex-col gap-2 justify-start items-start bg-secondary rounded-lg p-5">
              <span>{data.name}</span> 
              <span>{data.lastName}</span> 
            </li>
          ))}
        </ul>
        <div
          ref={footerRef}
          className="fixed bottom-0 left-0 w-full bg-white shadow-lg transition-all duration-300"
        >
          <div className="flex flex-row flex-wrap justify-center gap-4 p-4 bg-accent">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className="flex items-center justify-center px-4 py-2 bg-primary whitespace-nowrap"
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default page;