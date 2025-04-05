'use client'

import { useEffect, useRef, useState } from "react";

const page = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isDisabled, setIsDisabled] = useState(false);
  
    useEffect(() => {
      if (!buttonRef.current) return;
  
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
            console.log('Estado del botón:', buttonRef.current?.disabled);
          }
        });
      });
  
      observer.observe(buttonRef.current, {
        attributes: true,
      });
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <div>
        <button 
          ref={buttonRef}
          disabled={isDisabled}
          onClick={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? 'Deshabilitado' : 'Habilitado'}
        </button>
      </div>
    );
}

export default page;