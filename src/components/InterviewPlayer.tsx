'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function InterviewPlayer({ src, poster = '/videos/interview-poster.jpg' }: { src: string; poster?: string }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "50px" });

  // Pause automatically if user scrolls away while video is playing
  useEffect(() => {
    if (!isInView && playing && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [isInView, playing]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        videoRef.current.muted = true;
      } else {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-[32px] overflow-hidden shadow-soft cursor-pointer isolate group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        muted={!playing}
        loop
        playsInline
        preload="metadata"
      />
      <div
        className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
          playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing && !hovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center shadow-lg text-espresso"
        >
          {playing ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
        </motion.div>
      </div>
    </div>
  );
}
