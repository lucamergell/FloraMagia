import React from 'react';
import {
  Instagram,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';

interface InstagramFeedProps {
  lang: Language;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ lang }) => {
  const isKa = lang === 'ka';

  return (
    <section className="py-10 sm:py-16 bg-[#faf4f6] relative overflow-hidden border-b border-pink-100" id="instagram-feed">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-pink-100/80 px-3.5 py-1 rounded-full border border-pink-200 text-xs font-bold text-pink-800 uppercase tracking-widest mb-2 sm:mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>@flora.magia</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b141e]">
              {isKa ? (
                <>
                  Instagram <span className="italic font-serif text-pink-700 font-normal">პროფილი</span>
                </>
              ) : (
                <>
                  Instagram <span className="italic font-serif text-pink-700 font-normal">Profile</span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-[#593b47] mt-1">
              {isKa
                ? 'Flora Magia 24/7 ოფიციალური Instagram პროფილი.'
                : 'Official Flora Magia 24/7 Instagram profile.'}
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0 w-full sm:w-auto">
            {/* Follow Button */}
            <a
              href="https://www.instagram.com/flora.magia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:opacity-95 text-white px-5 py-3 sm:py-2.5 rounded-full text-xs font-bold shadow-xs transition-all cursor-pointer min-h-[44px]"
            >
              <Instagram className="w-4 h-4" />
              <span>{isKa ? 'გადადი @flora.magia-ზე' : 'Follow @flora.magia'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>
        </div>

        {/* Direct Instagram Profile Iframe Embed - Mobile Optimized */}
        <div className="w-full flex justify-center overflow-hidden">
          <div className="w-full max-w-full sm:max-w-2xl md:max-w-3xl bg-white rounded-xl sm:rounded-2xl shadow-sm border border-pink-100/80 overflow-hidden">
            <iframe
              src="https://www.instagram.com/flora.magia/embed/"
              className="w-full h-[480px] xs:h-[540px] sm:h-[620px] md:h-[660px] border-none block"
              scrolling="no"
              title="Flora Magia Instagram Official Profile"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
