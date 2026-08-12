import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Language, FlowerItem } from './types';
import { Hero } from './components/Hero';
import { FeaturedCatalog } from './components/FeaturedCatalog';
import { LocationAndMap } from './components/LocationAndMap';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { StickyMessengerButton } from './components/StickyMessengerButton';
import { FlowerDetailModal } from './components/FlowerDetailModal';
import { SplashScreen } from './components/SplashScreen';
import { ScrollReveal } from './components/ScrollReveal';
import { BEST_SELLERS } from './data/flowers';

export default function App() {
  const [lang, setLang] = useState<Language>('ka');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedFlower, setSelectedFlower] = useState<FlowerItem | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash screen is active
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // 3s animation duration for the splash screen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  // Handle clicking on any flower card or CTA
  const handleSelectItem = (flower: FlowerItem) => {
    setSelectedFlower(flower);
    setModalOpen(true);
  };

  // Generic open order call (defaults to first best seller)
  const handleOpenGeneralOrderModal = () => {
    setSelectedFlower(selectedFlower || BEST_SELLERS[0]);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fff8fa] text-[#2b141e] font-sans antialiased relative selection:bg-pink-200 selection:text-pink-900 overflow-clip">
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {/* Main Content Sections (No top header bar) */}
      <main>
        {/* 1. Hero Section */}
        <ScrollReveal delay={3}>
          <Hero
            lang={lang}
            setLang={setLang}
            onOpenOrderModal={handleOpenGeneralOrderModal}
          />
        </ScrollReveal>

        {/* 2. Catalog: Best Sellers (5) -> Discounted (2) -> Categories (Girlfriend, Mother, Friend, Grandma, Birthday) */}
        <ScrollReveal>
          <FeaturedCatalog
            lang={lang}
            onSelectItem={handleSelectItem}
          />
        </ScrollReveal>

        {/* 3. Physical Location, Google Map & 24/7 Hours */}
        <ScrollReveal>
          <LocationAndMap lang={lang} />
        </ScrollReveal>

        {/* 5. Google Reviews (3 reviews directly from Google + Google Reviews page link) */}
        <ScrollReveal>
          <Testimonials lang={lang} />
        </ScrollReveal>

        {/* 6. Instagram Feed (Latest posts directly from @flora.magia) */}
        <ScrollReveal>
          <InstagramFeed lang={lang} />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal>
        <Footer lang={lang} />
      </ScrollReveal>

      {/* Sticky Messenger Contact Us Button (Bottom Right Corner) */}
      <StickyMessengerButton lang={lang} />

      {/* Flower Details Popup Modal with "Call to Order" button */}
      <FlowerDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        lang={lang}
        flowerItem={selectedFlower}
      />
    </div>
  );
}
