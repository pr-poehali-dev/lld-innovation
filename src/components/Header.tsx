import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Отзывы', href: '#trust' },
  { label: 'Контакты', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-dark/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(8,15,34,0.97)' : 'transparent' }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-base">П</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm md:text-base">ИП Петров</div>
              <div className="text-blue-400 text-xs hidden sm:block">Digital-агентство</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+79001234567"
              className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-1"
            >
              <Icon name="Phone" size={14} />
              +7 (900) 123-45-67
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Обсудить проект
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'rgba(8,15,34,0.98)' }}>
          <div className="section-container pb-4 pt-2 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-base py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center mt-2"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
