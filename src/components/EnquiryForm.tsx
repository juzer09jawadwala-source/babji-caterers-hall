'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    functionType: '',
    date: '',
    guests: '',
    name: '',
    phone: '',
    notes: ''
  });

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello! I'd like to enquire about a booking.\n\nType: ${formData.functionType}\nDate: ${formData.date}\nGuests: ${formData.guests}\nName: ${formData.name}\nNotes: ${formData.notes}`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-espresso-soft p-8 rounded-2xl border border-gold/20 flex flex-col items-center text-center h-full justify-center min-h-[500px]"
      >
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-serif text-3xl text-ivory mb-4">Enquiry sent.</h3>
        <p className="text-ivory/70 mb-8 max-w-sm">
          Kasim or Burhan will call you back within a day. For anything urgent, message us on WhatsApp.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <a
            href={`https://wa.me/918976086766?text=${generateWhatsAppMessage()}`}
            className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-[#063a1a] font-bold text-sm tracking-wide"
          >
            WhatsApp Kasim
          </a>
          <a
            href={`https://wa.me/919664074104?text=${generateWhatsAppMessage()}`}
            className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-[#063a1a] font-bold text-sm tracking-wide"
          >
            WhatsApp Burhan
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Anti-spam honeypot */}
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase">Function Type</label>
            <select
              required
              className="bg-espresso-soft border border-ivory/10 text-ivory p-4 rounded-xl input-gold-focus appearance-none"
              value={formData.functionType}
              onChange={(e) => setFormData({ ...formData, functionType: e.target.value })}
            >
              <option value="" disabled>Select type</option>
              <option value="Wedding">Wedding</option>
              <option value="Pre-wedding">Pre-wedding</option>
              <option value="Nikah / Shitabi">Nikah / Shitabi</option>
              <option value="Birthday">Birthday</option>
              <option value="Family get-together">Family get-together</option>
              <option value="Community event">Community event</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase">Event Date</label>
            <input
              type="date"
              required
              className="bg-espresso-soft border border-ivory/10 text-ivory p-4 rounded-xl input-gold-focus"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase">Guest Count</label>
            <input
              type="number"
              required
              min="10"
              placeholder="e.g. 150"
              className="bg-espresso-soft border border-ivory/10 text-ivory p-4 rounded-xl input-gold-focus placeholder:text-ivory/30"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase">Your Name</label>
            <input
              type="text"
              required
              placeholder="Full name"
              className="bg-espresso-soft border border-ivory/10 text-ivory p-4 rounded-xl input-gold-focus placeholder:text-ivory/30"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase">Phone</label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            title="Enter a 10-digit mobile number"
            placeholder="+91 XXXXX XXXXX"
            className="bg-espresso-soft border border-ivory/10 text-ivory p-4 rounded-xl input-gold-focus placeholder:text-ivory/30"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase">Anything else? <span className="text-ivory/40 lowercase normal-case tracking-normal">(Optional)</span></label>
          <textarea
            rows={3}
            placeholder="Menu preferences, decor needs, dietary notes…"
            className="bg-espresso-soft border border-ivory/10 text-ivory p-4 rounded-xl input-gold-focus placeholder:text-ivory/30 resize-none"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-gold rounded-full w-full py-4 font-semibold text-sm tracking-widest uppercase mt-2 disabled:opacity-70"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
        </button>

        <p className="text-[10px] text-ivory/40 text-center mt-2">
          By enquiring, you agree that our team may contact you back on this number.
        </p>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-ivory/10"></div>
          <span className="flex-shrink-0 mx-4 font-sans text-[10px] tracking-[0.2em] text-gold uppercase">Or book directly on WhatsApp</span>
          <div className="flex-grow border-t border-ivory/10"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`https://wa.me/918976086766?text=${generateWhatsAppMessage()}`}
            className="flex items-center justify-center gap-2 py-3 rounded-full bg-forest text-ivory border border-ivory/10 hover:bg-forest/80 transition-colors font-semibold text-sm"
          >
            WhatsApp Kasim
          </a>
          <a
            href={`https://wa.me/919664074104?text=${generateWhatsAppMessage()}`}
            className="flex items-center justify-center gap-2 py-3 rounded-full bg-forest text-ivory border border-ivory/10 hover:bg-forest/80 transition-colors font-semibold text-sm"
          >
            WhatsApp Burhan
          </a>
        </div>
      </form>
    </div>
  );
}
