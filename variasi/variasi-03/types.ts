export interface FAQItem {
  question: string;
  answer: string;
  citations: number[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface WebinarDetails {
  title: string;
  date: string;
  priceOriginal: string;
  priceDiscount: string;
  features: string[];
}
