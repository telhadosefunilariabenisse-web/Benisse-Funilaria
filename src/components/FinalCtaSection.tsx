import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../data/benisseData';
import { trackWhatsAppConversion } from '../utils/tracking';

interface FinalCtaSectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export function FinalCtaSection({
  title = 'Precisa de uma solução em funilaria?',
  description = 'Entre em contato e solicite seu orçamento. Vamos encontrar a solução ideal para sua necessidade com fabricação sob medida e acabamento cuidadoso.',
  whatsappMessage,
}: FinalCtaSectionProps) {
  return (
    <section className="bg-[#0F1318] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-[#161B22] border border-white/10 rounded-xl p-8 md:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium text-[#D99B16]">
              Orçamento gratuito · Atendimento na Região Metropolitana de Porto Alegre
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              {title}
            </h2>
            <p className="text-base text-[#B5BDC9] leading-relaxed">{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppConversion('CTA Final - WhatsApp', { source: 'final_cta' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-bold whitespace-nowrap transition-colors duration-150"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Solicitar orçamento pelo WhatsApp</span>
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/15 hover:border-white/35 text-white text-sm font-medium whitespace-nowrap transition-colors duration-150"
            >
              <span>Enviar detalhes do projeto</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
