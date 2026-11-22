import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/benisseData';
import { SeoHead } from '../components/SeoHead';
import { trackWhatsAppConversion } from '../utils/tracking';

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Página não encontrada | Benisse Funilaria"
        description="A página solicitada não foi encontrada. Acesse os serviços ou solicite um orçamento com a Benisse Funilaria."
        path="/404"
      />
      <section className="bg-[#F4F5F7] py-24 md:py-32">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <p className="font-mono text-sm font-semibold text-[#A37108]">Erro 404</p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111419] tracking-tight">
            Página não encontrada
          </h1>
          <p className="text-base text-[#4A5260]">
            O endereço acessado não está disponível. Volte para a página inicial ou fale
            diretamente com nossa equipe pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#111419] text-white text-sm font-semibold whitespace-nowrap hover:bg-[#232933] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Voltar para o início</span>
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppConversion('Página 404 - WhatsApp', { source: 'not_found' })}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#D99B16] text-[#0B0D10] text-sm font-bold whitespace-nowrap hover:bg-[#E5A922] transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
