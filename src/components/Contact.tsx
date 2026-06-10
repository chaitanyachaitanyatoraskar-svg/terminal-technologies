"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, CheckCircle2, Building } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API Submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px] grid grid-cols-12 gap-10">
        
        {/* Left Column: Form */}
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 bg-background-custom border border-gray-100 rounded-radius-container shadow-sm"
          >
            <h3 className="font-manrope text-2xl md:text-3xl font-bold text-primary mb-6">
              Submit an Inquiry
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-emerald-55/70 border border-emerald-300 rounded-radius-button text-emerald-800 flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                <span>Thank you! Your inquiry was sent successfully. We will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-radius-button px-4 py-3 text-sm outline-none focus:border-secondary transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-[11px] text-accent font-semibold">{errors.name}</span>}
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-radius-button px-4 py-3 text-sm outline-none focus:border-secondary transition-all"
                    placeholder="ACME Corp"
                  />
                  {errors.company && <span className="text-[11px] text-accent font-semibold">{errors.company}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-radius-button px-4 py-3 text-sm outline-none focus:border-secondary transition-all"
                    placeholder="john@company.com"
                  />
                  {errors.email && <span className="text-[11px] text-accent font-semibold">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-radius-button px-4 py-3 text-sm outline-none focus:border-secondary transition-all"
                    placeholder="+91 99999 99999"
                  />
                  {errors.phone && <span className="text-[11px] text-accent font-semibold">{errors.phone}</span>}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-radius-button px-4 py-3 text-sm outline-none focus:border-secondary transition-all resize-none"
                  placeholder="Tell us about your project or required parts..."
                />
                {errors.message && <span className="text-[11px] text-accent font-semibold">{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-2 bg-primary hover:bg-secondary disabled:bg-primary/50 text-white font-manrope font-bold text-sm tracking-wider uppercase rounded-radius-button shadow-md transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Send Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right Column: Company Details */}
        <div className="col-span-12 lg:col-span-5 lg:offset-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
              Contact Details
            </span>
            <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Get In Touch
            </h2>
            <p className="font-inter text-gray-600 text-base mb-8 leading-relaxed">
              Connect with our corporate team or request technical product catalogs from our engineers.
            </p>

            <div className="flex flex-col gap-6">
              {/* Company Name */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-radius-button bg-secondary/15 flex items-center justify-center shrink-0">
                  <Building className="text-secondary" size={18} />
                </div>
                <div>
                  <h4 className="font-manrope text-base font-bold text-primary mb-1">
                    Terminal Technologies (I) Pvt. Ltd.
                  </h4>
                  <p className="font-inter text-xs text-gray-500">
                    Precision engineering for global mobility.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-radius-button bg-secondary/15 flex items-center justify-center shrink-0">
                  <MapPin className="text-secondary" size={18} />
                </div>
                <div>
                  <h4 className="font-manrope text-base font-bold text-primary mb-1">
                    Head Office
                  </h4>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed max-w-xs">
                    Terminal House, Building 3, Merchant Industrial Complex, Waliv, Vasai East, Maharashtra, India.
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-radius-button bg-secondary/15 flex items-center justify-center shrink-0">
                  <Globe className="text-secondary" size={18} />
                </div>
                <div>
                  <h4 className="font-manrope text-base font-bold text-primary mb-1">
                    Website & Mail
                  </h4>
                  <a
                    href="https://terminaltechnology.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-secondary hover:underline font-semibold"
                  >
                    https://terminaltechnology.com/
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
