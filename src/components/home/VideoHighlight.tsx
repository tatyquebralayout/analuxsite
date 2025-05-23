import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import videoUrl from '../../assets/video/2video.mp4'; // Import the NEW video file
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Import SVG Icons as React Components (Vite specific - requires vite-plugin-svgr or similar)
import VerdeIcon from '../../assets/images/svg/verde.svg?react';
// import LivresIcon from '../../assets/images/svg/livres.svg?react'; // Removed old icon
import EstimulosIcon from '../../assets/images/svg/estimlos.svg?react'; // Added new icon
import OlharIcon from '../../assets/images/svg/olhar.svg?react';
import LimpezaIcon from '../../assets/images/svg/limpeza.svg?react';

const VideoHighlight: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust threshold for when animation triggers
    triggerOnce: true,
  });

  // Define mask ID
  const maskId = 'video-mask';

  const iconTextItems = [
    { Icon: VerdeIcon, text: 'Umweltanreicherung' },
    { Icon: EstimulosIcon, text: 'Physische & kognitive Anreize' }, // Changed Icon here
    { Icon: OlharIcon, text: 'Individuelle Betreuung' },
    { Icon: LimpezaIcon, text: 'Tägliche Hygieneprotokolle' },
  ];

  return (
    <section ref={ref} className="py-16 bg-neutral-surface min-h-[40rem] flex">
      {/* Changed items-center to items-stretch */}
      <motion.div
        className="container mx-auto px-4 flex flex-col lg:flex-row items-stretch gap-12 my-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column: Video - Added h-full */}
        <motion.div
          className="w-full lg:w-1/2 mb-8 lg:mb-0 h-full flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Container for aspect ratio - adjusted width/height potentially */}
          <div className="relative w-full max-w-xl mx-auto video-aspect-ratio-container">
            {/* Inline SVG for mask definition */}
            <svg viewBox="0 0 600 617" width="0" height="0" className="svg-defs-absolute">
              <defs>
                <mask id={maskId} maskUnits="userSpaceOnUse">
                  <g transform="translate(0, 617) scale(0.1, -0.1)">
                    {/* Paths define the mask shape */}
                    <path
                      fill="white"
                      d="M2585 5891 c-266 -95 -430 -313 -569 -756 -86 -277 -71 -661 38 -943 92 -238 255 -392 414 -392 168 0 297 70 423 232 154 197 239 394 310 718 6 25 13 115 17 200 10 197 -10 359 -64 520 -74 224 -190 359 -355 415 -84 29 -144 31 -214 6z"
                    />
                    <path
                      fill="white"
                      d="M4090 5300 c-78 -12 -104 -24 -195 -86 -98 -66 -110 -76 -161 -139 -137 -167 -236 -376 -283 -597 -17 -78 -21 -134 -21 -275 0 -98 4 -194 9 -213 6 -19 12 -48 15 -65 18 -98 31 -138 86 -250 72 -151 147 -236 251 -285 114 -54 250 -39 365 41 157 108 321 351 406 599 41 120 74 259 89 368 17 128 7 353 -20 457 -25 94 -91 228 -143 289 -45 53 -123 106 -154 106 -13 0 -26 5 -29 10 -20 33 -130 53 -215 40z"
                    />
                    <path
                      fill="white"
                      d="M980 4618 c-79 -12 -152 -49 -217 -110 -206 -193 -285 -545 -210 -928 62 -322 172 -551 337 -703 102 -95 231 -138 323 -108 50 17 155 87 195 130 37 40 142 193 142 207 0 5 9 25 19 45 53 99 102 310 108 465 12 320 -86 612 -272 812 -138 148 -281 212 -425 190z"
                    />
                    <path
                      fill="white"
                      d="M5153 3885 c-298 -83 -536 -396 -627 -825 -19 -86 -22 -309 -6 -410 16 -101 48 -195 105 -316 64 -132 126 -206 217 -255 58 -31 70 -34 149 -34 78 0 91 3 160 37 249 123 459 480 543 923 49 259 14 504 -97 677 -107 165 -286 248 -444 203z"
                    />
                    <path
                      fill="white"
                      d="M2690 3300 c-8 -5 -26 -10 -40 -10 -14 0 -61 -14 -105 -31 -233 -89 -388 -226 -627 -556 -231 -317 -391 -468 -694 -652 -117 -70 -213 -155 -296 -260 -64 -80 -98 -139 -98 -171 0 -11 -13 -33 -29 -48 -77 -73 -139 -368 -112 -528 19 -110 42 -171 104 -273 102 -170 241 -280 443 -353 88 -32 90 -32 279 -32 217 0 267 9 555 104 382 126 595 159 875 138 159 -12 321 -48 480 -108 214 -79 421 -147 510 -165 124 -26 266 -30 357 -12 452 94 685 477 548 902 -80 247 -192 399 -435 589 -125 98 -177 148 -269 256 -73 86 -181 243 -230 335 -124 232 -289 468 -417 595 -147 146 -319 243 -489 276 -85 16 -287 19 -310 4z"
                    />
                  </g>
                </mask>
              </defs>
            </svg>

            {/* Video element - Apply mask */}
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg video-paw-mask"
              style={{ '--mask-url': `url(#${maskId})` } as React.CSSProperties}
            />
          </div>
        </motion.div>

        {/* Right Column: Text Content - Changed vertical alignment */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left h-full flex flex-col justify-start pt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="headline3 mb-2 text-primary font-sour-gummy text-center">
            Ein Paradies für Ihren Hund
          </h1>
          <h3 className="headline5 mb-4 text-primary text-center">Mehr als nur Betreuung</h3>

          {/* Icon and Text Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
            {iconTextItems.map(({ Icon, text }, index) => {
              // Apply larger size specifically to EstimulosIcon
              const iconSizeClass = Icon === EstimulosIcon ? 'w-28 h-28' : 'w-24 h-24';
              return (
                <div
                  key={index}
                  className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Icon
                    className={`${iconSizeClass} text-primary flex-shrink-0`}
                    aria-hidden="true"
                  />
                  <span className="body1 text-primary font-medium">{text}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom Titles & Button */}
          <h1 className="headline4 mb-2 text-primary text-center">Engagement für Wohlbefinden</h1>
          <h3 className="subtitle1 text-primary text-center">
            Sicherheit und Spass an erster Stelle
          </h3>
          <div className="mt-4 flex justify-center">
            <Link to="/services" className="btn-primary w-fit">
              Entdecken Sie unsere Angebote
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoHighlight;
