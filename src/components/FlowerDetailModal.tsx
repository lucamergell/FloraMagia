import React from 'react';
import { X, Phone, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { FlowerItem, Language } from '../types';

interface FlowerDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  flowerItem: FlowerItem | null;
}

export const FlowerDetailModal: React.FC<FlowerDetailModalProps> = ({
  isOpen,
  onClose,
  lang,
  flowerItem,
}) => {
  if (!isOpen || !flowerItem) return null;

  const isKa = lang === 'ka';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-200 animate-scaleUp max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-700 hover:text-black rounded-full backdrop-blur-md shadow-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Product Image Box */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-pink-100 shadow-inner">
            <img
              src={flowerItem.image}
              alt={isKa ? flowerItem.nameKa : flowerItem.nameEn}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {flowerItem.oldPriceGel && (
              <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {isKa ? 'ფასდაკლება' : 'SALE'}
              </span>
            )}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-pink-200 shadow-sm flex items-center space-x-1.5 text-xs font-bold text-pink-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{isKa ? '24/7 ხელმისაწვდომია' : 'Available 24/7'}</span>
            </div>
          </div>

          {/* Product Header & Price */}
          <div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2b141e] mb-2 leading-tight">
              {isKa ? flowerItem.nameKa : flowerItem.nameEn}
            </h2>

            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-2xl font-bold text-[#3c101e]">
                {flowerItem.priceGel} ₾
              </span>
              {flowerItem.oldPriceGel && (
                <span className="text-base text-gray-400 line-through font-medium">
                  {flowerItem.oldPriceGel} ₾
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#593b47] leading-relaxed mb-4">
              {isKa ? flowerItem.descriptionKa : flowerItem.descriptionEn}
            </p>

            {/* Composition details */}
            <div className="p-3.5 bg-[#faf4f6] rounded-2xl border border-pink-100 space-y-1 text-xs">
              <span className="font-bold text-[#3c101e] block uppercase tracking-wider">
                {isKa ? 'შემადგენლობა & დეტალები:' : 'Composition & Details:'}
              </span>
              <p className="text-gray-700">
                {isKa ? flowerItem.compositionKa : flowerItem.compositionEn}
              </p>
            </div>
          </div>

          {/* Order Info Note */}
          <div className="p-4 bg-pink-50/80 rounded-2xl border border-pink-200/80 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#3c101e]">
              <Clock className="w-4 h-4 text-pink-600 shrink-0" />
              <span>
                {isKa
                  ? 'შეკვეთის მისაღებად დარეკეთ ტელეფონზე'
                  : 'To place an order, call our florist directly'}
              </span>
            </div>
            <p className="text-xs text-[#593b47] leading-relaxed">
              {isKa
                ? 'ჩვენი ფლორისტი მიიღებს თქვენს შეკვეთას, მოგაწვდით თაიგულის რეალურ ფოტოს და კურიერი სწრაფად ჩააბარებს ადრესატს თბილისში.'
                : 'Our florist will confirm your request, send a live photo of the bouquet on WhatsApp, and dispatch our express courier for fast delivery.'}
            </p>
          </div>

          {/* Action Buttons: CALL TO ORDER */}
          <div className="space-y-3 pt-2">
            <a
              href="tel:+995551688841"
              className="w-full flex items-center justify-center space-x-2.5 bg-[#3c101e] hover:bg-[#52182c] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-lg transition-all active:scale-98 text-center cursor-pointer"
            >
              <Phone className="w-5 h-5 text-pink-300 fill-current" />
              <span>
                {isKa ? 'დარეკეთ შესაკვეთად' : 'Call to Order'}
              </span>
            </a>

            <a
              href="https://m.me/FloraMagiaFlowerShop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#0084FF] hover:bg-[#0073E6] text-white py-3.5 px-6 rounded-2xl font-bold text-sm shadow-xs transition-all text-center cursor-pointer"
            >
              <span>{isKa ? 'ან მოგვწერეთ მესენჯერზე' : 'Or message us on Messenger'}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
