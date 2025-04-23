import React from 'react';
import videoUrl from '../../assets/video/2video.mp4'; // Import the NEW video file
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoHighlight: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Define mask ID
  const maskId = 'video-mask';

  return (
    <section ref={ref} className="py-12 bg-neutral-surface">
      <motion.div
        className="container mx-auto px-4 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Container to define size and aspect ratio - Set max-w-xl */}
        <div className="relative w-full max-w-xl" style={{ aspectRatio: '600 / 617' }}>
          {/* Inline SVG for mask definition */}
          <svg
            viewBox="0 0 600 617" // Set viewBox for userSpaceOnUse coordinates
            width="0"
            height="0"
            style={{ position: 'absolute' }} // Hide the SVG definition visually
          >
            <defs>
              <mask id={maskId} maskUnits="userSpaceOnUse">
                {/* Apply transform to a group containing the paths */}
                <g transform="translate(0, 617) scale(0.1, -0.1)">
                  {/* Paths define the mask shape, fill white makes them opaque in the mask */}
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
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              maskImage: `url(#${maskId})`,
              WebkitMaskImage: `url(#${maskId})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoHighlight;
