import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';
import logoImg from '../assets/images/floramagia.jpg';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenOrderModal: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  onOpenOrderModal,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isKa = lang === 'ka';

  const navLinks = [
    { href: '#catalog', labelKa: 'კატალოგი', labelEn: 'Catalog' },
    { href: '#builder', labelKa: 'თაიგულის აწყობა', labelEn: 'Atelier Builder' },
    { href: '#why-us', labelKa: '24/7 უპირატესობა', labelEn: 'Why 24/7' },
    { href: '#location', labelKa: 'მისამართი & რუკა', labelEn: 'Location & Map' },
    { href: '#faq', labelKa: 'კითხვები', labelEn: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-pink-200/80 shadow-xs py-2.5'
          : 'bg-[#faf4f6]/90 backdrop-blur-md border-b border-pink-200/50 py-3.5'
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-xs border-b border-pink-200/50 pb-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-pink-100/70 px-3 py-0.5 rounded-full border border-pink-200">
            <span className="w-2 h-2 rounded-full bg-pink-600 animate-ping"></span>
            <span className="font-bold text-[#3c101e]">
              {isKa ? 'ღიაა 24/7 • სწრაფი მიტანა თბილისში' : 'Open 24/7 • Fast Delivery Across Tbilisi'}
            </span>
          </div>
          <span className="flex items-center text-[#593b47]">
            <MapPin className="w-3.5 h-3.5 mr-1 text-pink-700" />
            {isKa ? 'თბილისი, უნივერსიტეტის ქ. #1 (საბურთალო)' : '1 University St, Saburtalo, Tbilisi'}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/flora.magia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-800 hover:text-pink-900 font-semibold transition-colors flex items-center space-x-1"
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Instagram @flora.magia</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Branding */}
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src={logoImg}
            alt="Flora Magia Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border-2 border-pink-300 shadow-xs group-hover:scale-105 transition-transform duration-300"
          />
          <div>
            <span className="font-editorial text-2xl md:text-3xl font-bold tracking-wide text-[#2b141e] group-hover:text-pink-700 transition-colors block leading-none">
              Flora Magia
            </span>
            <span className="text-[10px] tracking-widest text-pink-700 uppercase font-bold block mt-0.5">
              {isKa ? '24/7 ფლორისტული ატელიე' : '24/7 Floral Atelier'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#3c101e] hover:text-pink-700 font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3c101e] hover:after:w-full after:transition-all after:duration-300"
            >
              {isKa ? link.labelKa : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Action Controls & Language Toggle */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-pink-100/60 p-0.5 rounded-xl border border-pink-200">
            <button
              onClick={() => setLang('ka')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                isKa
                  ? 'bg-[#3c101e] text-white shadow-2xs'
                  : 'text-pink-900 hover:text-pink-700'
              }`}
            >
              GE
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                !isKa
                  ? 'bg-[#3c101e] text-white shadow-2xs'
                  : 'text-pink-900 hover:text-pink-700'
              }`}
            >
              EN
            </button>
          </div>

          {/* Direct Phone Call Button */}
          <a
            href="tel:+995551688841"
            className="hidden sm:flex items-center space-x-2 bg-[#3c101e] hover:bg-[#52182c] text-white px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>551 68 88 41</span>
          </a>

          {/* Quick Order Button */}
          <button
            onClick={onOpenOrderModal}
            className="relative flex items-center space-x-1.5 bg-white hover:bg-pink-50 text-[#3c101e] border border-pink-300 px-4 py-2.5 rounded-xl font-bold text-xs shadow-2xs transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-pink-700" />
            <span className="hidden xs:inline">{isKa ? 'შეკვეთა' : 'Order'}</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2b141e] hover:text-pink-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-pink-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-pink-100 text-xs text-pink-800">
            <div className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{isKa ? 'ღიაა 24/7' : 'Open 24/7'}</span>
            </div>
            <a href="tel:+995551688841" className="font-bold underline text-[#3c101e]">
              📞 551 68 88 41
            </a>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-medium text-[#2b141e] hover:bg-pink-50 hover:text-pink-700 transition-colors"
              >
                {isKa ? link.labelKa : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+995551688841"
              className="w-full flex items-center justify-center space-x-2 bg-[#3c101e] text-white py-3.5 rounded-2xl font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{isKa ? 'დარეკე ახლავე: 551 68 88 41' : 'Call 24/7: +995 551 68 88 41'}</span>
            </a>

            <a
              href="https://wa.me/995551688841"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white py-3.5 rounded-2xl font-semibold text-sm shadow-sm"
            >
              <span>💬 WhatsApp-ში შეკვეთა</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


