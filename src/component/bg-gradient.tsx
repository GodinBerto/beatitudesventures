const GradientBackground = () => {
  return (
    <div className="relative w-full h-[100px] overflow-hidden">
      <svg
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 100 C300 0, 900 200, 1200 100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="40"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#007cf0" />
            <stop offset="50%" stopColor="#7928ca" />
            <stop offset="100%" stopColor="#ff4d4d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientBackground;
