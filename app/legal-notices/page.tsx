import { FadeIn } from "@/components/animated-section"

export default function LegalNoticesPage() {
  return (
    <>
      <section className="py-28 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[11px] tracking-[0.38em] uppercase text-accent mb-4">Legal</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-background">Legal Notices</h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  1. Company Information
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">Euro International</strong>
                  <br />
                  Registered Office: Plot: 98, Zone - 10A, Kolkata - 700039, West Bengal, India
                  <br />
                  Email: info@eurointernational.com
                  <br />
                  Phone: +91 33 2345 6789
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  2. Website Publication
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This website is published by Euro International. The Publication Director is the Managing Director of
                  Euro International. All editorial content is the responsibility of Euro International.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  3. Website Hosting
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This website is hosted by a third-party service provider. All technical operations relating to
                  hosting and availability are managed in accordance with applicable data protection and technology
                  laws.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  4. Intellectual Property
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All content on this website — including but not limited to text, images, graphics, logos, icons,
                  audio clips, and software — is the exclusive property of Euro International or its content suppliers
                  and is protected by applicable intellectual property laws.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  Reproduction, distribution, transmission, display, or modification of any content without the express
                  prior written permission of Euro International is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  5. Trademarks
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  &quot;Euro International&quot; and all related logos, marks, and trade names are trademarks of Euro
                  International. No trademark, service mark, or trade name from this website may be used without prior
                  written permission.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Euro International makes every effort to ensure that information on this website is accurate and
                  up-to-date. However, we cannot guarantee the completeness, accuracy, or timeliness of the information
                  provided and shall not be liable for any direct, indirect, incidental, or consequential damages
                  arising from your use of, or inability to use, this website or any content herein.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  7. External Links
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This website may contain links to third-party websites. These links are provided for your convenience
                  only. Euro International has no control over the content of those sites and accepts no responsibility
                  for them or for any loss or damage that may arise from your use of them.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These legal notices shall be governed by and construed in accordance with the laws of India. Any
                  disputes arising in connection with these notices shall be subject to the exclusive jurisdiction of
                  the courts of Kolkata, West Bengal, India.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  9. Changes to This Notice
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Euro International reserves the right to modify these legal notices at any time. Any changes will be
                  effective immediately upon posting to this website. Your continued use of this website following any
                  changes constitutes your acceptance of those changes.
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
