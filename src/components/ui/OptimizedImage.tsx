import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage = ({ src, alt, className, ...props }: OptimizedImageProps) => {
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
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;