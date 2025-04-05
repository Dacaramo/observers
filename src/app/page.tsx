import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const flexClasses = 'flex flex-row gap-2 flex-wrap'
  return (
    <div className='w-full h-full flex flex-col gap-2 justify-center items-center'>
      <h1>IntersectionObserver</h1>
      <div className={`${flexClasses}`}>
        <Link
          href={'/video-play-on-view'}
          className='btn btn-primary'
        >
          Reanudar video cuando esté siendo visto y pausar si no
        </Link>
        <Link
          href={'/infinite-scroll'}
          className='btn btn-primary'
        >
          Scroll infinito
        </Link>
        <Link
          href={'/scrollspy'}
          className='btn btn-primary'
        >
          Scrollspy
        </Link>
      </div>
      <h1>ResizeObserver</h1>
      <div className={`${flexClasses}`}>
        <Link
          href={'/responsive-margins'}
          className='btn btn-primary'
        >
          Elemento fijo nunca tapa el contenido de la pantalla
        </Link>
        <Link
          href={'/resizable-typography'}
          className='btn btn-primary'
        >
          Fontsize relativo al tamaño del contenedor
        </Link>
        <Link
          href={'/change-appearance-on-resize'}
          className='btn btn-primary'
        >
          Cambiar apariencia dependiendo del tamaño
        </Link>
      </div>
      <h1>MutationObserver</h1>
      <div className={`${flexClasses}`}>
        <Link
          href={'/inner-text-mutation'}
          className='btn btn-primary'
        >
          Detectar cambios en texto interno
        </Link>
        <Link
          href={'/attributes-mutation'}
          className='btn btn-primary'
        >
          Detectar cambios en attributos
        </Link>
        <Link
          href={'/childlist-mutation'}
          className='btn btn-primary'
        >
          Detectar cambios si se añadieron hijos a un contenedor
        </Link>
      </div>
    </div>
  );
}
