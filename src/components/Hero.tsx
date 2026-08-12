import React from 'react';
import { Phone, Clock, MapPin, Truck, ShieldCheck, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Language } from '../types';
import storefrontImg from '../assets/images/flora_magia_storefront_1786492681081.jpg';
import logoImg from '../assets/images/floramagia.jpg';
import flower3dImg from '../assets/images/3d_floating_flower_1786529114090.jpg';

interface HeroProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, setLang, onOpenOrderModal }) => {
  const isKa = lang === 'ka';

  return (
    <section className="relative min-h-[80vh] flex items-center py-12 lg:py-20 overflow-hidden bg-white">
      {/* Creative Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <style>
          {`
            @keyframes float-3d-1 {
              0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
              50% { transform: translate(20px, -40px) scale(1.05) rotate(10deg); }
            }
            @keyframes float-3d-2 {
              0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
              50% { transform: translate(-30px, 30px) scale(1.1) rotate(-15deg); }
            }
            @keyframes float-3d-3 {
              0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
              50% { transform: translate(15px, 25px) scale(0.95) rotate(12deg); }
            }
            .animate-tumble { animation: float-3d-1 12s ease-in-out infinite; }
            .animate-tumble-fast { animation: float-3d-2 9s ease-in-out infinite; }
            .animate-tumble-reverse { animation: float-3d-3 15s ease-in-out infinite; }
            .animate-pan { animation: pan-bg 20s ease-in-out infinite; }
          `}
        </style>
        
        {/* Soft, interesting background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fdf2f8,_transparent)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#faf5ff,_transparent)] opacity-80" />
        
        {/* Floating gradient orbs with more complex movement */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-rose-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-fuchsia-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute -bottom-40 left-1/3 w-[30rem] h-[30rem] bg-pink-200/60 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        
        {/* Floating 3D Flowers */}
        <div className="absolute top-[10%] left-[5%] lg:left-[10%] w-24 h-24 lg:w-32 lg:h-32 opacity-80 animate-tumble" style={{ animationDelay: '0s' }}>
          <img src={flower3dImg} alt="3D Flower" className="w-full h-full object-cover mix-blend-multiply rounded-full" />
        </div>
        
        <div className="absolute top-[30%] right-[5%] lg:right-[15%] w-32 h-32 lg:w-48 lg:h-48 opacity-60 animate-tumble-reverse" style={{ animationDelay: '-5s' }}>
          <img src={flower3dImg} alt="3D Flower" className="w-full h-full object-cover mix-blend-multiply rounded-full" />
        </div>
        
        <div className="absolute bottom-[15%] left-[20%] lg:left-[25%] w-20 h-20 lg:w-28 lg:h-28 opacity-70 animate-tumble-fast" style={{ animationDelay: '-2s' }}>
          <img src={flower3dImg} alt="3D Flower" className="w-full h-full object-cover mix-blend-multiply rounded-full" />
        </div>

        <div className="absolute bottom-[25%] right-[20%] lg:right-[25%] w-16 h-16 lg:w-24 lg:h-24 opacity-50 animate-tumble" style={{ animationDelay: '-8s' }}>
          <img src={flower3dImg} alt="3D Flower" className="w-full h-full object-cover mix-blend-multiply rounded-full" />
        </div>

        <div className="absolute top-[40%] left-[45%] w-20 h-20 lg:w-24 lg:h-24 opacity-40 animate-tumble-reverse" style={{ animationDelay: '-12s' }}>
          <img src={flower3dImg} alt="3D Flower" className="w-full h-full object-cover mix-blend-multiply rounded-full" />
        </div>

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] [background-size:24px_24px] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Header Bar inside Hero with Logo and Language Toggle */}
        <div className="flex items-center justify-between pb-8 mb-6 border-b border-pink-200/60">
          <div className="flex items-center space-x-3">
            <img
              src={logoImg}
              alt="Flora Magia Logo"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-pink-300 shadow-sm"
            />
            <div>
              <span className="font-editorial text-2xl font-bold text-[#2b141e] leading-none block">
                Flora Magia
              </span>
              <span className="text-[10px] tracking-widest text-pink-700 font-bold uppercase block mt-0.5">
                Tbilisi • 1 University St
              </span>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-1 bg-white p-1 rounded-full border border-pink-200/90 shadow-2xs">
            <button
              onClick={() => setLang('ka')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'ka'
                  ? 'bg-[#3c101e] text-white shadow-2xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              GE
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#3c101e] text-white shadow-2xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2b141e] leading-[1.08]">
              {isKa ? (
                <>
                  ჯადოსნური ყვავილები <br />
                  <span className="italic font-serif text-pink-700 font-normal">
                    24/7-ზე
                  </span>{' '}
                  თბილისში
                </>
              ) : (
                <>
                  Bespoke Floral Artistry <br />
                  <span className="italic font-serif text-pink-700 font-normal">
                    Delivered 24/7
                  </span>{' '}
                  in Tbilisi
                </>
              )}
            </h1>


            {/* Primary Call to Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary CTA - Order Flowers */}
              <button
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative overflow-hidden flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#4a1525] to-[#2b141e] hover:from-[#591c2f] hover:to-[#3c101e] text-white px-9 py-4 rounded-full font-medium tracking-wide text-base shadow-[0_8px_20px_rgb(60,16,30,0.25)] hover:shadow-[0_12px_25px_rgb(60,16,30,0.35)] transition-all duration-300 transform hover:-translate-y-1 group border border-[#5d2336] cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{isKa ? 'ბესტსელერები' : 'Bestsellers'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform relative z-10" />
              </button>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+995551688841"
                className="flex items-center justify-center space-x-2.5 bg-white/90 backdrop-blur-md hover:bg-white border border-pink-200/80 text-[#3c101e] px-8 py-4 rounded-full font-medium tracking-wide text-base shadow-[0_8px_20px_rgb(249,168,212,0.15)] hover:shadow-[0_12px_25px_rgb(249,168,212,0.3)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Phone className="w-5 h-5 text-pink-500 fill-pink-50 group-hover:fill-pink-100 transition-colors" />
                <span>551 68 88 41</span>
              </a>
            </div>

            {/* Quick Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-pink-200/60 text-xs text-[#593b47]">
              <div className="flex items-center space-x-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-pink-100 shadow-xs">
                <div className="p-2 bg-pink-100/70 rounded-xl text-pink-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block text-[#2b141e]">{isKa ? '24/7 ღიაა' : 'Open 24/7'}</span>
                  <span className="text-[11px] text-gray-500">{isKa ? 'დღე და ღამე' : 'Day & Night'}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-pink-100 shadow-xs">
                <div className="p-2 bg-pink-100/70 rounded-xl text-pink-700">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block text-[#2b141e]">{isKa ? 'სწრაფი მიტანა' : 'Fast Delivery'}</span>
                  <span className="text-[11px] text-gray-500">{isKa ? 'თბილისში' : 'In Tbilisi'}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-pink-100 shadow-xs">
                <div className="p-2 bg-pink-100/70 rounded-xl text-pink-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block text-[#2b141e]">{isKa ? 'უნივერსიტეტის #1' : '1 University St'}</span>
                  <span className="text-[11px] text-gray-500">{isKa ? 'საბურთალო' : 'Saburtalo'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Column - Asymmetric Overlapping Frames */}
          <div className="hidden lg:block lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Main Arch Frame */}
            <div className="relative mx-auto max-w-md bg-white p-3 rounded-t-[3rem] rounded-b-3xl shadow-xl border border-pink-200/80 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="overflow-hidden rounded-t-[2.5rem] rounded-b-2xl aspect-[4/5] relative group">
                <img
                  src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t51.82787-15/731081676_18133644772597153_4550266233556773579_n.jpg?stp=dst-jpegr_tt6&cstp=mx3024x3024&ctp=s3024x3024&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eiBe2kO1YK8Q7kNvwFlpq1s&_nc_oc=Adqys3labP2xakQCEW5HxCQBt5lfcwwCtSscfFhgjNq0OutzvrE6BO-Dk1uNvUy8LzI&_nc_zt=23&se=-1&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=va-cQYXgmydZ2L6GX4S0_A&_nc_ss=7b2a8&oh=00_AQFmfIyu-Hly4z6D7r5Q_hzqMd5hkYZortawmBR97KfR9w&oe=6A82223E"
                  alt="Flora Magia Bouquet Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Label inside Frame */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                  <p className="text-xs font-semibold">
                    {isKa ? 'თითოეული თაიგული იწყობა სიყვარულით' : 'Crafted with passion'}
                  </p>
                  <p className="text-[10px] text-pink-100">
                    {isKa ? 'უნივერსიტეტის #1 • საბურთალო' : '1 University St • Saburtalo, Tbilisi'}
                  </p>
                </div>
              </div>

              {/* Frame Card Bottom Bar */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-pink-600 block uppercase tracking-wider">
                    {isKa ? '24/7 ექსპრეს თაიგულები' : '24/7 Express Bouquets'}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-[#2b141e]">
                    Flora Magia Tbilisi
                  </h3>
                </div>
                <button
                  onClick={onOpenOrderModal}
                  className="bg-[#3c101e] hover:bg-[#52182c] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  {isKa ? 'შეკვეთა' : 'Order Now'}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


