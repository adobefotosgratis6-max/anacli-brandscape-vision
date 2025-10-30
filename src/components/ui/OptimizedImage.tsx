import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage = ({ src, alt, className, width, height, priority, ...props }: OptimizedImageProps) => {
  // Remove a extensão do arquivo para criar os caminhos das versões otimizadas
  const basePath = src.replace(/\.(png|jpg|jpeg)$/i, '');
  
  return (
    <picture>
      <source srcSet={`${basePath}.avif`} type="image/avif" />
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;