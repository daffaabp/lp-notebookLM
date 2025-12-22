import React from 'react';
import { Flame } from 'lucide-react';

export const UrgencyBar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white text-center py-3 text-sm font-bold sticky top-0 z-50 flex justify-center items-center gap-2 shadow-md">
      <Flame className="w-4 h-4" />
      <span>Kuota Terbatas! Hanya Tersisa 20 Slot untuk Webinar ASN Modern ini.</span>
    </div>
  );
};