import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Wrench, Ruler, Layers } from 'lucide-react';
import { COMPANY, DIFFERENTIALS, MATERIALS, IMAGES, getWhatsAppUrl } from '../data/benisseData';
import { SeoHead } from '../components/SeoHead';
import { ResilientImage } from '../components/ResilientImage';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { trackWhatsAppConversion } from '../utils/tracking';

const WORK_STEPS = [
  {
    step: '01',
    title: 'Levantamento e medição técnica',
    description:
      'Avaliamos o ponto de instalação, o caimento necessário para escoamento e as interferências da alvenaria antes de definir o perfil metálico.',
  },
  {
    step: '02',
    title: 'Fabricação sob medida',
    description:
      'Selecionamos a chapa e a bitola corretas e realizamos o corte e a dobra conforme as medidas exatas do imóvel, reduzindo emendas.',
  },
  {
    step: '03',
    title: 'Instalação e vedação criteriosa',
    description:
      'Executamos a fixação com suportes e parafusos apropriados, aplicando selante PU náutico nas juntas e encontros para garantir estanqueidade.',
  },
  {
    step: '04',
    title: 'Conferência e acabamento final',
    description:
      'Revisamos alinhamento, quedas de água e limpeza da área atendida para entregar um acabamento funcional e durável.',
  },
];

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="Sobre a Benisse Funilaria – Especialistas em Soluções Metálicas Sob Medida"
        description="Conheça a Benisse Funilaria: especialização em calhas, algerosas, rufos, coifas, dutos e toldos sob medida com foco em precisão e acabamento na Região Metropolitana de Porto Alegre."
        path="/sobre"
      />

      {/* Page Header */}
      <section className="bg-[#0B0D10] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#D99B16]">Sobre a Empresa</p>
            <h1
              className="font-display font-extrabold tracking-tight text-white leading-[1.1]"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                textWrap: 'balance',
              }}
            >
              Funilaria especializada com foco em proteção, precisão e acabamento
            </h1>
            <p className="text-base sm:text-lg text-[#B5BDC9] leading-relaxed">
              A {COMPANY.name} atua em Cachoeirinha e na Região Metropolitana de Porto Alegre
              oferecendo fabricação e instalação de calhas, algerosas, rufos, coifas, dutos e
              toldos metálicos sob medida.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning & Workshop */}
      <section className="bg-white border-b border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111419] tracking-tight">
                Compromisso com execução limpa e soluções sob medida
              </h2>
              <p className="text-base text-[#4A5260] leading-relaxed">
                Cada construção apresenta medidas, caimentos e encontros próprios. Por isso, a{' '}
                <strong>{COMPANY.name}</strong> trabalha com fabricação personalizada em oficina,
                evitando adaptações improvisadas e garantindo encaixe limpo entre as peças
                metálicas e a estrutura existente.
              </p>
              <p className="text-base text-[#4A5260] leading-relaxed">
                Atendemos demandas residenciais, comerciais e industriais com atenção direta às
                necessidades de cada cliente — desde a instalação de uma calha residencial até redes
                de dutos, coifas e acabamentos metálicos em grande escala.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E5EA] space-y-1.5">
                  <Wrench className="w-5 h-5 text-[#A37108]" aria-hidden="true" />
                  <p className="font-display text-sm font-bold text-[#111419]">
                    Atuação especializada
                  </p>
                  <p className="text-xs text-[#4A5260] leading-relaxed">
                    Foco exclusivo em funilaria, sistemas pluviais e peças metálicas dobradas.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E5EA] space-y-1.5">
                  <ShieldCheck className="w-5 h-5 text-[#A37108]" aria-hidden="true" />
                  <p className="font-display text-sm font-bold text-[#111419]">
                    Orçamento transparente
                  </p>
                  <p className="text-xs text-[#4A5260] leading-relaxed">
                    Avaliação técnica sem compromisso com especificação clara de material e bitola.
                  </p>
                </div>
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

      {/* Work Process */}
      <section className="bg-[#F4F5F7] border-b border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-xs font-semibold text-[#A37108]">Etapas de Trabalho</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111419] tracking-tight">
              Como conduzimos cada atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORK_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#E2E5EA] rounded-xl p-6 space-y-3"
              >
                <span className="font-mono text-xs font-semibold text-[#A37108] tabular-nums block">
                  {item.step}.
                </span>
                <h3 className="font-display text-lg font-bold text-[#111419]">{item.title}</h3>
                <p className="text-sm text-[#4A5260] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Differentials */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A37108]">
                <Layers className="w-4 h-4" aria-hidden="true" />
                <span>Especificação Técnica</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111419] tracking-tight">
                Chapas e acabamentos de alta resistência
              </h2>
              <p className="text-sm sm:text-base text-[#4A5260] leading-relaxed">
                A durabilidade de uma calha, algerosa ou rufo depende diretamente da escolha correta
                da liga metálica e da bitola da chapa. Dimensionamos cada peça conforme a exposição
                climática e o volume de água previsto.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111419] hover:text-[#A37108] transition-colors"
                >
                  <span>Explorar catálogo de serviços</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 overflow-x-auto border border-[#E2E5EA] rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8F9FA] border-b border-[#E2E5EA] text-xs font-bold uppercase tracking-wider text-[#646E7D]">
                    <th className="py-3.5 px-4">Material</th>
                    <th className="py-3.5 px-4">Espessura</th>
                    <th className="py-3.5 px-4">Principais aplicações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ECEEF2] text-sm">
                  {MATERIALS.map((mat) => (
                    <tr key={mat.name} className="bg-white">
                      <td className="py-3.5 px-4 font-semibold text-[#111419] whitespace-nowrap">
                        {mat.name}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-[#A37108] tabular-nums whitespace-nowrap">
                        {mat.gauges}
                      </td>
                      <td className="py-3.5 px-4 text-[#4A5260]">{mat.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-12 border-t border-[#E2E5EA]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A37108] mb-3">
              <Ruler className="w-4 h-4" aria-hidden="true" />
              <span>Pilares de Atendimento</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIFFERENTIALS.map((item) => (
                <div key={item.number} className="space-y-1.5">
                  <h3 className="font-display text-base font-bold text-[#111419]">
                    <span className="font-mono text-[#A37108] mr-2 tabular-nums">
                      {item.number}.
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5260] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de falar com a equipe da Benisse Funilaria.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppConversion('Página Sobre - WhatsApp', { source: 'about_page' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-bold whitespace-nowrap transition-colors duration-150"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Falar com a Benisse Funilaria no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
