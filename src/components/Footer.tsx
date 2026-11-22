import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import { COMPANY, SERVICES, getWhatsAppUrl } from '../data/benisseData';
import { trackWhatsAppConversion } from '../utils/tracking';

export function Footer() {
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D10] text-[#CBD2DC] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Summary */}
          <div className="space-y-4">
            <Link
              to="/"
              className="font-display text-lg font-extrabold tracking-tight text-white inline-flex items-center gap-2.5 whitespace-nowrap"
            >
              {!logoError && (
                <img
                  src="/Logótipo.png"
                  alt=""
                  aria-hidden="true"
                  onError={() => setLogoError(true)}
                  className="h-10 w-auto object-contain shrink-0"
                />
              )}
              <span>{COMPANY.name}</span>
            </Link>
            <p className="text-sm text-[#9AA3B2] leading-relaxed">
              Especializada em fabricação, instalação e acabamento de calhas, algerosas, rufos,
              coifas, dutos, toldos e peças metálicas sob medida.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppConversion('Rodapé - Atendimento WhatsApp', { source: 'footer_cta' })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-semibold whitespace-nowrap transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Atendimento no WhatsApp</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-display text-sm font-bold text-white mb-4">Navegação</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#9AA3B2] hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-[#9AA3B2] hover:text-white transition-colors">
                  Serviços de funilaria
                </Link>
              </li>
              <li>
                <Link
                  to="/locais-de-atendimento"
                  className="text-[#9AA3B2] hover:text-white transition-colors"
                >
                  Locais de atendimento
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-[#9AA3B2] hover:text-white transition-colors">
                  Sobre a empresa
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-[#9AA3B2] hover:text-white transition-colors">
                  Contato e orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-display text-sm font-bold text-white mb-4">Soluções Metálicas</h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/servicos#${service.slug}`}
                    className="text-[#9AA3B2] hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-sm font-bold text-white mb-4">Contato e Região</h2>
            <ul className="space-y-3 text-sm text-[#9AA3B2]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D99B16] shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppConversion('Rodapé - Telefone WhatsApp', { source: 'footer_phone' })}
                  className="font-mono tabular-nums hover:text-white transition-colors"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D99B16] shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D99B16] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {COMPANY.address} · {COMPANY.regionLabel}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D99B16] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="tabular-nums">{COMPANY.hours}</span>
              </li>
              <li className="pt-1">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#CBD2DC] hover:text-[#D99B16] transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#7D8696]">
          <p>
            © {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p>Cachoeirinha e Região Metropolitana de Porto Alegre · RS</p>
        </div>
      </div>
    </footer>
  );
}
