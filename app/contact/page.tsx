"use client"

import React, { useState } from "react"
import Image from "next/image"
import styles from './ContactForm.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    { id: 'remodel', title: 'Full-Home Remodels', price: '$75,000' },
    { id: 'kitchens', title: 'Kitchens', price: '$25,000' },
    { id: 'bathrooms', title: 'Bathrooms', price: '$12,000' },
    { id: 'flooring', title: 'Flooring', price: '$6/sq ft installed' },
    { id: 'construction', title: 'General Construction', price: '$2,500' },
    { id: 'cabinetry', title: 'Custom Cabinetry', price: '$4,500' },
    { id: 'painting', title: 'Interior Painting', price: '$2,000 (per room)' },
    { id: 'demo', title: 'Selective Demolition', price: '$1,500 (per room)' },
  ];

  const getSelectedPrice = () => {
    const service = serviceOptions.find(s => s.id === selectedService);
    return service ? service.price : null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const finalFormData = { ...formData, serviceType: selectedService };
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || 'https://formspree.io/f/your_form_id_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(finalFormData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', phone: '', email: '', message: '' })
        setSelectedService('');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/placeholders/contact/7bfa8e_light-beyond-door-stockcake.jpg"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="font-sans text-[14px] md:text-[16px] font-normal tracking-[0.35em] mb-4 md:mb-6 text-heritage-deep-green">
            CONTACT
          </h1>
          <p className="font-serif text-4xl md:text-6xl mb-4 md:mb-6">
            INQUIRIES
          </p>
          <p className="font-sans text-[14px] md:text-[16px] font-normal text-white/80 tracking-[0.2em]">
            Begin the conversation about your next project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-black text-white p-6 md:p-10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Form and Social */}
        <div className="lg:col-span-7 space-y-12">
          {isSubmitted ? (
            <div className="text-center text-white flex items-center justify-center h-full">
              <div>
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p>Your message has been sent. We will get back to you shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="contact-form" className="space-y-8">
              {/* Formspree Honeypot (Spam Protection) */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC] mb-3 block">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white text-white placeholder-[#888888] focus:outline-none focus:border-[#CCCCCC] pb-2 text-base"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC] mb-3 block">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white text-white placeholder-[#888888] focus:outline-none focus:border-[#CCCCCC] pb-2 text-base"
                  placeholder="(555) 123-4567"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC] mb-3 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white text-white placeholder-[#888888] focus:outline-none focus:border-[#CCCCCC] pb-2 text-base"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* --- THE NEW SERVICE GRID --- */}
              <div className={styles["form-group"]}>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC] mb-3 block">SERVICE TYPE *</label>
                <div className={styles["service-grid"]}>
                  {serviceOptions.map((option) => (
                    <div 
                      key={option.id}
                      className={`${styles['service-card']} ${selectedService === option.id ? styles['active'] : ''}`}
                      onClick={() => setSelectedService(option.id)}
                    >
                      <span className={styles["service-title"]}>{option.title}</span>
                      <span className={styles["service-subtitle"]}>Starting at {option.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* --- THE MISSING PRICING BOX --- */}
              {/* Only show this block if a service is selected */}
              {selectedService && (
                <div className={styles["pricing-summary-box"]}>
                  <span className={styles["pricing-label"]}>STARTING FROM</span>
                  <span className={styles["pricing-amount"]}>{getSelectedPrice()}</span>
                  <span className={styles["pricing-disclaimer"]}>
                    Final pricing depends on project scope and specifications.
                  </span>
                </div>
              )}

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC] mb-3 block">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white text-white placeholder-[#888888] focus:outline-none focus:border-[#CCCCCC] pb-2 text-base resize-none"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button type="submit" className="hidden">Submit</button>
            </form>
          )}

          {/* Social Links */}
          <div className="mt-16 md:mt-20">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC] mb-6">
              SOCIAL
            </div>
            <div className="space-y-3">
              <a
                href="#"
                className="text-white underline text-sm hover:text-[#CCCCCC] transition-colors"
              >
                Instagram
              </a>
              <br />
              <a
                href="#"
                className="text-white underline text-sm hover:text-[#CCCCCC] transition-colors"
              >
                Facebook
              </a>
              <br />
              <a
                href="#"
                className="text-white underline text-sm hover:text-[#CCCCCC] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Vertical Headline and Submit Button */}
        <div className="lg:col-span-5 flex flex-col justify-center items-end space-y-12">
          <div className="writing-mode-vertical-rl transform rotate-90 text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
            GET A QUOTE
          </div>
          <button
            type="submit"
            form="contact-form"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="w-24 h-24 md:w-32 md:h-32 bg-[#1B3A34] rounded-full flex items-center justify-center text-white font-semibold text-xs md:text-sm hover:bg-[#1B3A34]/80 transition-colors shadow-lg disabled:bg-gray-400"
          >
            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
          </button>
        </div>
      </div>

      {/* Bottom Right Address */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC] text-right">
        OUR OFFICE<br />
        123 Heritage Lane<br />
        Springfield, IL 62701
      </div>
    </div>
    </>
  )
}
