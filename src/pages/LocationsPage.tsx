import { useState } from 'react';
import { MapPin, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CITIES, getWhatsAppUrl } from '../data/benisseData';
import { SeoHead } from '../components/SeoHead';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { trackWhatsAppConversion } from '../utils/tracking';

export function LocationsPage() {
  const [selectedCityId, setSelectedCityId] = useState<string>(CITIES[0].id);
  const selectedCity = CITIES.find((c) => c.id === selectedCityId) || CITIES[0];

  return (
    <>
      <SeoHead
        title="Locais de Atendimento – Cachoeirinha, Porto Alegre e Região | Benisse Funilaria"
        description="A Benisse Funilaria atende Cachoeirinha, Gravataí, Canoas, Porto Alegre, Alvorada, Viamão e Sapucaia do Sul com calhas, algerosas, rufos, coifas e dutos sob medida."
        path="/locais-de-atendimento"
      />

      {/* Page Header */}
      <section className="bg-[#0B0D10] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#D99B16]">Área de Cobertura</p>
            <h1
              className="font-display font-extrabold tracking-tight text-white leading-[1.1]"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                textWrap: 'balance',
              }}
            >
              Locais de atendimento na Região Metropolitana de Porto Alegre
            </h1>
            <p className="text-base sm:text-lg text-[#B5BDC9] leading-relaxed">
              Com base em Cachoeirinha, levamos fabricação sob medida, instalação e manutenção em
              funilaria para residências, comércios, condomínios e indústrias em sete municípios da
              região.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive City Selector + Detail Panel */}
      <section className="bg-[#F4F5F7] border-b border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* City List Sidebar */}
            <div className="lg:col-span-4 bg-white border border-[#E2E5EA] rounded-xl p-3 space-y-1">
              <p className="px-3 py-2 text-xs font-semibold text-[#646E7D]">
                Selecione uma cidade
              </p>
              {CITIES.map((city) => {
                const isSelected = city.id === selectedCity.id;
                return (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => setSelectedCityId(city.id)}
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg text-left flex items-center justify-between gap-3 transition-colors duration-150 ${
                      isSelected
                        ? 'bg-[#111419] text-white font-semibold'
                        : 'text-[#333A45] hover:bg-[#F4F5F7]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 text-sm">
                      <MapPin
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-[#D99B16]' : 'text-[#646E7D]'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{city.name}</span>
                    </span>
                    <span
                      className={`text-xs whitespace-nowrap ${
                        isSelected ? 'text-[#D99B16]' : 'text-[#7D8696]'
                      }`}
                    >
                      {city.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected City Detail Card */}
            <div className="lg:col-span-8 bg-white border border-[#E2E5EA] rounded-xl p-6 sm:p-8 lg:p-10 space-y-8">
              <div className="space-y-3 border-b border-[#ECEEF2] pb-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#646E7D]">
                  <span className="font-semibold text-[#A37108]">{selectedCity.badge}</span>
                  <span aria-hidden="true">·</span>
                  <span>Região Metropolitana de Porto Alegre</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111419] tracking-tight">
                  {selectedCity.headline}
                </h2>
                <p className="text-sm sm:text-base text-[#4A5260] leading-relaxed">
                  {selectedCity.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#111419]">
                    Serviços mais solicitados em {selectedCity.name}
                  </h3>
                  <ul className="space-y-2.5">
                    {selectedCity.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-[#4A5260]"
                      >
                        <Check
                          className="w-4 h-4 text-[#A37108] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#111419]">
                    Principais bairros atendidos
                  </h3>
                  <p className="text-sm text-[#4A5260] leading-relaxed">
                    {selectedCity.neighborhoods.join(' · ')} e demais regiões da cidade.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#ECEEF2] flex flex-col sm:flex-row sm:items-center gap-3.5">
                <a
                  href={getWhatsAppUrl(
                    `Olá! Estou em ${selectedCity.name} e gostaria de solicitar um orçamento de funilaria.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppConversion(`Página Locais - ${selectedCity.name}`, {
                      city: selectedCity.name,
                      source: 'locations_page',
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-bold whitespace-nowrap transition-colors duration-150"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Orçamento em {selectedCity.name}</span>
                </a>
                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#D4D8DF] hover:border-[#111419] text-[#111419] text-sm font-semibold whitespace-nowrap transition-colors duration-150"
                >
                  <span>Ver todos os serviços</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Complete Municipalities Summary Grid */}
          <div className="mt-14 pt-12 border-t border-[#E2E5EA]">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111419] mb-6">
              Todas as cidades com atendimento direto
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CITIES.map((city) => (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => {
                    setSelectedCityId(city.id);
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  className="text-left p-5 rounded-xl bg-white border border-[#E2E5EA] hover:border-[#A37108] transition-colors space-y-1.5"
                >
                  <p className="text-xs font-medium text-[#A37108]">{city.badge}</p>
                  <h3 className="font-display text-lg font-bold text-[#111419]">{city.name}</h3>
                  <p className="text-xs text-[#646E7D] line-clamp-2">
                    {city.neighborhoods.slice(0, 4).join(', ')}...
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection
        title="Sua obra está na Região Metropolitana de Porto Alegre?"
        description="Consulte a disponibilidade da nossa equipe técnica e agende uma avaliação para calhas, algerosas, rufos, coifas ou peças sob medida."
      />
    </>
  );
}
