import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Clock, Navigation, Sparkles } from 'lucide-react';
import { Language } from '../types';
import logoImg from '../assets/images/floramagia.jpg';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isKa = lang === 'ka';

  // Schema.org LocalBusiness JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'Flora Magia',
    image: 'https://instagram.ftbs5-3.fna.fbcdn.net/v/t51.2885-19/290619859_1696679177338461_3027284139300704516_n.jpg',
    '@id': 'https://maps.app.goo.gl/xyt7AyA2rm6E1ibF6',
    url: 'https://maps.app.goo.gl/xyt7AyA2rm6E1ibF6',
    telephone: '+995551688841',
    priceRange: '₾₾',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 University St',
      addressLocality: 'Tbilisi',
      postalCode: '0177',
      addressCountry: 'GE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.722744,
      longitude: 44.733791,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.instagram.com/flora.magia',
      'https://www.facebook.com/FloraMagiaFlowerShop',
    ],
  };

  return (
    <footer className="bg-[#1f0911] text-pink-100 pt-16 pb-28 lg:pb-12 text-sm relative border-t border-pink-900/40">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-pink-900/50">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logoImg}
                alt="Flora Magia Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-pink-700/50 shadow-2xs"
              />
              <div>
                <span className="font-editorial text-2xl font-bold text-white block leading-none">
                  Flora Magia
                </span>
                <span className="text-[10px] tracking-widest text-pink-300 uppercase font-bold block mt-0.5">
                  24/7 Floral Atelier
                </span>
              </div>
            </div>

            <p className="text-xs text-pink-200/80 leading-relaxed">
              {isKa
                ? 'Flora Magia — 24 საათიანი ყვავილების მაღაზია თბილისში.'
                : 'Flora Magia — 24/7 luxury flower house and express delivery across Tbilisi.'}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/flora.magia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-900/50 border border-pink-700/40 flex items-center justify-center text-pink-200 hover:bg-pink-600 hover:text-white transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/FloraMagiaFlowerShop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-900/50 border border-pink-700/40 flex items-center justify-center text-pink-200 hover:bg-pink-600 hover:text-white transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/xyt7AyA2rm6E1ibF6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-900/50 border border-pink-700/40 flex items-center justify-center text-pink-200 hover:bg-pink-600 hover:text-white transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 4: Store Info */}
          <div className="space-y-3 text-xs text-pink-200/90">
            <h4 className="font-editorial text-xl font-bold text-white mb-2">
              {isKa ? 'კონტაქტი & ლოკაცია' : 'Store & Contact'}
            </h4>
            <p className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
              <span>1 University St, Tbilisi 0177 ({isKa ? 'საბურთალო' : 'Saburtalo'})</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-pink-400 shrink-0" />
              <a href="tel:+995551688841" className="font-bold text-white hover:text-pink-300 transition-colors">
                +995 551 68 88 41
              </a>
            </p>
            <p className="flex items-center space-x-2 text-emerald-400 font-bold">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{isKa ? 'ღიაა 24 საათი / 7 დღე' : 'Open 24 Hours / 7 Days'}</span>
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-pink-300/70 gap-4">
          <p>© {new Date().getFullYear()} Flora Magia. {isKa ? 'ყველა უფლება დაცულია.' : 'All rights reserved.'}</p>
          <p className="flex items-center space-x-1.5">
            <span>{isKa ? 'თბილისი, საქართველო' : 'Tbilisi, Georgia'}</span>
            <span className="text-pink-400">🌸</span>
          </p>
        </div>
      </div>
    </footer>
  );
};


