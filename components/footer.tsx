import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise" },
  { href: "/our-leathers", label: "Our Leathers" },
  { href: "/our-prints", label: "Our Prints" },
  { href: "/environment", label: "Environment" },
  { href: "/contact", label: "Contact Us" },
]

const legalLinks = [
  { href: "/legal-notices", label: "Legal Notices" },
  { href: "/personal-data", label: "Personal Data Protection" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="text-lg font-bold tracking-[0.15em] uppercase font-heading">Euro International</p>
              <p className="text-[10px] tracking-[0.28em] text-background/55 uppercase mt-1">Fine Leather Goods</p>
            </div>
            <p className="text-sm text-background/65 leading-relaxed">
              Crafting premium leather and prints with European expertise and sustainable practices, headquartered in
              Kolkata, India.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.28em] uppercase mb-5 text-background/80">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/55 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.28em] uppercase mb-5 text-background/80">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/55 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.28em] uppercase mb-5 text-background/80">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-background/65 leading-relaxed">
                  Plot: 98, Zone - 10A,
                  <br />
                  Kolkata - 700039, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-accent shrink-0" />
                <span className="text-sm text-background/65">+91 33 2345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-accent shrink-0" />
                <span className="text-sm text-background/65">info@eurointernational.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Euro International. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-background/40 hover:text-background/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
