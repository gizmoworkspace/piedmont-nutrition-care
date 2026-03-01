"use client";

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        className="w-full h-full max-w-[450px] opacity-80"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6bb556" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6bb556" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E69138" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E69138" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8fca7a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b6c2b" stopOpacity="0.1" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow orbs */}
        <circle cx="250" cy="250" r="200" fill="url(#glow1)" />
        <circle cx="300" cy="200" r="140" fill="url(#glow2)" />

        {/* Outer organic ring */}
        <ellipse cx="250" cy="250" rx="190" ry="185" stroke="#6bb556" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 8" />
        <ellipse cx="250" cy="250" rx="160" ry="155" stroke="#6bb556" strokeWidth="0.5" opacity="0.1" />

        {/* Inner system rings */}
        <circle cx="250" cy="250" r="120" stroke="#8fca7a" strokeWidth="1" opacity="0.2" />
        <circle cx="250" cy="250" r="85" stroke="#8fca7a" strokeWidth="0.8" opacity="0.25" />
        <circle cx="250" cy="250" r="50" stroke="#6bb556" strokeWidth="1.2" opacity="0.3" filter="url(#softGlow)" />

        {/* Core glow */}
        <circle cx="250" cy="250" r="35" fill="#6bb556" opacity="0.08" />
        <circle cx="250" cy="250" r="18" fill="#6bb556" opacity="0.12" />

        {/* Botanical leaf shapes — top */}
        <path d="M250 160 Q265 120 250 70 Q235 120 250 160Z" fill="url(#leafGrad)" />
        <path d="M250 160 Q275 125 290 80" stroke="#8fca7a" strokeWidth="0.6" opacity="0.2" fill="none" />

        {/* Right leaf cluster */}
        <path d="M310 250 Q360 235 410 250 Q360 265 310 250Z" fill="url(#leafGrad)" opacity="0.8" />
        <path d="M320 230 Q355 210 380 195" stroke="#8fca7a" strokeWidth="0.5" opacity="0.15" fill="none" />
        <path d="M325 270 Q355 290 375 305" stroke="#8fca7a" strokeWidth="0.5" opacity="0.15" fill="none" />

        {/* Bottom leaf */}
        <path d="M250 340 Q265 380 250 430 Q235 380 250 340Z" fill="url(#leafGrad)" opacity="0.7" />

        {/* Left leaf cluster */}
        <path d="M190 250 Q140 235 90 250 Q140 265 190 250Z" fill="url(#leafGrad)" opacity="0.6" />
        <path d="M175 225 Q145 205 120 190" stroke="#8fca7a" strokeWidth="0.5" opacity="0.12" fill="none" />

        {/* Diagonal leaves */}
        <path d="M310 170 Q340 140 370 120 Q345 155 310 170Z" fill="#6bb556" opacity="0.08" />
        <path d="M190 330 Q160 360 130 380 Q155 345 190 330Z" fill="#6bb556" opacity="0.08" />

        {/* Nutrient particles — scattered dots */}
        <circle cx="250" cy="250" r="4" fill="#6bb556" opacity="0.5" filter="url(#softGlow)" />
        <circle cx="280" cy="210" r="3" fill="#E69138" opacity="0.4" />
        <circle cx="220" cy="290" r="3" fill="#E69138" opacity="0.4" />
        <circle cx="300" cy="280" r="2.5" fill="#8fca7a" opacity="0.35" />
        <circle cx="200" cy="220" r="2.5" fill="#8fca7a" opacity="0.35" />
        <circle cx="270" cy="170" r="2" fill="#E69138" opacity="0.3" />
        <circle cx="230" cy="330" r="2" fill="#E69138" opacity="0.3" />
        <circle cx="330" cy="250" r="2" fill="#6bb556" opacity="0.25" />
        <circle cx="170" cy="250" r="2" fill="#6bb556" opacity="0.25" />
        <circle cx="310" cy="310" r="1.5" fill="#8fca7a" opacity="0.2" />
        <circle cx="190" cy="190" r="1.5" fill="#8fca7a" opacity="0.2" />
        <circle cx="250" cy="140" r="1.5" fill="#E69138" opacity="0.2" />
        <circle cx="250" cy="360" r="1.5" fill="#E69138" opacity="0.2" />
        <circle cx="350" cy="220" r="1.5" fill="#6bb556" opacity="0.15" />
        <circle cx="150" cy="280" r="1.5" fill="#6bb556" opacity="0.15" />

        {/* Flowing connection lines between particles */}
        <path d="M250 250 Q265 230 280 210" stroke="#8fca7a" strokeWidth="0.4" opacity="0.15" fill="none" />
        <path d="M250 250 Q235 270 220 290" stroke="#8fca7a" strokeWidth="0.4" opacity="0.15" fill="none" />
        <path d="M250 250 Q270 260 300 280" stroke="#E69138" strokeWidth="0.3" opacity="0.1" fill="none" />
        <path d="M250 250 Q230 240 200 220" stroke="#E69138" strokeWidth="0.3" opacity="0.1" fill="none" />
      </svg>
    </div>
  );
}
