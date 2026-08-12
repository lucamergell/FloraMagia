import React, { useState } from 'react';
import { FlowerItem, Language } from '../types';
import { BEST_SELLERS, DISCOUNTED_FLOWERS, CATEGORY_FLOWERS } from '../data/flowers';
import { Sparkles, Phone, Tag, Heart, Gift } from 'lucide-react';

interface FeaturedCatalogProps {
  lang: Language;
  onSelectItem: (flower: FlowerItem) => void;
}

export const FeaturedCatalog: React.FC<FeaturedCatalogProps> = ({ lang, onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('girlfriend');
  const isKa = lang === 'ka';

  const categoryTabs = [
    { id: 'girlfriend', labelKa: 'შეყვარებულისთვის', labelEn: 'Girlfriend' },
    { id: 'mother', labelKa: 'დედისთვის', labelEn: 'Mother' },
    { id: 'friend', labelKa: 'მეგობრისთვის', labelEn: 'To a friend' },
    { id: 'grandma', labelKa: 'ბებიისთვის', labelEn: "Grandma's" },
    { id: 'birthday', labelKa: 'დაბადების დღისთვის', labelEn: 'For a birthday' },
  ];

  const categoryProducts = CATEGORY_FLOWERS[selectedCategory] || [];

  return (
    <div id="catalog" className="space-y-20 py-16 bg-[#fdf8fa]">
      
      {/* =========================================================================
          SECTION 1: BEST SELLERS (ROW OF 5 CARDS)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200 text-xs font-bold text-pink-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{isKa ? 'ყველაზე მოთხოვნადი' : 'Top Choice'}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#2b141e] mb-3">
            {isKa ? (
              <>
                ტოპ <span className="italic font-serif text-pink-700 font-normal">ბესტსელერები</span>
              </>
            ) : (
              <>
                Top 5 <span className="italic font-serif text-pink-700 font-normal">Best Sellers</span>
              </>
            )}
          </h2>
          <p className="text-[#593b47] text-sm max-w-xl mx-auto">
            {isKa
              ? 'დააწკაპუნეთ თაიგულზე დეტალური ინფორმაციის სანახავად და შესაკვეთად.'
              : 'Click on any bouquet to view full details and call to order.'}
          </p>
        </div>

        {/* 4 Best Sellers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {BEST_SELLERS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-pink-200/80 shadow-2xs hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-4/5 overflow-hidden bg-pink-50">
                <img
                  src={item.image}
                  alt={isKa ? item.nameKa : item.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-[#3c101e] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs tracking-wider uppercase">
                  ✨ {isKa ? 'ბესტსელერი' : 'Best Seller'}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-[#3c101e] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {isKa ? 'დეტალები' : 'More Info'}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#2b141e] mb-2 group-hover:text-pink-700 transition-colors leading-snug">
                    {isKa ? item.nameKa : item.nameEn}
                  </h3>
                </div>

                <div className="pt-3 border-t border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-2.5 sm:gap-0">
                  <span className="text-lg font-medium text-[#3c101e]">
                    {item.priceGel} ₾
                  </span>
                  <button className="w-full sm:w-auto bg-[#3c101e] group-hover:bg-[#52182c] text-white text-xs font-bold px-3 py-2 sm:py-1.5 rounded-xl transition-colors cursor-pointer text-center">
                    {isKa ? 'ნახვა' : 'View'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DISCOUNTED FLOWERS (ROW OF 2 CARDS)
      ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-rose-100 px-3.5 py-1 rounded-full border border-rose-200 text-xs font-bold text-rose-800 uppercase tracking-widest mb-3">
            <Tag className="w-3.5 h-3.5 text-rose-600" />
            <span>{isKa ? 'სპეციალური შეთავაზება' : 'Special Offers'}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b141e] mb-2">
            {isKa ? (
              <>
                ფასდაკლებული <span className="italic font-serif text-rose-700 font-normal">თაიგულები</span>
              </>
            ) : (
              <>
                Discounted <span className="italic font-serif text-rose-700 font-normal">Floral Offers</span>
              </>
            )}
          </h2>
        </div>

        {/* 2 Discounted Flowers Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto">
          {DISCOUNTED_FLOWERS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-rose-200 shadow-sm hover:shadow-xl hover:border-rose-400 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-rose-50">
                <img
                  src={item.image}
                  alt={isKa ? item.nameKa : item.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-3.5 left-3.5 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  🔥 {isKa ? 'ფასდაკლება' : 'SALE'}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#2b141e] mb-1 group-hover:text-rose-700 transition-colors leading-snug">
                    {isKa ? item.nameKa : item.nameEn}
                  </h3>
                  <p className="text-xs text-[#593b47] line-clamp-2">
                    {isKa ? item.descriptionKa : item.descriptionEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-rose-100 flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-3 sm:gap-0">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-medium text-rose-700">
                      {item.priceGel} ₾
                    </span>
                    {item.oldPriceGel && (
                      <span className="text-sm text-gray-400 line-through">
                        {item.oldPriceGel} ₾
                      </span>
                    )}
                  </div>
                  <button className="w-full sm:w-auto bg-rose-700 group-hover:bg-rose-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer text-center">
                    {isKa ? 'ნახვა' : 'More Info'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CATEGORIES SECTION
          Categories: Girlfriend | Mother | To a friend | Grandma's | For a birthday
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200 text-xs font-bold text-pink-800 uppercase tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5 text-pink-600" />
            <span>{isKa ? 'აირჩიეთ ადრესატის მიხედვით' : 'Shop by Category'}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#2b141e] mb-3">
            {isKa ? (
              <>
                ვისთვის გსურთ <span className="italic font-serif text-pink-700 font-normal">ყვავილების ჩუქება?</span>
              </>
            ) : (
              <>
                Who Are You <span className="italic font-serif text-pink-700 font-normal">Gifting Flowers To?</span>
              </>
            )}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#3c101e] text-white shadow-md border border-[#3c101e]'
                  : 'bg-white text-[#593b47] hover:bg-pink-50 border border-pink-200/80 shadow-2xs'
              }`}
            >
              {isKa ? tab.labelKa : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Category Products Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          {categoryProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-pink-200/80 shadow-2xs hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-pink-50">
                <img
                  src={item.image}
                  alt={isKa ? item.nameKa : item.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#2b141e] mb-2 group-hover:text-pink-700 transition-colors leading-snug">
                    {isKa ? item.nameKa : item.nameEn}
                  </h3>
                  <p className="text-xs text-[#593b47] line-clamp-2 leading-relaxed">
                    {isKa ? item.descriptionKa : item.descriptionEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-3 sm:gap-0">
                  <span className="text-xl font-medium text-[#3c101e]">
                    {item.priceGel} ₾
                  </span>
                  <button className="w-full sm:w-auto bg-[#3c101e] group-hover:bg-[#52182c] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer text-center">
                    {isKa ? 'დეტალები' : 'More Info'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
