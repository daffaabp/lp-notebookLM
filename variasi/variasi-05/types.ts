export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum Profession {
  YOUTUBER_PODCASTER = "YouTuber / Podcaster",
  WRITER_JOURNALIST = "Penulis Buku / Jurnalis",
  ACADEMIC_RESEARCHER = "Akademisi / Peneliti",
  OTHER = "Lainnya"
}