import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  ...props 
}: OptimizedImageProps) => {
  // Para imagens locais, remove a extensão e deixa o Next.js otimizar
  const optimizedSrc = src.startsWith('/assets/') 
    ? src.replace(/\.(png|jpg|jpeg)$/i, '.avif')
    : src;

  if (fill) {
    return (
      <Image
        src={optimizedSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || '100vw'}
        quality={quality}
        {...props}
      />
    );
  }

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      {...props}
    />
  );
};

export default OptimizedImage;