'use client'

import { useEffect, useRef, useState } from "react";

const page = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [items, setItems] = useState<string[]>(['Item 1']);

  useEffect(() => {
    if (!listRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          console.log('Se añadió:', node.textContent);
        });
      });
    });

    observer.observe(listRef.current, { childList: true });
    return () => observer.disconnect();
  }, []);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <ul ref={listRef}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={addItem}>Añadir Item</button>
    </div>
  );
}

export default page;