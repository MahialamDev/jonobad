const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden bg-[#0A0A0F] text-white wrapper pt-20 lg:pt-0">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(230,57,70,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(45,198,83,0.08),transparent_40%)]"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center py-10 lg:py-0">
        <div className="w-fit mb-8 px-4 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
          🇧🇩 Bangladesh's People Platform
        </div>

        <h1 className="leading-none">
          <span className="block text-6xl sm:text-7xl lg:text-[8rem] font-black tracking-wider">
            JONO
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-[8rem] font-black text-red-500 tracking-wider">
            BAD
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl text-green-500 mt-2">
            জনবাদ
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mt-4">
          Voice of the People
        </p>

        <p className="max-w-xl mt-8 text-sm sm:text-base text-gray-500 leading-7 sm:leading-8">
          Bangladesh's first all-in-one civic super-app — blood donation,
          justice reporting, P2P transfers, breaking news, and emergency SOS.
          One platform. Every citizen.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-xl font-semibold w-full sm:w-auto">
            🩸 Donate Blood Now
          </button>
          <button className="border border-white/10 hover:border-white/20 bg-[#16161F] transition px-8 py-4 rounded-xl w-full sm:w-auto">
            Explore Platform →
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 sm:gap-16 mt-14 pt-8 border-t border-white/10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black">10K+</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mt-2">
              Blood Donors
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-black">500+</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mt-2">
              Cases Reported
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-black">64</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mt-2">
              Districts
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT (Mobile Mockup) */}
      <div className="relative z-10 flex items-center justify-center py-12 lg:py-0">
        
        <div className="w-[280px] h-[560px] rounded-[40px] border border-white/10 bg-[#16161F] shadow-2xl lg:rotate-[-4deg] overflow-hidden relative">
          
          {/* Notch */}
          <div className="w-28 h-7 bg-black rounded-b-3xl mx-auto"></div>

          <div className="p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-red-500 font-bold tracking-widest text-sm">
                JONOBAD
              </h3>
              <span className="text-xs text-gray-500">🔔 3</span>
            </div>

            {/* Alert */}
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-3 text-[10px] font-semibold mb-3">
              🆘 URGENT: A+ Blood needed — Dhaka Medical
            </div>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-4">
              <h4 className="text-xs font-semibold">
                <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded mr-2">
                  B+
                </span>
                Rahim needs blood donor
              </h4>
              <p className="text-[10px] text-gray-500 mt-1">
                📍 Chittagong · 2 min ago ● LIVE
              </p>
            </div>

            {/* Feed */}
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-4">
              News Feed
            </p>

            <div className="space-y-4">
              {/* Feed Item 1 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold shrink-0">
                  JB
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold">Justice Board</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    New complaint filed in Sylhet district...
                  </p>
                </div>
              </div>

              {/* Feed Item 2 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold shrink-0">
                  RK
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold">Rina Khatun</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    💸 Sent ৳500 to flood relief via Jonobad Pay
                  </p>
                </div>
              </div>

              {/* Feed Item 3 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold shrink-0">
                  BD
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold">BD Alert</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    ⚠️ Flash flood warning issued for Sunamganj
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-white/10 bg-[#16161F]/90 flex justify-around items-center text-lg">
            <span>🏠</span>
            <span>🩸</span>
            <span>⚖️</span>
            <span>💸</span>
            <span>👤</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;