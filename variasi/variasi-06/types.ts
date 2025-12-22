export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface CourseDetails {
  price: string;
  originalPrice: string;
  date: string;
  time: string;
  spots: number;
}
