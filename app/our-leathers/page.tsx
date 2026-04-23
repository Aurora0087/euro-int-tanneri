"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animated-section"

const categories = ["All", "Full Grain", "Top Grain", "Specialty", "Sueded"]

const leathers = [
  {
    id: 1,
    title: "Full Grain Calf",
    category: "Full Grain",
    seed: "calf1",
    desc: "The finest, most natural calfskin retaining the original grain with all its natural markings. Develops a rich, distinctive patina over time.",
    finish: "Natural",
    thickness: "0.8–1.0 mm",
  },
  {
    id: 2,
    title: "Vegetable Tanned Buffalo",
    category: "Full Grain",
    seed: "buffalo1",
    desc: "Heavy, firm buffalo leather tanned using traditional vegetable extracts. Ideal for sturdy, long-lasting goods with character.",
    finish: "Natural / Waxed",
    thickness: "3.0–4.0 mm",
  },
  {
    id: 3,
    title: "Chrome Tanned Cowhide",
    category: "Top Grain",
    seed: "cow1",
    desc: "Consistent, soft chrome-tanned cowhide with a corrected surface for a uniform appearance. Widely used in upholstery and accessories.",
    finish: "Semi-aniline",
    thickness: "1.2–1.6 mm",
  },
  {
    id: 4,
    title: "Patent Glaze Calf",
    category: "Specialty",
    seed: "patent1",
    desc: "High-shine patent finish applied to smooth calfskin. Creates a mirror-like surface perfect for luxury handbags and footwear.",
    finish: "High Gloss",
    thickness: "0.7–0.9 mm",
  },
  {
    id: 5,
    title: "Nubuck Calf",
    category: "Sueded",
    seed: "nubuck1",
    desc: "Top grain calfskin buffed on the outer surface to create a luxurious velvet-like nap. Superior feel and exceptional drape.",
    finish: "Matte Velvet",
    thickness: "1.0–1.2 mm",
  },
  {
    id: 6,
    title: "Split Suede",
    category: "Sueded",
    seed: "suede1",
    desc: "Made from the fibrous inner split of the hide, delivering a consistent soft nap. Excellent for garments, linings, and accessories.",
    finish: "Soft Nap",
    thickness: "0.6–0.8 mm",
  },
  {
    id: 7,
    title: "Embossed Grain Cowhide",
    category: "Specialty",
    seed: "emboss1",
    desc: "Corrected grain cowhide pressed with various patterns — crocodile, lizard, ostrich simulations — for an exotic look at accessible cost.",
    finish: "Embossed",
    thickness: "1.2–1.5 mm",
  },
  {
    id: 8,
    title: "Water Repellent Calf",
    category: "Top Grain",
    seed: "waterproof1",
    desc: "Specially treated calfskin that resists water and moisture effectively, maintaining a natural semi-aniline appearance with added protection.",
    finish: "Semi-aniline",
    thickness: "0.8–1.0 mm",
  },
  {
    id: 9,
    title: "Metallic Finish Lamb",
    category: "Specialty",
    seed: "metallic1",
    desc: "Ultra-soft lambskin with a reflective metallic foil finish. A favourite in haute couture, ready-to-wear, and luxury accessories.",
    finish: "Metallic",
    thickness: "0.5–0.7 mm",
  },
]

export default function OurLeathersPage() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? leathers : leathers.filter((l) => l.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden -mt-20 pt-20">
        <img
          src="https://picsum.photos/seed/leatherhero/1920/800"
          alt="Our Leathers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/82 to-foreground/22" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <FadeIn>
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-3">Our Products</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-background">Our Leathers</h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our leather range spans the full spectrum — from firm vegetable-tanned soles to delicate patent-finished
              calfskins. Each type is produced with precision, consistency, and an obsession with quality that defines
              Euro International.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-[10px] tracking-[0.22em] uppercase font-semibold border transition-colors duration-200 ${
                  active === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="bg-background border border-border group"
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={`https://picsum.photos/seed/${item.seed}/600/400`}
                      alt={item.title}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 text-[10px] tracking-[0.18em] uppercase bg-background/95 text-foreground px-3 py-1.5">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.desc}</p>
                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Finish</p>
                        <p className="text-sm text-foreground mt-1 font-medium">{item.finish}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Thickness</p>
                        <p className="text-sm text-foreground mt-1 font-medium">{item.thickness}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}
