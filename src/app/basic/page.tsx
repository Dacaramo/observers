'use client';

import { BUTTON_CLASSES } from '@/constants';
import { useEffect, useRef, useState } from 'react';

const page = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(([mutation]) => {
      if (mutation.attributeName === 'disabled') {
        console.log(
          "Cambio detectado en el atributo 'disabled':",
          (mutation.target as HTMLButtonElement).disabled
        );
      }
    });

    if (ref.current) {
      observer.observe(ref.current, { attributes: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleButtonState = () => {
    setIsDisabled((prevState) => !prevState);
    setToggleDisabled((prevState) => !prevState);
  };

  return (
    <div className='flex flex-row gap-2 justify-center items-center'>
      <button
        ref={ref}
        disabled={isDisabled}
        className={`${BUTTON_CLASSES}`}
      >
        {isDisabled ? 'Deshabilitado' : 'Habilitado'}
      </button>
      <button
        className={`${BUTTON_CLASSES}`}
        onClick={toggleButtonState}
      >
        {toggleDisabled
          ? 'Habilitar el primer botón'
          : 'Deshabilitar el primer botón'}
      </button>
    </div>
  );
};

export default page;
