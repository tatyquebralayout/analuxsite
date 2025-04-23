import React from 'react';
import VideoIcon from '../../assets/images/svg/video.svg?react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoHighlight: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-12 bg-neutral-surface">
      <motion.div
        className="container mx-auto px-4 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Adjust size and color as needed */}
        <VideoIcon className="w-full max-w-md h-auto text-primary" />
      </motion.div>
    </section>
  );
};

export default VideoHighlight;
