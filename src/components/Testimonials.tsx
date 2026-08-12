import React from 'react';
import { GOOGLE_REVIEWS } from '../data/flowers';
import { Language } from '../types';
import { Star, MapPin, ExternalLink } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const isKa = lang === 'ka';

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Google Rating Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/80 text-xs font-bold text-amber-900 mb-4 shadow-2xs">
            <div className="flex items-center text-amber-500 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-xs">4.5 / 5.0</span>
            <span className="text-amber-700/80">• Google Reviews</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#2b141e] mb-4">
            {isKa ? (
              <>
                შეფასებები <span className="italic font-serif text-pink-700 font-normal">Google Maps-იდან</span>
              </>
            ) : (
              <>
                Verified <span className="italic font-serif text-pink-700 font-normal">Google Reviews</span>
              </>
            )}
          </h2>

          {/* GOOGLE REVIEWS DIRECT LINK ABOVE REVIEWS */}
          <div className="pt-2">
            <a
              href="https://maps.app.goo.gl/xyt7AyA2rm6E1ibF6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white hover:bg-pink-50 border border-pink-200 text-[#3c101e] px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all group cursor-pointer"
            >
              {/* Google G Logo SVG */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isKa ? 'დაგვიწერეთ შეფასება Google-ზე!' : 'Review us on Google!'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-pink-600 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3 Google Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((t) => (
            <div
              key={t.id}
              className="bg-[#faf4f6] rounded-3xl p-7 border border-pink-200/80 shadow-2xs flex flex-col justify-between relative group hover:border-[#3c101e]/30 transition-all duration-300"
            >
              <div>
                {/* Header row with Stars + Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/80 px-2.5 py-0.5 rounded-full border border-pink-100">
                    Google
                  </span>
                </div>

                <p className="font-editorial text-base sm:text-lg text-[#2b141e] italic leading-relaxed mb-6">
                  "{isKa ? t.textKa : t.textEn}"
                </p>
              </div>

              <div className="pt-4 border-t border-pink-200/80 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-[#2b141e] text-sm">
                    {isKa ? t.authorKa : t.authorEn}
                  </h3>
                  <span className="text-pink-700 flex items-center gap-1 mt-0.5 font-medium">
                    <MapPin className="w-3 h-3 text-pink-600" />
                    {isKa ? t.locationKa : t.locationEn}
                  </span>
                </div>
                <span className="text-gray-400 font-medium">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
