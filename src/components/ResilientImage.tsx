import { useState } from 'react';
import { Wrench } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Benisse Funilaria',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1F27] via-[#262D38] to-[#12151B] text-[#E2E5EA] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Wrench className="w-8 h-8 text-[#D99B16] mb-3" strokeWidth={1.6} />
        <span className="text-xs font-medium tracking-wide text-[#9AA3B2]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
