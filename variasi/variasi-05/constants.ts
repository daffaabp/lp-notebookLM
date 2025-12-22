import { FAQItem, Testimonial, PainPoint, Benefit } from './types';

export const GRADIENT_CLASS = "bg-gradient-to-br from-[#4c1d95] to-[#1e1b4b]";

export const PAIN_POINTS: PainPoint[] = [
  {
    iconClass: "fas fa-book-dead",
    title: "Cerita Tidak Konsisten",
    description: "Terlalu banyak karakter dan detail dunia cerita? Lupa apa yang ditulis di bab awal bisa menghancurkan alur buku Anda."
  },
  {
    iconClass: "fas fa-hourglass-end",
    title: "Banjir Informasi Saat Riset",
    description: "Menghabiskan 15 jam hanya untuk riset video YouTube atau artikel sebelum menulis kata pertama? Itu sangat melelahkan pikiran."
  },
  {
    iconClass: "fas fa-brain",
    title: "Macet Ide (Writer's Block)",
    description: "Stres menatap layar kosong karena bingung menyusun ribuan catatan yang terpencar-pencar."
  }
];

export const BENEFITS: Benefit[] = [
  { text: "Pangkas waktu riset hingga 75% lebih cepat." },
  { text: "Cek Fakta Cerita instan dengan Referensi Otomatis." },
  { text: "Otomasi Kerangka Tulisan dari referensi video YouTube." },
  { text: "Visualisasi Ide dengan Peta Konsep interaktif otomatis." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "NotebookLM sangat membantu tim kreatif kami beralih dari bacaan teknis yang membosankan ke perencanaan kreatif hanya dalam hitungan menit.",
    author: "Team Lead",
    role: "Rivian Innovation Group"
  },
  {
    quote: "Dulu riset naskah YouTube bisa seminggu, sekarang cukup satu sore. AI ini paham karakter tulisan saya lebih baik dari saya sendiri!",
    author: "Scriptwriter",
    role: "1M+ Subs Channel"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Apa bedanya NotebookLM dengan ChatGPT?",
    answer: "NotebookLM bersifat 'Terjaga'. Ia tidak akan mengarang bebas dari internet, melainkan hanya menjawab berdasarkan riset, catatan, dan naskah yang KITA berikan, lengkap dengan penunjuk sumbernya."
  },
  {
    question: "Apakah aman mengunggah naskah rahasia saya?",
    answer: "Sangat aman. Google menjamin data yang diunggah ke NotebookLM tidak digunakan untuk melatih model AI publik mereka. Khusus versi Enterprise, data tetap berada dalam kendali penuh organisasi Anda."
  },
  {
    question: "Apakah mendukung Bahasa Indonesia untuk Audio Podcast-nya?",
    answer: "Ya, NotebookLM mendukung penuh input dan output dalam lebih dari 80 bahasa, termasuk Bahasa Indonesia yang terdengar alami."
  }
];