"use client"

import { CheckCircle } from "lucide-react"
import { FadeIn, Stagger, StaggerItem, ScaleIn } from "@/components/animated-section"

const processes = [
  {
    step: "01",
    title: "Hide Selection",
    desc: "We source only the finest hides from trusted suppliers across India and internationally, ensuring consistent quality from the very beginning of the process.",
  },
  {
    step: "02",
    title: "Beam House Operations",
    desc: "Our skilled artisans prepare hides through soaking, liming, and fleshing — carefully removing non-leather components while fully preserving fiber integrity.",
  },
  {
    step: "03",
    title: "Tanning",
    desc: "Using both chrome and vegetable tanning methods, we transform raw hides into stable, durable leather perfectly suited for any application or end use.",
  },
  {
    step: "04",
    title: "Retanning & Dyeing",
    desc: "Precise retanning compounds and premium dyes are applied to achieve the desired softness, firmness, color depth, and batch-to-batch consistency.",
  },
  {
    step: "05",
    title: "Finishing",
    desc: "Surface finishing — including coating, embossing, glazing, and buffing — adds the final character and provides lasting protection to the leather.",
  },
  {
    step: "06",
    title: "Quality Control",
    desc: "Every piece undergoes stringent physical and chemical testing before leaving our facility to ensure it meets or exceeds applicable international standards.",
  },
]

const certifications = [
  "ISO 9001:2015 Certified",
  "REACH Compliant",
  "LWG (Leather Working Group) Protocol",
  "Azo-Free Dyestuffs",
  "Chrome VI Free",
  "Restricted Substance List (RSL) Compliant",
]

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden -mt-20 pt-20">
        <img
          src="https://picsum.photos/seed/expertisehero/1920/800"
          alt="Euro International expertise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/82 to-foreground/22" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <FadeIn>
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-3">Our Knowledge</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-background">Expertise</h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Our Knowledge</p>
              <h2 className="font-heading text-4xl font-bold text-foreground leading-tight mb-6">
                Decades of Mastery in Leather Craftsmanship
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Euro International, expertise is not merely a claim — it is built over generations of hands-on
                practice, continuous learning, and an unwavering commitment to quality. Our team of master tanners and
                technicians brings together irreplaceable traditional knowledge with cutting-edge technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our facility in Kolkata is equipped with state-of-the-art machinery imported from Europe, combined with
                the skill of craftsmen who have spent their lives perfecting the art of leather making. This unique blend
                gives Euro International its distinctive edge in global markets.
              </p>
            </FadeIn>
            <ScaleIn>
              <img
                src="https://picsum.photos/seed/craftsman/700/550"
                alt="Master craftsman at work"
                className="w-full h-[420px] object-cover"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">How We Work</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Our Tanning Process</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((p) => (
              <StaggerItem key={p.step} className="bg-background p-8">
                <span className="font-heading text-4xl font-bold text-accent/25 block mb-4">{p.step}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Our Facility</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Inside Our Tannery</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {["facility1", "facility2", "facility3", "facility4"].map((seed) => (
              <StaggerItem key={seed}>
                <img
                  src={`https://picsum.photos/seed/${seed}/500/420`}
                  alt="Tannery facility"
                  className="w-full h-56 object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-28 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Standards & Compliance</p>
            <h2 className="font-heading text-4xl font-bold text-background">Certifications</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <StaggerItem
                key={cert}
                className="flex items-center gap-3 bg-background/6 border border-background/10 px-6 py-4"
              >
                <CheckCircle size={17} className="text-accent shrink-0" />
                <span className="text-sm text-background/80">{cert}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
