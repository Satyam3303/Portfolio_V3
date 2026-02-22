import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

const contactInfo = [
  { icon: <Mail size={18} />,   label: 'Email',    value: 'shivamsatyam209@gmail.com', href: 'mailto:shivamsatyam209@gmail.com', color: '#14b8a6' },
  { icon: <Phone size={18} />,  label: 'Phone',    value: '+91 8092769351',             href: 'tel:+918092769351',                color: '#3b82f6' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'India',                      href: null,                               color: '#f59e0b' },
];

const socials = [
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/satyam_3303/',         label: 'Instagram' },
  { icon: <Linkedin size={18} />,  href: 'https://www.linkedin.com/in/shivam-satyam3303/', label: 'LinkedIn'  },
  { icon: <Github size={18} />,    href: 'https://github.com/Satyam3303',                  label: 'GitHub'    },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting)
          entries[0].target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120)
          );
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    Promise.all([
      emailjs.send(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE1, formData, import.meta.env.VITE_PUBLIC_KEY),
      emailjs.send(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE2, formData, import.meta.env.VITE_PUBLIC_KEY),
    ])
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 6000);
      })
      .catch((err) => {
        setIsSubmitting(false);
        setSubmitError('Something went wrong. Please try again.');
        console.error('EmailJS error:', err);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #050810 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal section-label mx-auto justify-center mb-4">Let's Connect</div>
          <h2 className="reveal section-heading text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="reveal text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="reveal glass rounded-2xl p-5 border border-white/[0.06] flex items-center gap-4 hover:border-white/15 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                  style={{ background: `${info.color}15`, border: `1px solid ${info.color}30`, color: info.color }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-gray-200 text-sm font-medium hover:text-teal-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-200 text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="reveal">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/[0.07] text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Open to work badge */}
            <div className="reveal glass-teal rounded-2xl p-5 border border-teal-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Open to Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently open to full-time roles and exciting freelance projects. Let's create something great!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal glass rounded-2xl p-8 border border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.025)' }}>
            <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-input" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="form-input resize-none" placeholder="Tell me about your project..." />
              </div>

              {submitSuccess && (
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {submitError && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};