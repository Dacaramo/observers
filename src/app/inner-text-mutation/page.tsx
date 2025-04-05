'use client'

import { useEffect, useRef } from "react";

const page = () => {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      if (!textRef.current) return;
  
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          if (mutation.type === 'characterData') {
            console.log('Texto cambiado:', textRef.current?.textContent);
          }
        });
      });
  
      observer.observe(textRef.current, {
        characterData: true,
        subtree: true
      });
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <div>
        <p ref={textRef} contentEditable>
          Edita este texto (clickea y escribe)
        </p>
      </div>
    );
}

export default page;