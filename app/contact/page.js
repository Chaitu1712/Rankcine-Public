"use client";

import React, { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:support@rankcine.com?subject=${encodeURIComponent(formData.subject || 'General Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-extrabold text-rc-black sm:text-5xl">Get in touch</h1>
          <p className="mt-4 text-sm text-rc-gray-600">Have questions about the ecosystem or partnership opportunities? Send us a message.</p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-rc-purple-light bg-white p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
            <div>
              <label className="block text-xs font-bold text-rc-black mb-2">Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full rounded-xl border border-rc-gray-100 bg-rc-gray-50 p-3 text-sm focus:border-rc-purple focus:outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold text-rc-black mb-2">Email Address *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-rc-gray-100 bg-rc-gray-50 p-3 text-sm focus:border-rc-purple focus:outline-none" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-xs font-bold text-rc-black mb-2">Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-xl border border-rc-gray-100 bg-rc-gray-50 p-3 text-sm focus:border-rc-purple focus:outline-none" placeholder="How can we help you?" />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-rc-black mb-2">Message *</label>
            <textarea name="message" required value={formData.message} onChange={handleChange} rows="5" className="w-full rounded-xl border border-rc-gray-100 bg-rc-gray-50 p-3 text-sm focus:border-rc-purple focus:outline-none resize-none" placeholder="Your message here..."></textarea>
          </div>

          <Button type="submit" variant="purple" className="w-full py-4 text-sm transition-transform hover:scale-[1.02]">
            Send Message
          </Button>
        </form>
      </Reveal>
    </main>
  );
}