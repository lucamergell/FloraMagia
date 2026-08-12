import React from 'react';
import messengerIcon from '../assets/images/Messenger.svg';

interface StickyMessengerButtonProps {
  lang: 'ka' | 'en';
}

export const StickyMessengerButton: React.FC<StickyMessengerButtonProps> = ({ lang }) => {
  const isKa = lang === 'ka';

  return (
    <a
      href="https://m.me/FloraMagiaFlowerShop"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 active:scale-95 group cursor-pointer bg-white"
      aria-label="Contact Us on Messenger"
    >
      <img 
        src={messengerIcon} 
        alt="Messenger" 
        className="w-9 h-9 object-contain group-hover:rotate-12 transition-transform duration-300" 
      />
    </a>
  );
};
