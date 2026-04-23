"use client"

import { Droplets, Recycle, Leaf, Sun, Wind, Award } from "lucide-react"
import { FadeIn, Stagger, StaggerItem, ScaleIn } from "@/components/animated-section"

const initiatives = [
  {
    icon: Droplets,
    title: "Water Management",
    desc: "Our state-of-the-art effluent treatment plant (ETP) treats 100% of process water before discharge, meeting or exceeding CETP standards set by regulatory authorities.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    desc: "We recover and reuse leather trimmings, shavings, and by-products. Over 90% of solid waste is diverted from landfill through responsible reuse and disposal partnerships.",
  },
  {
    icon: Leaf,
    title: "Vegetable Tanning",
    desc: "A significant portion of our production uses traditional vegetable tanning — entirely free from heavy metals, more biodegradable, and gentler on the environment.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    desc: "Solar panels installed across our facility roof contribute meaningfully to reducing our reliance on fossil fuels and lowering our overall carbon footprint year on year.",
  },
  {
    icon: Wind,
    title: "Reduced Emissions",
    desc: "Advanced ventilation and chemical management systems minimize volatile organic compound (VOC) emissions throughout our production and finishing areas.",
  },
  {
    icon: Award,
    title: "Responsible Sourcing",
    desc: "We work exclusively with hide suppliers who adhere to robust ethical animal welfare standards and maintain transparent, responsible supply chain practices.",
  },
]

export default function EnvironmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[58vh] min-h-[420px] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <img
          src="https://picsum.photos/seed/naturehero/1920/900"
          alt="Our environmental commitment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/58 via-foreground/45 to-foreground/25" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <FadeIn>
            <Leaf size={36} className="text-accent mx-auto mb-6" />
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Our Responsibility</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-background">Environment</h1>
          </FadeIn>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Our Pledge</p>
              <h2 className="font-heading text-4xl font-bold text-foreground leading-tight mb-6">
                Tanning Leather Responsibly for a Sustainable Future
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The leather industry carries a profound responsibility to the environment. At Euro International, we take
                this responsibility seriously — continuously investing in cleaner technologies, responsible chemical
                usage, and sustainable practices throughout our entire supply chain.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that luxury and sustainability are not mutually exclusive. Premium leather can be produced
                with minimal environmental impact when the right processes and genuine intentions are in place.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our environmental management system is aligned with ISO 14001 principles, and we report annually on our
                environmental performance to maintain full transparency with our clients and the wider community.
              </p>
            </FadeIn>
            <ScaleIn>
              <img
                src="https://picsum.photos/seed/nature2/700/600"
                alt="Sustainable tannery practices"
                className="w-full h-[450px] object-cover"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Green Initiatives */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Key Actions</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Our Green Initiatives</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <StaggerItem key={item.title} className="bg-background p-8">
                <item.icon size={34} className="text-accent mb-5" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Environmental Stats */}
      <section className="py-28 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { value: "100%", label: "Wastewater Treated" },
              { value: "90%+", label: "Waste Diverted from Landfill" },
              { value: "30%", label: "Reduction in Water Usage vs. 2015" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <p className="font-heading text-5xl font-bold text-background mb-3">{s.value}</p>
                <p className="text-[10px] tracking-[0.28em] uppercase text-background/55">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto text-center px-4">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Transparency & Reporting</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We publish annual environmental performance data as part of our commitment to transparency. Our clients
              can request detailed environmental impact reports for due diligence and sustainability assessments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For our full Environmental Policy or to request a sustainability report, please contact us at{" "}
              <span className="text-foreground font-semibold">environment@eurointernational.com</span>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
