import React from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export enum LegalArea {
  LITIGATION = "Litigasi",
  CORPORATE = "Korporasi / Kontrak",
  COMPLIANCE = "Compliance / Kepatuhan",
  NOTARY = "Notaris / Legal Staff"
}