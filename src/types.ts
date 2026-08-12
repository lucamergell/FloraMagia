export type Language = 'ka' | 'en';

export interface FlowerItem {
  id: string;
  nameKa: string;
  nameEn: string;
  category: 'roses' | 'peonies' | 'boxes' | 'mono' | 'exotic' | 'plants';
  priceGel: number;
  oldPriceGel?: number;
  image: string;
  descriptionKa: string;
  descriptionEn: string;
  compositionKa: string;
  compositionEn: string;
  isPopular?: boolean;
  isNew?: boolean;
  is247Available?: boolean;
  recipients?: string[];
}

export interface BouquetCustomization {
  flowerType: 'red_roses' | 'pink_roses' | 'white_roses' | 'peonies' | 'hydrangeas' | 'mixed_magic';
  stemCount: number;
  packaging: 'classic_paper' | 'velvet_box' | 'hat_box' | 'glass_vase' | 'premium_wrap';
  cardMessage: string;
  addChocolates: boolean;
  addPlushBear: boolean;
  addHeliumBalloons: boolean;
  deliveryOption: 'express_tbilisi' | 'pickup_university_st' | 'scheduled_night';
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
}

export interface Testimonial {
  id: string;
  authorKa: string;
  authorEn: string;
  locationKa: string;
  locationEn: string;
  textKa: string;
  textEn: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  questionKa: string;
  questionEn: string;
  answerKa: string;
  answerEn: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  postUrl: string;
  shortcode?: string;
  captionKa: string;
  captionEn: string;
  likesCount?: number;
  commentsCount?: number;
  timestamp?: string;
  category?: string;
  tags?: string[];
}
