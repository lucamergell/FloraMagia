import React from 'react';
import { Phone, Navigation, ShoppingBag } from 'lucide-react';
import { Language } from '../types';

interface MobileBottomBarProps {
  lang: Language;
  onOpenOrderModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ lang, onOpenOrderModal }) => {
  const isKa = lang === 'ka';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-pink-200 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Call Button */}
        <a
          href="tel:+995551688841"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-pink-600 text-white font-bold text-[11px] shadow-xs active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-current mb-0.5" />
          <span>{isKa ? 'დარეკვა' : 'Call 24/7'}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/995551688841?text=%E1%83%92%E1%83%90%E1%83%9B%E1%83%90%E1%83%A0%E1%83%AF%E1%83%9D%E1%83%91%E1%83%90!%20%E1%83%9B%E1%83%A1%E1%83%A3%E1%83%A0%E1%83%A1%20%E1%83%A7%E1%83%95%E1%83%90%E1%83%95%E1%83%98%E1%83%9A%E1%83%93%E1%83%91%E1%83%98%E1%83%A1%20%E1%83%A8%E1%83%98%E1%83%99%E1%83%95%E1%83%94%E1%83%97%E1%83%90"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-xs active:scale-95 transition-transform"
        >
          <span className="text-sm leading-none mb-0.5">💬</span>
          <span>WhatsApp</span>
        </a>

        {/* Custom Order Modal */}
        <button
          onClick={onOpenOrderModal}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-pink-100 border border-pink-300 text-pink-700 font-bold text-[11px] shadow-xs active:scale-95 transition-transform"
        >
          <ShoppingBag className="w-4 h-4 text-pink-600 mb-0.5" />
          <span>{isKa ? 'შეკვეთა' : 'Order'}</span>
        </button>

        {/* Google Maps Route */}
        <a
          href="https://maps.app.goo.gl/xyt7AyA2rm6E1ibF6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 font-bold text-[11px] shadow-xs active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 mb-0.5" />
          <span>{isKa ? 'რუკა' : 'Map'}</span>
        </a>
      </div>
    </div>
  );
};

