import React, { useState } from 'react';
import { Language, FlowerItem } from './types';
import { Hero } from './components/Hero';
import { FeaturedCatalog } from './components/FeaturedCatalog';
import { LocationAndMap } from './components/LocationAndMap';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { StickyMessengerButton } from './components/StickyMessengerButton';
import { FlowerDetailModal } from './components/FlowerDetailModal';
import { BEST_SELLERS } from './data/flowers';

export default function App() {
  const [lang, setLang] = useState<Language>('ka');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedFlower, setSelectedFlower] = useState<FlowerItem | null>(null);

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
    <div className="min-h-screen bg-[#fff8fa] text-[#2b141e] font-sans antialiased relative selection:bg-pink-200 selection:text-pink-900">
      
      {/* Main Content Sections (No top header bar) */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          setLang={setLang}
          onOpenOrderModal={handleOpenGeneralOrderModal}
        />

        {/* 2. Catalog: Best Sellers (5) -> Discounted (2) -> Categories (Girlfriend, Mother, Friend, Grandma, Birthday) */}
        <FeaturedCatalog
          lang={lang}
          onSelectItem={handleSelectItem}
        />

        {/* 3. Physical Location, Google Map & 24/7 Hours */}
        <LocationAndMap lang={lang} />

        {/* 5. Google Reviews (3 reviews directly from Google + Google Reviews page link) */}
        <Testimonials lang={lang} />

        {/* 6. Instagram Feed (Latest posts directly from @flora.magia) */}
        <InstagramFeed lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

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
