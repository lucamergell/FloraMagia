import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Clock, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface LocationAndMapProps {
  lang: Language;
}

export const LocationAndMap: React.FC<LocationAndMapProps> = ({ lang }) => {
  const isKa = lang === 'ka';

  return (
    <section id="location" className="py-20 bg-white relative overflow-hidden border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200 text-xs font-bold text-pink-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>{isKa ? 'ლოკაცია & კონტაქტი • 24/7' : 'Location & Contact • Open 24/7'}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#2b141e] mb-3">
            {isKa ? (
              <>
                მოგვმართეთ <span className="italic font-serif text-pink-700 font-normal">უნივერსიტეტის #1-ში</span>
              </>
            ) : (
              <>
                Visit Us at <span className="italic font-serif text-pink-700 font-normal">1 University Street</span>
              </>
            )}
          </h2>
          <p className="text-[#593b47] text-sm sm:text-base max-w-xl mx-auto">
            {isKa
              ? 'ჩვენი ყვავილების მაღაზია მდებარეობს საბურთალოზე, უნივერსიტეტის ქუჩა #1-ში. გელოდებით დღის და ღამის ნებისმიერ მონაკვეთში!'
              : 'Located in Saburtalo at 1 University St, Tbilisi 0177. We are open and welcoming visitors 24 hours a day.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card - 5 cols */}
          <div className="lg:col-span-5 bg-[#faf4f6] rounded-3xl p-6 sm:p-8 border border-pink-200/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#3c101e] rounded-2xl text-white shadow-2xs shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2b141e] text-base mb-0.5">
                    {isKa ? 'მისამართი' : 'Address'}
                  </h3>
                  <p className="text-sm text-[#2b141e] font-bold">
                    1 University St, Tbilisi 0177
                  </p>
                  <p className="text-xs text-pink-700 font-medium mt-0.5">
                    {isKa ? 'უნივერსიტეტის ქუჩა #1, საბურთალო, თბილისი' : 'Saburtalo, Tbilisi, Georgia'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#3c101e] rounded-2xl text-white shadow-2xs shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2b141e] text-base mb-0.5">
                    {isKa ? 'სამუშაო საათები' : 'Opening Hours'}
                  </h3>
                  <p className="text-sm text-pink-800 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pink-600 animate-ping" />
                    24/7 {isKa ? 'ღიაა უწყვეტად' : 'Open 24 Hours / 7 Days'}
                  </p>
                  <p className="text-xs text-[#593b47] mt-0.5">
                    {isKa ? 'მაღაზია და მიტანის სერვისი მუშაობს დღე და ღამე' : 'Storefront and delivery active all night'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#3c101e] rounded-2xl text-white shadow-2xs shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2b141e] text-base mb-0.5">
                    {isKa ? 'პირდაპირი კონტაქტი' : 'Phone Line'}
                  </h3>
                  <a
                    href="tel:+995551688841"
                    className="text-lg font-bold text-[#3c101e] hover:text-pink-700 transition-colors block"
                  >
                    +995 551 68 88 41
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links & Map Directions Button */}
            <div className="pt-6 border-t border-pink-200/80 space-y-3">
              <a
                href="https://maps.app.goo.gl/xyt7AyA2rm6E1ibF6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#3c101e] hover:bg-[#52182c] text-white py-4 px-4 rounded-2xl font-bold text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>{isKa ? 'მარშრუტის გახსნა Google Maps-ში' : 'Get Directions on Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.instagram.com/flora.magia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-pink-100/50 text-[#3c101e] py-3 rounded-xl text-xs font-bold border border-pink-200 transition-all shadow-2xs"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/FloraMagiaFlowerShop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-pink-100/50 text-[#3c101e] py-3 rounded-xl text-xs font-bold border border-pink-200 transition-all shadow-2xs"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed Container - 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border-2 border-pink-200/80 shadow-md relative min-h-[420px] p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe
                title="Flora Magia Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.89319889401!2d44.733791!3d41.722744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044731a5eb23db7%3A0x6b301b1b11f62e8!2s1%20University%20St%2C%20Tbilisi%200177!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


