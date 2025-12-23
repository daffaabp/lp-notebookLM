import React from 'react';

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}