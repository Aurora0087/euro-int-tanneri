import { FadeIn } from "@/components/animated-section"

export default function PersonalDataPage() {
  return (
    <>
      <section className="py-28 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Privacy</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-background">
              Personal Data Protection
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Euro International (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
                  and respecting your privacy. This policy explains how we collect, use, disclose, and safeguard your
                  personal data when you visit our website or engage with our services. Please read this policy
                  carefully before using our website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  2. Data Controller
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Euro International, with registered offices at Plot: 98, Zone - 10A, Kolkata - 700039, West Bengal,
                  India, is the data controller for personal data collected through this website and our business
                  activities.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  3. Data We Collect
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  We may collect the following categories of personal data:
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {[
                    ["Identity Data", "First name, last name, title, company name"],
                    ["Contact Data", "Email address, telephone number, postal address"],
                    ["Technical Data", "IP address, browser type, operating system, referral source"],
                    ["Usage Data", "Information about how you use our website and services"],
                    ["Marketing Data", "Preferences for receiving our marketing communications"],
                  ].map(([label, desc]) => (
                    <li key={label} className="flex gap-2">
                      <span className="text-accent mt-1 shrink-0">—</span>
                      <span>
                        <strong className="text-foreground">{label}:</strong> {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  4. How We Use Your Data
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  We use personal data for the following purposes:
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "To respond to inquiries and provide customer support",
                    "To process and fulfill orders and contracts",
                    "To send marketing communications (where consent is given)",
                    "To analyze website usage and continuously improve our services",
                    "To comply with applicable legal obligations",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent mt-1 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  5. Legal Basis for Processing
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We process personal data on the following legal grounds: your explicit consent; the performance of a
                  contract to which you are party; compliance with a legal obligation; and our legitimate business
                  interests, provided these are not overridden by your rights and freedoms.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  6. Data Retention
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We retain personal data only as long as necessary for the purposes for which it was collected, or as
                  required by applicable law. Contact inquiry records are retained for up to 2 years; contractual and
                  commercial records are retained for 7 years in accordance with Indian accounting regulations.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  7. Your Rights
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Depending on applicable law, you may have the following rights regarding your personal data:
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Access the personal data we hold about you",
                    "Request correction of inaccurate or incomplete data",
                    'Request erasure of your data ("right to be forgotten")',
                    "Object to processing of your data",
                    "Request restriction of processing",
                    "Data portability where technically feasible",
                    "Withdraw consent at any time without affecting prior processing",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent mt-1 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <strong className="text-foreground">privacy@eurointernational.com</strong>. We will respond within 30
                  days.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  8. Cookies
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our website uses cookies to improve your experience. Essential cookies are required for the website to
                  function correctly. Analytics and marketing cookies are only set with your explicit consent. You may
                  manage or withdraw cookie consent at any time through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  9. Third-Party Sharing
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We do not sell or rent personal data to third parties. We may share data with trusted service
                  providers acting on our behalf, subject to strict confidentiality obligations. We may also disclose
                  data where required by law, court order, or legal process.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  10. Contact Our Data Protection Contact
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For questions about this policy or to exercise your data rights, please contact:
                  <br />
                  <br />
                  <strong className="text-foreground">Euro International — Data Protection</strong>
                  <br />
                  Plot: 98, Zone - 10A, Kolkata - 700039, India
                  <br />
                  Email: privacy@eurointernational.com
                  <br />
                  Phone: +91 33 2345 6789
                </p>
              </div>

              <p className="text-muted-foreground/70 text-xs pt-4 border-t border-border">Last updated: January 2025</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
