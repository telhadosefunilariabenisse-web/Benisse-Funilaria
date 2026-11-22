import { useState, FormEvent } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import {
  COMPANY,
  SERVICES,
  CITIES,
  GENERAL_FAQS,
  getWhatsAppUrl,
} from '../data/benisseData';
import { SeoHead } from '../components/SeoHead';
import { trackWhatsAppConversion, trackQuoteFormSubmit } from '../utils/tracking';

interface FormState {
  name: string;
  phone: string;
  city: string;
  service: string;
  details: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
  service?: string;
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    city: CITIES[0].name,
    service: SERVICES[0].title,
    details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome para identificarmos seu atendimento.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Informe um número de telefone ou WhatsApp válido com DDD.';
    }
    if (!form.city) {
      nextErrors.city = 'Selecione a cidade do imóvel.';
    }
    if (!form.service) {
      nextErrors.service = 'Selecione o serviço desejado.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedUrl(null);
      return;
    }

    setErrors({});
    const lines = [
      'Olá, Benisse Funilaria! Gostaria de solicitar um orçamento.',
      `Nome: ${form.name.trim()}`,
      `Telefone/WhatsApp: ${form.phone.trim()}`,
      `Cidade: ${form.city}`,
      `Serviço: ${form.service}`,
    ];
    if (form.details.trim()) {
      lines.push(`Detalhes do projeto: ${form.details.trim()}`);
    }

    const url = getWhatsAppUrl(lines.join('\n'));
    trackQuoteFormSubmit({ city: form.city, service: form.service });
    setSubmittedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SeoHead
        title="Contato e Orçamento – WhatsApp e Atendimento | Benisse Funilaria"
        description="Solicite um orçamento gratuito de calhas, algerosas, rufos, coifas, dutos e toldos com a Benisse Funilaria pelo WhatsApp (51) 98134-7393."
        path="/contato"
      />

      {/* Page Header */}
      <section className="bg-[#0B0D10] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#D99B16]">Orçamento Sem Compromisso</p>
            <h1
              className="font-display font-extrabold tracking-tight text-white leading-[1.1]"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                textWrap: 'balance',
              }}
            >
              Fale com a Benisse Funilaria e solicite seu orçamento
            </h1>
            <p className="text-base sm:text-lg text-[#B5BDC9] leading-relaxed">
              Preencha os dados básicos abaixo para iniciar o atendimento direto no WhatsApp ou
              utilize nossos canais diretos.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Quote Form + Contact Details */}
      <section className="bg-[#F4F5F7] border-b border-[#E2E5EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white border border-[#E2E5EA] rounded-xl p-6 sm:p-8 lg:p-10">
              <div className="space-y-1.5 mb-6">
                <h2 className="font-display text-2xl font-bold text-[#111419]">
                  Solicitar orçamento pelo WhatsApp
                </h2>
                <p className="text-sm text-[#646E7D]">
                  Sua mensagem será preenchida automaticamente com as informações do projeto.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-semibold text-[#111419] mb-1.5"
                    >
                      Seu nome
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Ex: João Silva"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#111419] placeholder:text-[#8892A2] transition-colors ${
                        errors.name ? 'border-red-600' : 'border-[#D4D8DF] focus:border-[#D99B16]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-700 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-sm font-semibold text-[#111419] mb-1.5"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="(51) 99999-9999"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#111419] font-mono tabular-nums placeholder:font-sans placeholder:text-[#8892A2] transition-colors ${
                        errors.phone ? 'border-red-600' : 'border-[#D4D8DF] focus:border-[#D99B16]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-city"
                      className="block text-sm font-semibold text-[#111419] mb-1.5"
                    >
                      Cidade do atendimento
                    </label>
                    <select
                      id="quote-city"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-[#D4D8DF] focus:border-[#D99B16] bg-white text-sm text-[#111419]"
                    >
                      {CITIES.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                      <option value="Outra cidade da Região Metropolitana">
                        Outra cidade da Região Metropolitana
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-sm font-semibold text-[#111419] mb-1.5"
                    >
                      Serviço de interesse
                    </label>
                    <select
                      id="quote-service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-[#D4D8DF] focus:border-[#D99B16] bg-white text-sm text-[#111419]"
                    >
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.shortTitle}
                        </option>
                      ))}
                      <option value="Limpeza ou manutenção de calhas">
                        Limpeza ou manutenção de calhas
                      </option>
                      <option value="Peças metálicas sob medida / Outros">
                        Peças metálicas sob medida / Outros
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-details"
                    className="block text-sm font-semibold text-[#111419] mb-1.5"
                  >
                    Detalhes do projeto (opcional)
                  </label>
                  <textarea
                    id="quote-details"
                    rows={4}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    placeholder="Ex: Preciso de cerca de 18 metros de calha em galvalume grafite e algerosa na divisa lateral."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D4D8DF] focus:border-[#D99B16] bg-white text-sm text-[#111419] placeholder:text-[#8892A2]"
                  />
                </div>

                {submittedUrl && (
                  <div
                    role="status"
                    className="p-4 rounded-lg bg-[#EEF6EE] border border-[#B7DFB9] text-[#1A4B1E] text-sm flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-1">
                      <p className="font-semibold">Pedido preparado para o WhatsApp.</p>
                      <p>
                        Caso a janela não tenha aberto automaticamente,{' '}
                        <a
                          href={submittedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackWhatsAppConversion('Contato - Link Fallback Formulário', {
                              city: form.city,
                              service: form.service,
                              source: 'contact_form_fallback',
                            })
                          }
                          className="underline font-semibold"
                        >
                          clique aqui para enviar no WhatsApp
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-bold whitespace-nowrap transition-colors duration-150"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Enviar solicitação pelo WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Direct Channels Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#12151B] text-white border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-[#D99B16]">Canais Diretos</p>
                  <h2 className="font-display text-xl font-bold text-white">
                    Atendimento rápido e direto
                  </h2>
                </div>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#D99B16] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-[#9AA3B2]">WhatsApp e Telefone</p>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackWhatsAppConversion('Contato - Telefone WhatsApp', {
                            source: 'contact_phone',
                          })
                        }
                        className="font-mono text-base font-semibold text-white hover:text-[#D99B16] tabular-nums transition-colors"
                      >
                        {COMPANY.phoneDisplay}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#D99B16] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-[#9AA3B2]">E-mail</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-white hover:text-[#D99B16] break-all transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D99B16] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-[#9AA3B2]">Localização</p>
                      <p className="text-white">{COMPANY.address}</p>
                      <p className="text-xs text-[#9AA3B2] mt-0.5">{COMPANY.regionLabel}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#D99B16] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-[#9AA3B2]">Horário de atendimento</p>
                      <p className="text-white tabular-nums">{COMPANY.hours}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Instagram
                      className="w-4 h-4 text-[#D99B16] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs text-[#9AA3B2]">Redes Sociais</p>
                      <a
                        href={COMPANY.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#D99B16] transition-colors"
                      >
                        @benisse.telhadosefunilaria
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWhatsAppConversion('Contato - Abrir Conversa WhatsApp', {
                        source: 'contact_direct_button',
                      })
                    }
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-[#0B0D10] hover:bg-[#E2E5EA] text-sm font-bold whitespace-nowrap transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Abrir conversa no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Quote FAQs */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="space-y-2 mb-8">
            <p className="text-xs font-semibold text-[#A37108]">Dúvidas Frequentes</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111419] tracking-tight">
              Informações sobre orçamentos e atendimento
            </h2>
          </div>

          <div className="space-y-3">
            {GENERAL_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="border border-[#E2E5EA] rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[48px] px-5 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#111419] bg-[#F8F9FA] hover:bg-[#F1F3F5] transition-colors"
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
                    <div className="px-5 py-4 text-sm text-[#4A5260] bg-white border-t border-[#E2E5EA] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
