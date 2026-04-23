"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, Stagger, StaggerItem } from "@/components/animated-section"

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Reach Out</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-background">Contact Us</h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <FadeIn direction="right">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-10">Get In Touch</h2>
              <Stagger className="space-y-7">
                <StaggerItem className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/12 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={17} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5 text-sm tracking-wide">Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Plot: 98, Zone - 10A,
                      <br />
                      Kolkata - 700039,
                      <br />
                      West Bengal, India
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/12 flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5 text-sm tracking-wide">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 33 2345 6789</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/12 flex items-center justify-center shrink-0">
                    <Mail size={17} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5 text-sm tracking-wide">Email</h3>
                    <p className="text-muted-foreground text-sm">info@eurointernational.com</p>
                    <p className="text-muted-foreground text-sm">sales@eurointernational.com</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/12 flex items-center justify-center shrink-0">
                    <Clock size={17} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5 text-sm tracking-wide">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </StaggerItem>
              </Stagger>

              <div className="mt-10">
                <img
                  src="https://picsum.photos/seed/kolkatamap/700/320"
                  alt="Location — Kolkata, India"
                  className="w-full h-52 object-cover border border-border"
                />
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-10">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <select className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-foreground">
                    <option>Product Inquiry</option>
                    <option>Custom Order</option>
                    <option>Partnership</option>
                    <option>Environmental Report Request</option>
                    <option>General Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-foreground text-background py-4 text-xs tracking-[0.22em] uppercase font-semibold hover:bg-accent transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
