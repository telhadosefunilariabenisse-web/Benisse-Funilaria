import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { COMPANY } from '../data/benisseData';

const NAV_ITEMS = [
  { label: 'Início', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Locais de atendimento', to: '/locais-de-atendimento' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0D10]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo + Name */}
        <Link
          to="/"
          className="font-display text-lg md:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          {!logoError && (
            <img
              src="/Logótipo.png"
              alt=""
              aria-hidden="true"
              onError={() => setLogoError(true)}
              className="h-9 sm:h-10 w-auto object-contain shrink-0"
            />
          )}
          <span>{COMPANY.name}</span>
        </Link>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-white after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[#D99B16]'
                    : 'text-[#B5BDC9] hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contato"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150"
          >
            <span>Solicitar orçamento</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#12151B] border-b border-white/10 px-4 pt-3 pb-5"
          >
            <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[44px] px-3.5 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-white/10 text-[#D99B16]'
                        : 'text-[#CBD2DC] hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
              <Link
                to="/contato"
                onClick={() => setMobileOpen(false)}
                className="mt-3 min-h-[44px] px-4 py-2.5 rounded-lg bg-[#D99B16] hover:bg-[#E5A922] text-[#0B0D10] text-base font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
