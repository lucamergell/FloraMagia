import React, { useState } from 'react';
import { Sparkles, Bot, Send, Heart, Loader2, BookOpen, Gift } from 'lucide-react';
import { Language } from '../types';

interface AISommelierProps {
  lang: Language;
  onOpenOrderModal: () => void;
}

export const AISommelier: React.FC<AISommelierProps> = ({ lang, onOpenOrderModal }) => {
  const isKa = lang === 'ka';

  const [occasion, setOccasion] = useState('');
  const [recipient, setRecipient] = useState('');
  const [budgetGel, setBudgetGel] = useState('150');
  const [mood, setMood] = useState('Romantic & Elegant');
  const [extraDetails, setExtraDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRecommendation(null);

    try {
      const res = await fetch('/api/ai-sommelier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          occasion,
          recipient,
          budgetGel,
          mood,
          extraDetails,
          language: lang,
        }),
      });

      const data = await res.json();
      if (data.success && data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setRecommendation(
          isKa
            ? 'Flora Magia 24/7 რჩევა: გირჩევთ 51 წითელი ვარდის თაიგულს ან პეონების სასაჩუქრე ყუთს! დეტალებისთვის დარეკეთ: 551 68 88 41'
            : 'Flora Magia 24/7 Recommendation: We suggest our 51 Red Roses or Luxury Peony Box! For instant custom help call 551 68 88 41.'
        );
      }
    } catch (err) {
      console.error('AI Sommelier error:', err);
      setRecommendation(
        isKa
          ? 'Flora Magia 24/7 რჩევა: გირჩევთ 51 წითელი ვარდის თაიგულს ან პეონების სასაჩუქრე ყუთს! დარეკეთ 551 68 88 41'
          : 'Flora Magia Suggestion: 51 Ecuadorian Red Roses or Peony Box. Call us 24/7 at 551 68 88 41.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-sommelier" className="py-20 bg-[#071710] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#4a1220]/80 px-3.5 py-1.5 rounded-full border border-pink-500/30 mb-4 shadow-lg">
            <Sparkles className="w-4 h-4 text-pink-300 animate-pulse" />
            <span className="text-xs font-bold text-pink-200 tracking-wider uppercase">
              {isKa ? 'AI ფლორისტი & როლიკური კონსულტანტი' : 'AI Floral Sommelier & Advisor'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white mb-4">
            {isKa ? 'არ იცით, რომელი ყვავილი აირჩიოთ?' : 'Need Help Choosing the Perfect Flowers?'}
          </h2>

          <p className="text-[#e5dcd3]/80 text-sm sm:text-base">
            {isKa
              ? 'ჩვენი ხელოვნური ინტელექტის ფლორისტი დაგეხმარებათ შეარჩიოთ იდეალური თაიგული შემთხვევის, ბიუჯეტისა და ადრესატის მიხედვით, და დაგიწერთ ემოციურ მისალოც ბარათს.'
              : 'Our AI Floral Sommelier will curate the ideal bouquet for your specific moment, budget, and recipient, plus craft heartwarming greeting card notes.'}
          </p>
        </div>

        {/* Interactive Form & Result Layout */}
        <div className="bg-[#0f2a20] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                1. {isKa ? 'რა შემთხვევაა?' : 'Occasion'}
              </label>
              <input
                type="text"
                required
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder={isKa ? 'მაგ: დაბადების დღე, სიყვარულის ახსნა, ბოდიში, იუბილე...' : 'e.g. Birthday, Anniversary, Apology, Proposal...'}
                className="w-full bg-[#0b1f17] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                2. {isKa ? 'ვისთვისაა საჩუქარი?' : 'Recipient'}
              </label>
              <input
                type="text"
                required
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder={isKa ? 'მაგ: საცოლე, დედა, მეუღლე, კოლეგა...' : 'e.g. Fiancee, Mother, Wife, Colleague...'}
                className="w-full bg-[#0b1f17] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                3. {isKa ? 'სავარაუდო ბიუჯეტი (₾)' : 'Estimated Budget (GEL ₾)'}
              </label>
              <select
                value={budgetGel}
                onChange={(e) => setBudgetGel(e.target.value)}
                className="w-full bg-[#0b1f17] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="100-150">100 - 150 ₾</option>
                <option value="150-250">150 - 250 ₾</option>
                <option value="250-400">250 - 400 ₾</option>
                <option value="400+">400+ ₾ (VIP)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                4. {isKa ? 'განწყობა / სტილი' : 'Mood & Atmosphere'}
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-[#0b1f17] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="Romantic & Passionate">{isKa ? 'რომანტიკული და ვნებიანი' : 'Romantic & Passionate'}</option>
                <option value="Gentle & Soft Pastel">{isKa ? 'ნაზი და პასტელური' : 'Gentle & Soft Pastel'}</option>
                <option value="Luxury & Grand">{isKa ? 'ლუქს კლასის და გრანდიოზული' : 'Luxury & Grand'}</option>
                <option value="Bright & Joyful">{isKa ? 'მზიანი და მხიარული' : 'Bright & Joyful'}</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#d4af37] to-[#b89320] hover:from-[#e5bd43] hover:to-[#cfa328] text-[#0b1f17] py-4 rounded-xl font-bold text-base shadow-xl transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{isKa ? 'AI ფლორისტი ფიქრობს...' : 'AI Florist Generating Advice...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>{isKa ? 'რჩევის მიღება & ბარათის ტექსტის დაწერა' : 'Get Personal Recommendation'}</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* AI Output Box */}
          {recommendation && (
            <div className="bg-[#0b1f17] rounded-2xl border border-[#d4af37]/40 p-6 sm:p-8 animate-fadeIn text-[#e5dcd3] space-y-4 shadow-inner">
              <div className="flex items-center space-x-2 text-[#d4af37] font-bold text-sm pb-3 border-b border-[#d4af37]/20">
                <Bot className="w-5 h-5" />
                <span>{isKa ? 'Flora Magia AI ფლორისტის რეკომენდაცია' : 'Flora Magia AI Recommendation'}</span>
              </div>

              <div className="text-sm sm:text-base leading-relaxed whitespace-pre-line font-editorial font-medium text-white">
                {recommendation}
              </div>

              <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-emerald-400 font-semibold">
                  🟢 {isKa ? 'მზადაა 24/7 სწრაფი მიტანისთვის თბილისში' : 'Ready for fast 24/7 Tbilisi Delivery'}
                </span>

                <button
                  onClick={onOpenOrderModal}
                  className="bg-gradient-to-r from-[#d4af37] to-[#b89320] text-[#0b1f17] px-6 py-2.5 rounded-xl font-bold text-xs shadow-md"
                >
                  {isKa ? 'ამ რჩევის მიხედვით შეკვეთა' : 'Order This Recommendation'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
