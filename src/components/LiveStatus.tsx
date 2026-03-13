import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { HOURS } from '../constants';

export const LiveStatus: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextStatus, setNextStatus] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0-6
      const time = now.getHours() * 100 + now.getMinutes();

      // Find the rule for today
      // Mon-Wed (1,2,3), Thu (4), Fri-Sat (5,6), Sun (0)
      let todayRule = HOURS.find(h => {
        if (h.day === 'Mon-Wed') return [1, 2, 3].includes(day);
        if (h.day === 'Thu') return day === 4;
        if (h.day === 'Fri-Sat') return [5, 6].includes(day);
        if (h.day === 'Sun') return day === 0;
        return false;
      });

      if (todayRule) {
        const openTime = parseInt(todayRule.open.replace(':', ''));
        const closeTime = parseInt(todayRule.close.replace(':', ''));
        
        // Handle midnight closing (00:00)
        const effectiveCloseTime = closeTime === 0 ? 2400 : closeTime;

        if (time >= openTime && time < effectiveCloseTime) {
          setIsOpen(true);
          setNextStatus(`Closes at ${todayRule.close}`);
        } else {
          setIsOpen(false);
          setNextStatus(`Opens at ${todayRule.open}`);
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
      isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
    }`}>
      <span className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`} />
      <span>{isOpen ? 'OPEN NOW' : 'CLOSED'}</span>
      <span className="opacity-60 font-normal">|</span>
      <span className="opacity-80 font-medium">{nextStatus}</span>
    </div>
  );
};
