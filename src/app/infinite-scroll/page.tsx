"use client";

import { TITLE_CLASSES } from "@/constants";
import { useEffect, useRef, useState } from "react";

interface Person {
    name: string;
    lastName: string;
    id: number;
}

const page = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef<HTMLDivElement>(null);
  
    // Generar datos de prueba
    const generateMorePeople = (startIndex: number, count: number): Person[] => {
      return Array.from({ length: count }, (_, i) => {
        return {
            id: startIndex + i,
            name: `Person ${startIndex + i}`,
            lastName: `Lastname ${startIndex + i}`,
        }
      });
    };
  
    const loadMore = () => {
      if (loading) return;
      
      setLoading(true);
      // Simular una llamada a un API
      setTimeout(() => {
        const newPeople = generateMorePeople(people.length + 1, 10);
        setPeople(prev => [...prev, ...newPeople]);
        setLoading(false);
      }, 500);
    };
  
    useEffect(() => {
      // Carga inicial
      loadMore();
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
  
      if (loaderRef.current) {
        observer.observe(loaderRef.current);
      }
  
      return () => observer.disconnect();
    }, [people]);
  
    return (
      <>
        <ul className="flex flex-col gap-5">
          {people.map(person => (
            <li key={person.id} className="flex flex-col gap-2 justify-start items-start bg-secondary rounded-lg p-5">
              <span>{person.name}</span> 
              <span>{person.lastName}</span> 
            </li>
          ))}
        </ul>
        <div ref={loaderRef} className="p-[20px] text-center">
          {loading ? 'Loading more...' : ''}
        </div>
      </>
    );
}

export default page;