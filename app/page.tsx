"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, Globe, Leaf, Layers } from "lucide-react"
import { FadeIn, Stagger, StaggerItem, ScaleIn } from "@/components/animated-section"

const stats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "200+", label: "Leather Varieties" },
  { value: "50+", label: "Global Clients" },
  { value: "15+", label: "Countries Served" },
]

const services = [
  {
    icon: Award,
    title: "Expertise",
    desc: "Decades of mastery in fine leather tanning and processing, blending traditional craft with modern innovation.",
    href: "/expertise",
  },
  {
    icon: Layers,
    title: "Our Leathers",
    desc: "A diverse range of premium leather types — from full grain to nubuck — crafted to the highest international standards.",
    href: "/our-leathers",
  },
  {
    icon: Globe,
    title: "Our Prints",
    desc: "Bespoke prints and finishes that transform leather into distinctive, design-forward materials for luxury markets.",
    href: "/our-prints",
  },
  {
    icon: Leaf,
    title: "Environment",
    desc: "Committed to sustainable tanning practices and eco-responsible production for a greener, cleaner future.",
    href: "/environment",
  },
]

const featuredLeathers = [
  { seed: "fullgrain", title: "Full Grain Calf", tag: "Premium" },
  { seed: "nubuck", title: "Nubuck", tag: "Sueded" },
  { seed: "patent1", title: "Patent Leather", tag: "Glazed" },
  { seed: "corrected", title: "Corrected Grain", tag: "Embossed" },
  { seed: "waterbuff", title: "Water Buffalo", tag: "Exotic" },
  { seed: "suede1", title: "Split Suede", tag: "Soft" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <img
          src="https://picsum.photos/seed/tanneryhero/1920/1080"
          alt="Euro International leather tannery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/65 via-foreground/50 to-foreground/30" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11px] tracking-[0.4em] uppercase text-background/65 mb-5"
          >
            Est. Kolkata, India
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-background leading-tight mb-6"
          >
            Euro
            <br />
            International
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-background/75 max-w-xl mx-auto mb-10 font-light leading-relaxed"
          >
            Premium leather goods crafted with European precision and the soul of Kolkata.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/our-leathers"
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Explore Our Collection
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-background/70 text-background px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-background/12 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-background/45">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-background/45 to-transparent" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-background mb-2">{stat.value}</p>
                <p className="text-[10px] tracking-[0.28em] uppercase text-background/55">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* About */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScaleIn className="relative">
              <img
                src="https://picsum.photos/seed/leathercraft/700/600"
                alt="Euro International craftsmanship"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-accent/20 hidden lg:block -z-10" />
            </ScaleIn>
            <FadeIn direction="left">
              <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">About Us</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Crafting Excellence in Leather
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Euro International is a premier leather manufacturing company headquartered in Kolkata, India. With
                decades of experience, we combine European quality standards with the rich leather-working heritage of
                our region to produce materials that meet global luxury benchmarks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From full-grain calfskins to intricately printed and embossed finishes, our products serve the fashion,
                footwear, automotive, and luxury goods industries worldwide. Every hide that passes through our facility
                receives meticulous attention — because quality is not just our standard, it is our identity.
              </p>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase font-semibold text-foreground border-b-2 border-accent pb-1 hover:text-accent transition-colors"
              >
                Our Expertise
                <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">What We Offer</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Capabilities</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link
                  href={s.href}
                  className="group block bg-background p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <s.icon size={30} className="text-accent mb-6" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-accent flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                    Learn More <ArrowRight size={11} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured Leathers */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-4">
            <div>
              <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Our Collection</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Featured Leathers</h2>
            </div>
            <Link
              href="/our-leathers"
              className="hidden sm:flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredLeathers.map((item) => (
              <StaggerItem key={item.seed}>
                <div className="group relative overflow-hidden cursor-pointer">
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/600/450`}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase bg-background/95 text-foreground px-3 py-1.5">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-heading text-lg font-semibold text-background">{item.title}</h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/our-leathers"
              className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              View All Leathers <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Environment Banner */}
      <section className="relative py-36 overflow-hidden">
        <img
          src="https://picsum.photos/seed/greenleather/1920/700"
          alt="Our environmental commitment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/72" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <FadeIn>
            <Leaf size={38} className="text-accent mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-background mb-6">
              Our Commitment to the Environment
            </h2>
            <p className="text-background/75 text-lg leading-relaxed mb-10">
              Sustainability is at the heart of everything we do. From eco-friendly tanning chemicals to responsible
              water management, we continuously invest in cleaner, greener production.
            </p>
            <Link
              href="/environment"
              className="inline-flex items-center gap-2 border border-background/70 text-background px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-background/12 transition-colors duration-300"
            >
              Learn About Our Practices
              <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto text-center px-4">
          <FadeIn>
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Get In Touch</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Contact our team to discuss your leather requirements. We offer custom solutions for fashion houses,
              footwear brands, automotive manufacturers, and beyond.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent transition-colors duration-300"
            >
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
