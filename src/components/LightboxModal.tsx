import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/benisseData';
import { ResilientImage } from './ResilientImage';

interface LightboxModalProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChangeIndex((activeIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onChangeIndex((activeIndex - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, items.length, onClose, onChangeIndex]);

  if (activeIndex === null || !items[activeIndex]) return null;

  const item = items[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0D10]/92 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative w-full max-w-5xl bg-[#14181F] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <p className="text-xs text-[#D99B16] font-medium">{item.category}</p>
            <h3 className="text-base md:text-lg font-bold text-white">{item.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar ampliação"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-[#9AA3B2] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-[#0B0D10] aspect-[16/10] max-h-[68vh] w-full overflow-hidden">
          <ResilientImage
            src={item.image}
            alt={item.imageAlt}
            fallbackTitle={item.title}
            className="w-full h-full object-contain"
          />

          <button
            type="button"
            onClick={() => onChangeIndex((activeIndex - 1 + items.length) % items.length)}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-[#0B0D10]/75 border border-white/15 text-white flex items-center justify-center hover:bg-[#D99B16] hover:text-[#0B0D10] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => onChangeIndex((activeIndex + 1) % items.length)}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-[#0B0D10]/75 border border-white/15 text-white flex items-center justify-center hover:bg-[#D99B16] hover:text-[#0B0D10] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-[#14181F] border-t border-white/10">
          <p className="text-sm text-[#CBD2DC]">{item.caption}</p>
          <span className="text-xs text-[#8892A2] whitespace-nowrap shrink-0">
            {item.referenceNote} · {activeIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
