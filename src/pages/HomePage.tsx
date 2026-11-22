import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  MapPin,
  Maximize2,
  ShieldCheck,
  Ruler,
  Layers,
} from 'lucide-react';
import {
  COMPANY,
  SERVICES,
  DIFFERENTIALS,
  GALLERY_ITEMS,
  CITIES,
  IMAGES,
  getWhatsAppUrl,
} from '../data/benisseData';
import { SeoHead } from '../components/SeoHead';
import { ResilientImage } from '../components/ResilientImage';
import { LightboxModal } from '../components/LightboxModal';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { trackWhatsAppConversion } from '../utils/tracking';

export function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <SeoHead
        title="Benisse Funilaria – Calhas, Algerosas, Rufos, Coifas, Dutos e Toldos"
        description="Soluções em funilaria com precisão, qualidade e acabamento. Especialistas em calhas, algerosas, rufos, coifas, dutos e toldos sob medida na Região Metropolitana de Porto Alegre."
        path="/"
      />

      {/* 7.1 Hero Section */}
      <section className="relative bg-[#0B0D10] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.heroWorkshop}
            alt="Oficina de funilaria com perfis metálicos dobrados, calhas e algerosas sob medida"
            fallbackTitle="Benisse Funilaria"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/85 to-[#0B0D10]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/40" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#D99B16]">
              <span>Funilaria Sob Medida</span>
              <span aria-hidden="true" className="text-white/30">
                /
              </span>
              <span className="text-[#CBD2DC]">Cachoeirinha e Região Metropolitana de POA</span>
            </div>

            <h1
              className="font-display font-extrabold tracking-tight text-white leading-[1.08]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
                textWrap: 'balance',
              }}
            >
              Soluções em funilaria com precisão, qualidade e acabamento.
            </h1>

            <p className="text-base sm:text-lg text-[#CBD2DC] leading-relaxed max-w-2xl">
              Especialistas em calhas, algerosas, rufos, coifas, dutos, toldos e fabricação de
              peças metálicas sob medida para projetos residenciais, comerciais e industriais.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion('Hero Home - WhatsApp', { source: 'home_hero' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-bold whitespace-nowrap transition-colors duration-150"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>

              <Link
                to="/servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150"
              >
                <span>Conhecer nossos serviços</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Trust Strip */}
        <div className="relative border-t border-white/10 bg-[#11151B]/90 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
            <div className="flex items-start gap-3">
              <Ruler className="w-5 h-5 text-[#D99B16] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">Fabricação sob medida</p>
                <p className="text-xs text-[#9AA3B2]">
                  Perfis dobrados conforme as medidas reais de cada imóvel.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-[#D99B16] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white font-mono tabular-nums">
                  Chapas Bitolas 24 · 26 · 28
                </p>
                <p className="text-xs text-[#9AA3B2]">
                  Aço galvanizado, galvalume, alumínio e pintura eletrostática.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D99B16] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">Vedação e garantia</p>
                <p className="text-xs text-[#9AA3B2]">
                  Selamento profissional com PU náutico e orçamento sem compromisso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.2 Apresentação da Empresa */}
      <section className="bg-white border-b border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#A37108]">Sobre a {COMPANY.name}</p>
                <h2
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111419]"
                  style={{ textWrap: 'balance' }}
                >
                  Especialização em escoamento pluvial e peças metálicas sob medida
                </h2>
                <p className="text-base text-[#4A5260] leading-relaxed">
                  A <strong>{COMPANY.name}</strong> atua com foco total em funilaria para a
                  construção civil, desenvolvendo e instalando sistemas eficientes para captação e
                  direcionamento da água da chuva, vedação de encontros e exaustão metálica.
                </p>
                <p className="text-base text-[#4A5260] leading-relaxed">
                  Cada projeto recebe atenção técnica desde a medição até o acabamento final,
                  combinando chapas na espessura correta, dobras limpas, redução de emendas e
                  instalação cuidadosa para proteger o imóvel com funcionalidade e estética.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111419] hover:text-[#A37108] transition-colors"
                >
                  <span>Conhecer a Benisse Funilaria</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <span aria-hidden="true" className="text-[#CBD2DC]">
                  ·
                </span>
                <a
                  href={getWhatsAppUrl('Olá! Gostaria de agendar uma avaliação técnica de funilaria.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppConversion('Home Apresentação - Agendar Avaliação', { source: 'home_about' })}
                  className="text-sm font-semibold text-[#A37108] hover:text-[#845A05] transition-colors"
                >
                  Agendar avaliação gratuita
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] aspect-square rounded-xl overflow-hidden border border-[#E2E5EA] bg-[#12151B] flex items-center justify-center p-4 shadow-sm">
                <ResilientImage
                  src={IMAGES.aboutLogo}
                  alt="Logotipo Benisse Funilaria"
                  fallbackTitle="Benisse Funilaria"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.3 Serviços em Destaque */}
      <section className="bg-[#F4F5F7] border-b border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#A37108]">Serviços Especializados</p>
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111419]"
                style={{ textWrap: 'balance' }}
              >
                Fabricação, instalação e acabamento metálico
              </h2>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#111419] hover:text-[#A37108] whitespace-nowrap shrink-0 transition-colors"
            >
              <span>Ver página completa de serviços</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="group bg-white border border-[#E2E5EA] rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="h-52 w-full overflow-hidden rounded-t-lg bg-[#14181F] border-b border-[#E2E5EA]">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.shortTitle}
                    className="w-full h-52 object-cover object-center rounded-t-lg transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-[#646E7D]">
                      <span className="font-mono font-medium text-[#A37108] tabular-nums">
                        {service.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{service.category}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#111419] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4A5260] leading-relaxed">{service.summary}</p>
                  </div>

                  <div className="pt-3 border-t border-[#ECEEF2] flex items-center justify-between gap-3">
                    <Link
                      to={`/servicos#${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111419] hover:text-[#A37108] whitespace-nowrap transition-colors"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(
                        `Olá! Gostaria de solicitar um orçamento para ${service.shortTitle}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackWhatsAppConversion(`Home Card - ${service.shortTitle}`, {
                          service: service.shortTitle,
                          source: 'home_service_card',
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A37108] hover:text-[#845A05] whitespace-nowrap transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Orçamento</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7.4 Diferenciais */}
      <section className="bg-[#12151B] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-xs font-semibold text-[#D99B16]">Padrão Benisse Funilaria</p>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              Critério técnico em cada dobra, fixação e vedação
            </h2>
            <p className="text-base text-[#9AA3B2] leading-relaxed">
              Do levantamento no local à instalação final, priorizamos funcionalidade, proteção do
              imóvel e acabamento limpo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {DIFFERENTIALS.map((item) => (
              <div key={item.number} className="bg-[#161B22] p-7 space-y-3">
                <span className="font-mono text-xs font-semibold text-[#D99B16] tabular-nums block">
                  {item.number}.
                </span>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-[#9AA3B2] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.5 Galeria */}
      <section className="bg-white border-b border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#A37108]">Referências Visuais</p>
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111419]"
                style={{ textWrap: 'balance' }}
              >
                Acabamentos, perfis dobrados e soluções metálicas
              </h2>
            </div>
            <p className="text-xs text-[#646E7D]">
              Imagens ilustrativas de referência técnica dos serviços prestados · Clique para ampliar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative text-left rounded-xl overflow-hidden border border-[#E2E5EA] bg-[#14181F] flex flex-col focus-visible:outline-2 focus-visible:outline-[#D99B16]"
              >
                <div className="relative h-52 w-full bg-[#14181F] overflow-hidden rounded-t-lg">
                  <ResilientImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackTitle={item.title}
                    className="w-full h-52 object-cover object-center rounded-t-lg transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-lg bg-[#0B0D10]/75 border border-white/15 text-white flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:bg-[#D99B16] group-hover:text-[#0B0D10] transition-colors">
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-5 space-y-1 border-t border-white/10 bg-[#14181F]">
                  <p className="text-xs text-[#D99B16] font-medium">
                    {item.category} · {item.referenceNote}
                  </p>
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7.6 Locais de Atendimento Resumido */}
      <section className="bg-[#F4F5F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-white border border-[#E2E5EA] rounded-xl p-8 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A37108]">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Cobertura Regional</span>
              </div>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111419]"
                style={{ textWrap: 'balance' }}
              >
                Atendimento em Cachoeirinha, Porto Alegre e Região Metropolitana
              </h2>
              <p className="text-sm sm:text-base text-[#4A5260] leading-relaxed">
                Com base em Cachoeirinha, nossa equipe atende projetos residenciais, comerciais e
                industriais nas principais cidades da região:
              </p>
              <p className="text-sm font-medium text-[#111419] leading-relaxed">
                {CITIES.map((city, idx) => (
                  <span key={city.id}>
                    {city.name}
                    {idx < CITIES.length - 1 ? (
                      <span aria-hidden="true" className="mx-2 text-[#9AA3B2]">
                        ·
                      </span>
                    ) : null}
                  </span>
                ))}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/locais-de-atendimento"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#111419] hover:bg-[#232933] text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150"
              >
                <span>Ver locais de atendimento</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7.7 CTA Final */}
      <FinalCtaSection />

      <LightboxModal
        items={GALLERY_ITEMS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </>
  );
}
