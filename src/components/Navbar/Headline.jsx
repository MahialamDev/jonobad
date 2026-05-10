'use client'
import React from 'react';

const Headline = () => {
  const newsItems = [
    "🩸 BLOOD DONATION",
    "⚖️ JUSTICE FOR ALL",
    "💸 P2P TRANSFER",
    "📢 CITIZEN NEWS",
    "🆘 SOS ALERT",
    "🛡️ RIGHTS PROTECTION",
    "🤝 COMMUNITY HELP"
  ];

  // লুপ স্মুথ করার জন্য কন্টেন্টকে রিপিট করা
  const content = [...newsItems, ...newsItems].join(" · ");

  return (
    <div className="bg-primary hidden md:flex overflow-hidden whitespace-nowrap py-3 border-y border-white/10 select-none relative z-40">
      <div className="flex animate-marquee">
        <span className="text-white text-[10px] sm:text-xs tracking-[0.2em] uppercase font-black italic px-4">
          {content} · {content}
        </span>
      </div>

      {/* Tailwind Config এ এই এনিমেশনটি অ্যাড করতে হবে */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Headline;