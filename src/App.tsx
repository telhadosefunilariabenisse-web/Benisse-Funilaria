import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { LocationsPage } from './pages/LocationsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getWhatsAppUrl } from './data/benisseData';
import { trackWhatsAppConversion } from './utils/tracking';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F4F5F7] text-[#111419]">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/locais-de-atendimento" element={<LocationsPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Subtle quick WhatsApp action button (compact 44x44 on mobile to stay well within sticky height cap) */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppConversion('Botão Flutuante WhatsApp', { source: 'floating_button' })}
          aria-label="Solicitar orçamento pelo WhatsApp"
          className="fixed bottom-4 right-4 z-30 h-11 md:h-12 px-3.5 md:px-4 rounded-full bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] font-bold text-xs md:text-sm shadow-lg border border-[#0B0D10]/15 flex items-center gap-2 transition-transform duration-150 hover:scale-[1.03]"
        >
          <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </BrowserRouter>
  );
}
