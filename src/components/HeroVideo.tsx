'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroVideo({ src }: { src: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When unmuted, we need to manually set the video property
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Unmute Toggle Button */}
      <div className="absolute bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 rounded-full bg-espresso/50 hover:bg-gold backdrop-blur-md flex items-center justify-center text-ivory hover:text-espresso transition-all shadow-lg border border-ivory/20"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
}
