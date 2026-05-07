const Headline = () => {
  return (
    <div className="bg-red-500 hidden md:flex overflow-hidden whitespace-nowrap py-2 sm:py-3 border-y border-white/10 select-none">
      <div className="animate-marquee inline-block text-white text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-widest uppercase font-mono font-bold">
        {/* টেক্সটটি এমনভাবে সাজানো হয়েছে যাতে -50% এনিমেশনে স্মুথ লুপ হয় */}
        <span>
          🩸 BLOOD DONATION · ⚖️ JUSTICE FOR ALL · 💸 P2P TRANSFER · 📢
          CITIZEN NEWS · 🆘 SOS ALERT · 🛡️ RIGHTS PROTECTION · 🤝 COMMUNITY
          HELP · 🩸 BLOOD DONATION · ⚖️ JUSTICE FOR ALL · 💸 P2P TRANSFER · 📢
          CITIZEN NEWS · 🆘 SOS ALERT · 🛡️ RIGHTS PROTECTION · 🤝 COMMUNITY HELP ·
        </span>
      </div>
    </div>
  );
};

export default Headline;