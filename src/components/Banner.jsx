import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden ">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 ">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-600 text-sm font-medium px-5 py-2 rounded-full">
            ✨ Frontier AI Models
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-blue-800">
            One Subscription.
            <br />
            <span className="
            bg-linear-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
              All the AIs You Need
            </span>
          </h1>

          <p className="text-lg text-zinc-500 max-w-lg">
            Experience the full spectrum of frontier intelligence — all the most
            advanced AI models, unified under a single, powerful subscription.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-900 hover:bg-blue-800 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/30 flex items-center gap-3 group text-white">
              Get Unlimited Access
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-500 pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;