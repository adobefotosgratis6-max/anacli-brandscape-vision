interface ResponsiveConvenioImageProps {
  name: string;
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
}

export const ResponsiveConvenioImage = ({
  name,
  desktopSrc,
  mobileSrc,
  className = ""
}: ResponsiveConvenioImageProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://via.placeholder.com/120x24/E5E7EB/6B7280?text=${encodeURIComponent(name)}`;
  };

  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={mobileSrc} type="image/webp" />
      <source media="(min-width: 769px)" srcSet={desktopSrc} type="image/webp" />
      <img
        src={desktopSrc}
        alt={`Logo ${name}`}
        className={className}
        width={180}
        height={128}
        loading="lazy"
        decoding="async"
        onError={handleError}
      />
    </picture>
  );
};
