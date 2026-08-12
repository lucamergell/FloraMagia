import React, { useState } from 'react';
import { FlowerItem, Language, BouquetCustomization } from '../types';
import { X, ShoppingBag, Phone, CheckCircle } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedFlowerItem?: FlowerItem | null;
  customBouquetData?: BouquetCustomization | null;
  customPriceGel?: number | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedFlowerItem,
  customBouquetData,
  customPriceGel,
}) => {
  if (!isOpen) return null;

  const isKa = lang === 'ka';

  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryTimeOption, setDeliveryTimeOption] = useState('express_now');
  const [cardNote, setCardNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [submitting, setSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any | null>(null);

  // Determine Item Title and Total Price
  let itemSummary = isKa ? 'ინდივიდუალური თაიგული' : 'Custom Flower Bouquet';
  let totalPrice = 150;

  if (selectedFlowerItem) {
    itemSummary = isKa ? selectedFlowerItem.nameKa : selectedFlowerItem.nameEn;
    totalPrice = selectedFlowerItem.priceGel;
  } else if (customBouquetData && customPriceGel) {
    itemSummary = `${isKa ? 'ინდივიდუალური თაიგული' : 'Custom Bouquet'} (${customBouquetData.stemCount} ${isKa ? 'ღერი' : 'stems'})`;
    totalPrice = customPriceGel;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      itemSummary,
      totalGel: totalPrice,
      recipientName,
      recipientPhone,
      deliveryAddress,
      deliveryTimeOption,
      cardMessage: cardNote || customBouquetData?.cardMessage || '',
      paymentMethod,
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setCompletedOrder(data);
      }
    } catch (err) {
      console.error('Order submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-white border border-pink-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-[#2b141e] relative shadow-xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-xl p-1 rounded-full hover:bg-pink-50 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {!completedOrder ? (
          <div>
            <div className="mb-6 pb-4 border-b border-pink-100">
              <span className="text-xs font-bold text-pink-600 tracking-wider uppercase block mb-1">
                ⚡ 24/7 {isKa ? 'ექსპრეს შეკვეთა თბილისში' : '24/7 Express Order in Tbilisi'}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2b141e]">
                {isKa ? 'შეკვეთის გაფორმება' : 'Complete Your Flower Order'}
              </h3>
            </div>

            {/* Selected Product Summary Box */}
            <div className="bg-pink-50 p-4 rounded-2xl border border-pink-200 mb-6 flex justify-between items-center">
              <div>
                <span className="text-xs text-pink-700 font-semibold block">
                  {isKa ? 'არჩეული თაიგული:' : 'Selected Bouquet:'}
                </span>
                <span className="font-bold text-base text-[#2b141e]">{itemSummary}</span>
              </div>
              <span className="text-2xl font-bold text-pink-700">{totalPrice} ₾</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-pink-700 uppercase block mb-1">
                    {isKa ? 'მიმღების / შემკვეთის სახელი' : 'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder={isKa ? 'მაგ: გიორგი' : 'e.g. Giorgi'}
                    className="w-full bg-[#fff8fa] border border-pink-200 rounded-xl p-3 text-sm text-[#2b141e] focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-pink-700 uppercase block mb-1">
                    {isKa ? 'ტელეფონის ნომერი' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    placeholder="551 xx xx xx"
                    className="w-full bg-[#fff8fa] border border-pink-200 rounded-xl p-3 text-sm text-[#2b141e] focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-pink-700 uppercase block mb-1">
                  {isKa ? 'მიტანის მისამართი თბილისში' : 'Tbilisi Delivery Address'}
                </label>
                <input
                  type="text"
                  required
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder={isKa ? 'მაგ: საბურთალო, ვაჟა-ფშაველას #12, ბინა 15' : 'e.g. Saburtalo, Vake, Sololaki...'}
                  className="w-full bg-[#fff8fa] border border-pink-200 rounded-xl p-3 text-sm text-[#2b141e] focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-pink-700 uppercase block mb-1">
                  {isKa ? 'მიტანის დრო' : 'Delivery Timing'}
                </label>
                <select
                  value={deliveryTimeOption}
                  onChange={(e) => setDeliveryTimeOption(e.target.value)}
                  className="w-full bg-[#fff8fa] border border-pink-200 rounded-xl p-3 text-sm text-[#2b141e] focus:outline-none focus:border-pink-500"
                >
                  <option value="express_now">🚀 {isKa ? 'სწრაფი მიტანა (24/7)' : 'Fast Delivery (24/7)'}</option>
                  <option value="night_surprise">🌙 {isKa ? 'ღამის ექსპრეს სიურპრიზი (2:00 - 6:00)' : 'Midnight Surprise (2 AM - 6 AM)'}</option>
                  <option value="pickup">📍 {isKa ? 'წამოვიღებ მაღაზიიდან (უნივერსიტეტის #1)' : 'Store Pickup (1 University St)'}</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-pink-700 uppercase block mb-1">
                  {isKa ? 'მისალოცი ბარათის ტექსტი (უფასო)' : 'Free Greeting Card Note'}
                </label>
                <textarea
                  value={cardNote}
                  onChange={(e) => setCardNote(e.target.value)}
                  rows={2}
                  placeholder={isKa ? 'დაწერეთ სასურველი ტექსტი...' : 'Optional gift message...'}
                  className="w-full bg-[#fff8fa] border border-pink-200 rounded-xl p-3 text-sm text-[#2b141e] focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-bold text-base shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{submitting ? (isKa ? 'მუშავდება...' : 'Processing...') : (isKa ? 'შეკვეთის დადასტურება 24/7' : 'Confirm Order 24/7')}</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+995551688841"
                    className="flex items-center justify-center space-x-2 bg-pink-50 hover:bg-pink-100 text-pink-700 py-3 rounded-xl font-bold text-xs border border-pink-200"
                  >
                    <Phone className="w-4 h-4 text-pink-600" />
                    <span>551 68 88 41</span>
                  </a>

                  <a
                    href={`https://wa.me/995551688841?text=${encodeURIComponent('გამარჯობა! მსურს ყვავილების შეკვეთა: ' + itemSummary)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs"
                  >
                    <span>💬 WhatsApp Order</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Order Success Confirmation */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="font-editorial text-3xl font-bold text-pink-700">
              {isKa ? 'შეკვეთა მიღებულია!' : 'Order Received Successfully!'}
            </h3>

            <p className="text-sm text-[#593b47] leading-relaxed max-w-md mx-auto">
              {isKa
                ? `თქვენი შეკვეთის ნომერია #${completedOrder.orderId}. ფლორისტი უკვე აწყობს თაიგულს. ფოტოს გამოგიგზავნით WhatsApp-ში კურიერის გამოსვლამდე.`
                : `Your order ID is #${completedOrder.orderId}. Our florist is preparing your flowers now and will send a photo to WhatsApp before dispatch.`}
            </p>

            {completedOrder.whatsappUrl && (
              <a
                href={completedOrder.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-base shadow-md"
              >
                <span>💬 {isKa ? 'გადადი WhatsApp-ში სწრაფი ჩატისთვის' : 'Open WhatsApp Instant Confirmation'}</span>
              </a>
            )}

            <div>
              <button
                onClick={onClose}
                className="text-xs text-pink-700 hover:underline font-semibold"
              >
                {isKa ? 'დახურვა' : 'Close Window'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

