'use client'

import { useEffect, useRef, useState } from "react";

const page = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const newFontSize = entry.contentRect.height * 0.1;
      setFontSize(Math.max(16, newFontSize));
    });
    
    if (textareaRef.current) observer.observe(textareaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <textarea
      ref={textareaRef}
      style={{ fontSize: `${fontSize}px` }}
      className="resize-y w-full p-4 border rounded"
      defaultValue="Resize me vertically"
    />
  );
}

export default page;