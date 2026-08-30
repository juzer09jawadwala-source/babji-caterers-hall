'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
        setOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="mb-4 bg-white rounded-2xl shadow-soft p-4 w-64 border border-sand/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-semibold text-espresso">Chat with us</h4>
                  <button onClick={() => setOpen(false)} className="text-espresso/50 hover:text-espresso">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-ink/70 mb-4">Choose an owner to start a conversation.</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/918976086766"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-ivory hover:bg-sand transition-colors p-3 rounded-xl border border-sand"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-espresso">Kasim</span>
                      <span className="text-[10px] text-ink/50 uppercase tracking-wider">Elder Brother</span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919664074104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-ivory hover:bg-sand transition-colors p-3 rounded-xl border border-sand"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-espresso">Burhan</span>
                      <span className="text-[10px] text-ink/50 uppercase tracking-wider">Younger Brother</span>
                    </div>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 bg-[#25D366] hover:brightness-105 transition-all rounded-full flex items-center justify-center shadow-lg text-white"
            aria-label="Open WhatsApp chat"
          >
            {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
