import React from 'react';
import { Language } from '../types';
import { Droplet, Sun, Scissors, Sparkles } from 'lucide-react';

interface FlowerCareProps {
  lang: Language;
}

export const FlowerCareAndFAQ: React.FC<FlowerCareProps> = ({ lang }) => {
  const isKa = lang === 'ka';

  const careTips = [
    {
      icon: Scissors,
      titleKa: 'ღეროების გაჭრა 45°-ზე',
      titleEn: 'Trim Stems at 45°',
      descKa: 'თაიგულის ვაზაში ჩადგმამდე ღეროს ბოლოები გადაჭერით 1-2 სმ-ით 45 გრადუსიანი კუთხით.',
      descEn: 'Trim 1-2 cm off stem ends at a 45-degree angle under cold running water before placing in vase.',
    },
    {
      icon: Droplet,
      titleKa: 'ცივი წყლის გამოცვლა',
      titleEn: 'Daily Fresh Water',
      descKa: 'გამოცვალეთ წყალი ვაზაში ყოველდღიურად და დაამატეთ Flora Magia-ს უფასო ყვავილების საკვები (Chrysal).',
      descEn: 'Change vase water daily and mix in the complimentary Flora Magia flower preservative packet.',
    },
    {
      icon: Sun,
      titleKa: 'არიდეთ პირდაპირ მზეს',
      titleEn: 'Avoid Direct Sun & Heat',
      descKa: 'დადგით თაიგული გრილ ოთახში, მოარიდეთ პირდაპირ მზის სხივებს, გამათბობლებსა და ხილის ლანგარს.',
      descEn: 'Keep flowers in a cool spot away from direct sunlight, radiators, and ripening fruit bowls.',
    },
  ];

  return (
    <section className="py-16 bg-[#faf4f6] relative overflow-hidden border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200 text-xs font-bold text-pink-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>{isKa ? 'მოვლის საიდუმლოებები' : 'Flower Care Secrets'}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b141e] mb-3">
            {isKa ? 'როგორ შევინარჩუნოთ თაიგული ცოცხლად 10+ დღე' : 'How to Keep Flowers Vibrant for 10+ Days'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careTips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-pink-200/80 shadow-2xs text-center flex flex-col items-center"
              >
                <div className="p-3.5 bg-[#3c101e] rounded-2xl text-white mb-5 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#2b141e] mb-2">
                  {isKa ? tip.titleKa : tip.titleEn}
                </h3>
                <p className="text-xs text-[#593b47] leading-relaxed">
                  {isKa ? tip.descKa : tip.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
