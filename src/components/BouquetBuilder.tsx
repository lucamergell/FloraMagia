import React, { useState } from 'react';
import { Language, BouquetCustomization } from '../types';
import { Calculator, Check, ShoppingBag, Truck, Sparkles, Gift, Heart } from 'lucide-react';

interface BouquetBuilderProps {
  lang: Language;
  onOrderCustomBouquet: (customData: BouquetCustomization, totalPrice: number) => void;
}

export const BouquetBuilder: React.FC<BouquetBuilderProps> = ({ lang, onOrderCustomBouquet }) => {
  const isKa = lang === 'ka';

  const [flowerType, setFlowerType] = useState<BouquetCustomization['flowerType']>('red_roses');
  const [stemCount, setStemCount] = useState<number>(25);
  const [packaging, setPackaging] = useState<BouquetCustomization['packaging']>('classic_paper');
  const [cardMessage, setCardMessage] = useState<string>('');
  const [addChocolates, setAddChocolates] = useState<boolean>(false);
  const [addPlushBear, setAddPlushBear] = useState<boolean>(false);
  const [addHeliumBalloons, setAddHeliumBalloons] = useState<boolean>(false);

  // Price Calculation Logic (GEL ₾)
  const getStemUnitPrice = (type: BouquetCustomization['flowerType']) => {
    switch (type) {
      case 'red_roses': return 4.5;
      case 'pink_roses': return 4.5;
      case 'white_roses': return 4.5;
      case 'peonies': return 14;
      case 'hydrangeas': return 22;
      case 'mixed_magic': return 6;
      default: return 5;
    }
  };

  const getPackagingPrice = (pack: BouquetCustomization['packaging']) => {
    switch (pack) {
      case 'classic_paper': return 15;
      case 'velvet_box': return 35;
      case 'hat_box': return 30;
      case 'glass_vase': return 40;
      case 'premium_wrap': return 20;
      default: return 15;
    }
  };

  const flowersBase = Math.round(stemCount * getStemUnitPrice(flowerType));
  const packagingBase = getPackagingPrice(packaging);
  const chocolatesPrice = addChocolates ? 25 : 0;
  const bearPrice = addPlushBear ? 35 : 0;
  const balloonsPrice = addHeliumBalloons ? 30 : 0;

  const totalPrice = flowersBase + packagingBase + chocolatesPrice + bearPrice + balloonsPrice;

  const flowerOptions = [
    { id: 'red_roses', nameKa: 'წითელი ვარდები (ეკვადორი)', nameEn: 'Red Roses (Ecuador)', icon: '🌹', pricePerStem: 4.5 },
    { id: 'pink_roses', nameKa: 'ვარდისფერი ვარდები', nameEn: 'Pink Roses', icon: '🌸', pricePerStem: 4.5 },
    { id: 'white_roses', nameKa: 'თეთრი ვარდები', nameEn: 'White Roses', icon: '🤍', pricePerStem: 4.5 },
    { id: 'peonies', nameKa: 'ჰოლანდიური პეონები', nameEn: 'Dutch Peonies', icon: '🌺', pricePerStem: 14 },
    { id: 'hydrangeas', nameKa: 'ჰორტენზია', nameEn: 'Hydrangeas', icon: '💙', pricePerStem: 22 },
    { id: 'mixed_magic', nameKa: 'მაგიური მიქსი', nameEn: 'Bespoke Mixed Magic', icon: '💐', pricePerStem: 6 },
  ];

  const packagingOptions = [
    { id: 'classic_paper', nameKa: 'დიზაინერული ქაღალდი', nameEn: 'Designer Wrapping Paper', price: 15 },
    { id: 'velvet_box', nameKa: 'ხავერდის რაუნდ ყუთი', nameEn: 'Luxury Velvet Round Box', price: 35 },
    { id: 'hat_box', nameKa: 'ქუდის ყუთი ატლასის ბაფთით', nameEn: 'Classic Hat Box with Satin Ribbon', price: 30 },
    { id: 'glass_vase', nameKa: 'პრემიუმ მინის ვაზა', nameEn: 'Premium Glass Vase', price: 40 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOrderCustomBouquet(
      {
        flowerType,
        stemCount,
        packaging,
        cardMessage,
        addChocolates,
        addPlushBear,
        addHeliumBalloons,
        deliveryOption: 'express_tbilisi',
        recipientName: '',
        recipientPhone: '',
        deliveryAddress: ''
      },
      totalPrice
    );
  };

  return (
    <section id="builder" className="py-20 bg-white border-t border-b border-pink-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-pink-100/60 px-3.5 py-1 rounded-full border border-pink-200 text-xs font-bold text-pink-800 uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5 text-pink-600" />
            <span>{isKa ? 'ინტერაქტიული ატელიე • 24/7' : 'Interactive Floral Studio & Calculator'}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#2b141e] mb-3">
            {isKa ? (
              <>
                ააწყვეთ თქვენი <span className="italic font-serif text-pink-700 font-normal">ინდივიდუალური თაიგული</span>
              </>
            ) : (
              <>
                Design Your <span className="italic font-serif text-pink-700 font-normal">Custom Bouquet Atelier</span>
              </>
            )}
          </h2>
          <p className="text-[#593b47] text-sm sm:text-base max-w-xl mx-auto">
            {isKa
              ? 'აირჩიეთ ყვავილების სახეობა, ღეროების რაოდენობა, შეფუთვა და დაამატეთ საჩუქრები. ფასი იანგარიშება მომენტალურად.'
              : 'Select your preferred blooms, stem count, luxury packaging, and extra surprises with real-time price calculation.'}
          </p>
        </div>

        {/* Interactive Builder Container */}
        <div className="bg-[#faf4f6] rounded-3xl border border-pink-200/80 shadow-lg overflow-hidden p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls - Left Side */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Step 1: Flower Selection */}
            <div>
              <label className="text-xs font-bold text-[#3c101e] tracking-wider uppercase block mb-3">
                1. {isKa ? 'აირჩიეთ ყვავილი' : 'Select Flower Species'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {flowerOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFlowerType(opt.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      flowerType === opt.id
                        ? 'bg-[#3c101e] border-[#3c101e] text-white shadow-md scale-[1.02]'
                        : 'bg-white border-pink-200/80 hover:border-pink-300 text-[#2b141e]'
                    }`}
                  >
                    <div className="text-2xl mb-1.5">{opt.icon}</div>
                    <div className={`font-bold text-xs ${flowerType === opt.id ? 'text-white' : 'text-[#2b141e]'}`}>
                      {isKa ? opt.nameKa : opt.nameEn}
                    </div>
                    <div className={`text-[11px] font-semibold mt-1 ${flowerType === opt.id ? 'text-pink-200' : 'text-pink-700'}`}>
                      ~{opt.pricePerStem} ₾ / {isKa ? 'ღერი' : 'stem'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Stem Count Selector */}
            <div className="bg-white p-5 rounded-2xl border border-pink-200/80 shadow-2xs">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-[#3c101e] tracking-wider uppercase">
                  2. {isKa ? 'ღეროების რაოდენობა' : 'Stem Count'}
                </label>
                <span className="text-2xl font-bold text-[#3c101e]">
                  {stemCount} {isKa ? 'ღერი' : 'stems'}
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="11"
                max="101"
                step="2"
                value={stemCount}
                onChange={(e) => setStemCount(Number(e.target.value))}
                className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-[#3c101e]"
              />

              {/* Presets */}
              <div className="flex justify-between gap-2 mt-3">
                {[15, 25, 35, 51, 101].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setStemCount(preset)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      stemCount === preset
                        ? 'bg-[#3c101e] text-white shadow-xs'
                        : 'bg-pink-50/60 text-[#593b47] hover:bg-pink-100 border border-pink-200'
                    }`}
                  >
                    {preset} {isKa ? 'ღერი' : 'stems'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Packaging Style */}
            <div>
              <label className="text-xs font-bold text-[#3c101e] tracking-wider uppercase block mb-3">
                3. {isKa ? 'შეფუთვის სტილი' : 'Packaging & Presentation'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packagingOptions.map((pack) => (
                  <button
                    key={pack.id}
                    type="button"
                    onClick={() => setPackaging(pack.id as any)}
                    className={`p-3.5 rounded-2xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                      packaging === pack.id
                        ? 'bg-[#3c101e] border-[#3c101e] text-white shadow-xs'
                        : 'bg-white border-pink-200/80 text-[#2b141e] hover:border-pink-300'
                    }`}
                  >
                    <div>
                      <div className={`font-semibold text-xs ${packaging === pack.id ? 'text-white' : 'text-[#2b141e]'}`}>
                        {isKa ? pack.nameKa : pack.nameEn}
                      </div>
                      <div className={`text-[11px] font-bold ${packaging === pack.id ? 'text-pink-200' : 'text-pink-700'}`}>
                        +{pack.price} ₾
                      </div>
                    </div>
                    {packaging === pack.id && <Check className="w-4 h-4 text-white shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Extra Surprises */}
            <div>
              <label className="text-xs font-bold text-[#3c101e] tracking-wider uppercase block mb-3">
                4. {isKa ? 'დაამატეთ საჩუქარი' : 'Add Extra Magic & Gifts'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setAddChocolates(!addChocolates)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    addChocolates
                      ? 'bg-[#3c101e] border-[#3c101e] text-white'
                      : 'bg-white border-pink-200/80 text-[#2b141e] hover:border-pink-300'
                  }`}
                >
                  <div className="text-xl mb-1">🍫</div>
                  <div className="font-semibold text-xs">{isKa ? 'შოკოლადი' : 'Chocolates'}</div>
                  <div className={`text-[11px] font-bold ${addChocolates ? 'text-pink-200' : 'text-pink-700'}`}>+25 ₾</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAddPlushBear(!addPlushBear)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    addPlushBear
                      ? 'bg-[#3c101e] border-[#3c101e] text-white'
                      : 'bg-white border-pink-200/80 text-[#2b141e] hover:border-pink-300'
                  }`}
                >
                  <div className="text-xl mb-1">🧸</div>
                  <div className="font-semibold text-xs">{isKa ? 'რბილი დათუნია' : 'Plush Teddy Bear'}</div>
                  <div className={`text-[11px] font-bold ${addPlushBear ? 'text-pink-200' : 'text-pink-700'}`}>+35 ₾</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAddHeliumBalloons(!addHeliumBalloons)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    addHeliumBalloons
                      ? 'bg-[#3c101e] border-[#3c101e] text-white'
                      : 'bg-white border-pink-200/80 text-[#2b141e] hover:border-pink-300'
                  }`}
                >
                  <div className="text-xl mb-1">🎈</div>
                  <div className="font-semibold text-xs">{isKa ? 'ჰელიუმის ბუშტები' : 'Helium Balloons'}</div>
                  <div className={`text-[11px] font-bold ${addHeliumBalloons ? 'text-pink-200' : 'text-pink-700'}`}>+30 ₾</div>
                </button>
              </div>
            </div>

            {/* Step 5: Greeting Card Message */}
            <div>
              <label className="text-xs font-bold text-[#3c101e] tracking-wider uppercase block mb-2">
                5. {isKa ? 'უფასო მისალოცი ბარათის ტექსტი' : 'Free Handwritten Card Note'}
              </label>
              <textarea
                value={cardMessage}
                onChange={(e) => setCardMessage(e.target.value)}
                rows={2}
                placeholder={isKa ? 'ჩაწერეთ ტექსტი, რომელსაც ხელით დავწერთ ბარათზე...' : 'Write your custom greeting card note...'}
                className="w-full bg-white border border-pink-200 rounded-2xl p-3.5 text-sm text-[#2b141e] placeholder-gray-400 focus:outline-none focus:border-pink-500 shadow-2xs"
              />
            </div>
          </div>

          {/* Live Order Summary Card - Right Side */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#3c101e] p-6 sm:p-8 rounded-3xl text-white shadow-xl border border-pink-900/30">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-pink-900/50 mb-6">
                <span className="font-editorial text-2xl font-bold text-white">
                  {isKa ? 'შეკვეთის ინვოისი' : 'Order Calculation'}
                </span>
                <span className="bg-pink-900/60 text-pink-200 text-xs font-bold px-3 py-1 rounded-full border border-pink-700/40">
                  ⚡ 24/7 {isKa ? 'აქტიურია' : 'Active'}
                </span>
              </div>

              <div className="space-y-3.5 text-sm text-pink-100/90 mb-6">
                <div className="flex justify-between">
                  <span>
                    {flowerOptions.find(f => f.id === flowerType)?.[isKa ? 'nameKa' : 'nameEn']} ({stemCount} {isKa ? 'ღერი' : 'stems'})
                  </span>
                  <span className="font-bold text-white">{flowersBase} ₾</span>
                </div>

                <div className="flex justify-between">
                  <span>{packagingOptions.find(p => p.id === packaging)?.[isKa ? 'nameKa' : 'nameEn']}</span>
                  <span className="font-bold text-white">{packagingBase} ₾</span>
                </div>

                {addChocolates && (
                  <div className="flex justify-between text-pink-200">
                    <span>🍫 {isKa ? 'შოკოლადი' : 'Chocolates'}</span>
                    <span className="font-bold">+25 ₾</span>
                  </div>
                )}

                {addPlushBear && (
                  <div className="flex justify-between text-pink-200">
                    <span>🧸 {isKa ? 'დათუნია' : 'Plush Bear'}</span>
                    <span className="font-bold">+35 ₾</span>
                  </div>
                )}

                {addHeliumBalloons && (
                  <div className="flex justify-between text-pink-200">
                    <span>🎈 {isKa ? 'ბუშტები' : 'Balloons'}</span>
                    <span className="font-bold">+30 ₾</span>
                  </div>
                )}

                <div className="flex justify-between text-pink-200 text-xs pt-3 border-t border-pink-900/40">
                  <span>🚀 {isKa ? 'ექსპრეს მიტანა (თბილისი)' : 'Express Tbilisi Delivery'}</span>
                  <span className="font-bold text-emerald-400">{isKa ? 'სწრაფი მიტანა' : 'Fast delivery'}</span>
                </div>
              </div>
            </div>

            {/* Total Price & Submit */}
            <div className="pt-6 border-t border-pink-900/50">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-xs font-semibold text-pink-200 uppercase tracking-wider">{isKa ? 'სულ გადასახდელი:' : 'Total Payable:'}</span>
                <span className="font-editorial text-4xl font-bold text-white">
                  {totalPrice} ₾
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center space-x-2.5 bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-2xl font-bold text-base shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{isKa ? 'ამ თაიგულის შეკვეთა 24/7' : 'Order This Bouquet 24/7'}</span>
              </button>

              <div className="mt-4 text-center text-xs text-pink-200 flex items-center justify-center space-x-2">
                <Truck className="w-3.5 h-3.5 text-pink-300" />
                <span>{isKa ? 'ფოტოს გამოგიგზავნით WhatsApp-ში გაგზავნამდე' : 'Photo sent to WhatsApp before dispatch'}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


