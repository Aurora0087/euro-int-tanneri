"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, Stagger, StaggerItem, ScaleIn } from "@/components/animated-section"

const prints = [
  {
    title: "Crocodile Emboss",
    desc: "Classic crocodile pattern pressed onto smooth leather. Available in natural scales, fine scales, or oversized versions.",
    seed: "croc1",
    tag: "Embossed",
  },
  {
    title: "Python Skin Print",
    desc: "Authentic python skin pattern printed using high-resolution digital techniques for a realistic, exotic look.",
    seed: "python1",
    tag: "Digital Print",
  },
  {
    title: "Ostrich Grain",
    desc: "Signature quill follicle pattern characteristic of genuine ostrich, available on various base hides for a luxury touch.",
    seed: "ostrich1",
    tag: "Embossed",
  },
  {
    title: "Lizard Pattern",
    desc: "Fine-scale lizard pattern creating an elegant, refined surface widely used in luxury handbags and small leather goods.",
    seed: "lizard1",
    tag: "Embossed",
  },
  {
    title: "Custom Digital Print",
    desc: "Full-color digital printing on leather for bespoke designs — from bold florals to intricate geometric or brand patterns.",
    seed: "digital1",
    tag: "Digital Print",
  },
  {
    title: "Woven Textile Effect",
    desc: "Pressed woven textures onto leather, mimicking the appearance of textile weaves for an unusual, tactile surface.",
    seed: "woven1",
    tag: "Embossed",
  },
  {
    title: "Foil Metallic",
    desc: "Hot foil stamping and transfer creates brilliant metallic surfaces — gold, silver, rose gold, and holographic options.",
    seed: "foilprint1",
    tag: "Foil",
  },
  {
    title: "Vintage Distress",
    desc: "Deliberately aged and distressed techniques that give leather an authentic vintage character full of story and warmth.",
    seed: "distress1",
    tag: "Specialty",
  },
]

export default function OurPrintsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden -mt-20 pt-20">
        <img
          src="https://picsum.photos/seed/printhero/1920/800"
          alt="Our Prints"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/82 to-foreground/22" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <FadeIn>
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-3">Texture & Pattern</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-background">Our Prints</h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Our Craft</p>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Where Leather Becomes Art</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our prints division pushes the boundaries of what leather can look and feel like. Through advanced
                embossing presses, digital printing technology, and traditional foil techniques, we give any hide a
                unique, unmistakable identity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need an exotic animal grain, a custom brand pattern, or a high-fashion digital print, our
                team works closely with designers to realize their vision — from prototype to full production run.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase font-semibold text-foreground border-b-2 border-accent pb-1 hover:text-accent transition-colors"
              >
                Request a Custom Print
                <ArrowRight size={14} />
              </Link>
            </FadeIn>
            <ScaleIn>
              <img
                src="https://picsum.photos/seed/printdetail/700/550"
                alt="Leather print detail"
                className="w-full h-[420px] object-cover"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Print Catalogue */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Available Finishes</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Print Catalogue</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {prints.map((print) => (
              <StaggerItem key={print.title} className="group bg-background">
                <div className="overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${print.seed}/500/400`}
                    alt={print.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-accent block mb-2">{print.tag}</span>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{print.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{print.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto text-center px-4">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Need a Custom Design?</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our team can develop bespoke prints and emboss patterns to match your brand aesthetic. Minimum order
              quantities apply. Contact us to discuss your project in detail.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent transition-colors duration-300"
            >
              Discuss Your Design
              <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
