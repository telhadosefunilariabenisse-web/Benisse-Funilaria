import { useState } from 'react';
import { MessageCircle, Check, ChevronDown } from 'lucide-react';
import { SERVICES, ServiceCategory, MATERIALS, getWhatsAppUrl } from '../data/benisseData';
import { SeoHead } from '../components/SeoHead';
import { ResilientImage } from '../components/ResilientImage';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { trackWhatsAppConversion } from '../utils/tracking';

const CATEGORIES: Array<'Todos' | ServiceCategory> = [
  'Todos',
  'Escoamento Pluvial',
  'Vedação e Divisas',
  'Exaustão e Dutos',
  'Sob Medida',
];

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | ServiceCategory>('Todos');
  const [openFaqKey, setOpenFaqKey] = useState<string | null>(null);

  const filteredServices =
    selectedCategory === 'Todos'
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <>
      <SeoHead
        title="Serviços de Funilaria – Calhas, Algerosas, Rufos, Coifas, Dutos e Toldos | Benisse Funilaria"
        description="Conheça os serviços da Benisse Funilaria: fabricação e instalação de calhas, algerosas, rufos, coifas, dutos de exaustão, toldos e peças metálicas sob medida."
        path="/servicos"
      />

      {/* Page Header */}
      <section className="bg-[#0B0D10] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#D99B16]">Portfólio Técnico de Funilaria</p>
            <h1
              className="font-display font-extrabold tracking-tight text-white leading-[1.1]"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                textWrap: 'balance',
              }}
            >
              Serviços especializados em funilaria e peças metálicas sob medida
            </h1>
            <p className="text-base sm:text-lg text-[#B5BDC9] leading-relaxed">
              Fabricamos, instalamos e realizamos manutenção em sistemas de escoamento de água
              pluvial, acabamentos de divisa, coifas, dutos, toldos metálicos e perfis dobrados
              conforme a necessidade de cada edificação.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div
            className="mt-8 inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#161B22] border border-white/10 rounded-xl"
            role="tablist"
            aria-label="Filtrar serviços por categoria"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                    active
                      ? 'bg-[#D99B16] text-[#0B0D10] font-semibold'
                      : 'text-[#B5BDC9] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Catalog */}
      <section className="bg-[#F4F5F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-10">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              id={service.slug}
              className="scroll-mt-24 bg-white border border-[#E2E5EA] rounded-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Media Column */}
                <div className="lg:col-span-5 h-52 lg:h-auto lg:min-h-[380px] bg-[#14181F] overflow-hidden rounded-t-lg lg:rounded-t-none border-b lg:border-b-0 lg:border-r border-[#E2E5EA]">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.shortTitle}
                    className="w-full h-52 lg:h-full object-cover object-center rounded-t-lg lg:rounded-t-none"
                  />
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#646E7D]">
                      <span className="font-mono font-semibold text-[#A37108] tabular-nums">
                        {service.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{service.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.materials.join(' / ')}</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111419] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#4A5260] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#ECEEF2]">
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#111419]">
                        Principais benefícios
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm text-[#4A5260]"
                          >
                            <Check
                              className="w-4 h-4 text-[#A37108] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#111419]">
                        Especificações de execução
                      </h3>
                      <ul className="space-y-2">
                        {service.technicalSpecs.map((spec) => (
                          <li
                            key={spec}
                            className="flex items-start gap-2 text-sm text-[#4A5260]"
                          >
                            <span
                              aria-hidden="true"
                              className="w-1.5 h-1.5 rounded-full bg-[#646E7D] shrink-0 mt-2"
                            />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {service.faqs.length > 0 && (
                    <div className="pt-4 border-t border-[#ECEEF2] space-y-2">
                      {service.faqs.map((faq, idx) => {
                        const key = `${service.id}-${idx}`;
                        const isOpen = openFaqKey === key;
                        return (
                          <div
                            key={key}
                            className="border border-[#E2E5EA] rounded-lg overflow-hidden"
                          >
                            <button
                              type="button"
                              onClick={() => setOpenFaqKey(isOpen ? null : key)}
                              aria-expanded={isOpen}
                              className="w-full px-4 py-3 text-left flex items-center justify-between gap-4 text-sm font-semibold text-[#111419] bg-[#F8F9FA] hover:bg-[#F1F3F5] transition-colors"
                            >
                              <span>{faq.question}</span>
                              <ChevronDown
                                className={`w-4 h-4 text-[#646E7D] shrink-0 transition-transform duration-150 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                                aria-hidden="true"
                              />
                            </button>
                            {isOpen && (
                              <div className="px-4 py-3 text-sm text-[#4A5260] bg-white border-t border-[#E2E5EA] leading-relaxed">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={getWhatsAppUrl(
                        `Olá! Gostaria de solicitar um orçamento para ${service.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackWhatsAppConversion(`Página Serviços - ${service.shortTitle}`, {
                          service: service.title,
                          source: 'services_page',
                        })
                      }
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-bold whitespace-nowrap transition-colors duration-150"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Solicitar orçamento de {service.shortTitle}</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Materials Reference Table */}
      <section className="bg-white border-t border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-xs font-semibold text-[#A37108]">Matéria-Prima</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111419] tracking-tight">
              Chapas e acabamentos aplicados nos projetos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATERIALS.map((mat) => (
              <div
                key={mat.name}
                className="p-6 rounded-xl border border-[#E2E5EA] bg-[#F8F9FA] space-y-3"
              >
                <div className="space-y-1">
                  <p className="font-mono text-xs font-medium text-[#A37108] tabular-nums">
                    {mat.gauges}
                  </p>
                  <h3 className="font-display text-lg font-bold text-[#111419]">{mat.name}</h3>
                </div>
                <p className="text-xs font-medium text-[#646E7D]">{mat.application}</p>
                <p className="text-sm text-[#4A5260] leading-relaxed">{mat.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection
        title="Quer definir o melhor material e perfil para sua obra?"
        description="Converse diretamente com nossa equipe pelo WhatsApp para tirar dúvidas técnicas e agendar uma avaliação sem compromisso."
      />
    </>
  );
}
