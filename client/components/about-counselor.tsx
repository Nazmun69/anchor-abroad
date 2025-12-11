"use client"

export function AboutCounselor() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-man-in-suit.jpg" alt="Trainer" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">About the Counselor     </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Meet Your Certified Visa & Immigration Advisor

              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 10 years of experience in global immigration consulting, I’ve guided hundreds of individuals and families through complex visa processes—helping them secure student, work, family, and visitor visas with confidence and clarity.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise includes visa application strategy, documentation review, interview preparation, and compliance with evolving immigration policies across the U.S., Canada, the UK, and Schengen countries. I’ve supported clients ranging from international students to skilled professionals and entrepreneurs—giving me deep insight into what immigration officers truly look for.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Certified Immigration Consultant</p>
                  <p className="text-sm text-muted-foreground">Accredited by recognized regulatory bodies</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">500+ Successful Visa Cases</p>
                  <p className="text-sm text-muted-foreground">With a 95% approval rate across visa categories</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Personalized Case Strategy</p>
                  <p className="text-sm text-muted-foreground">Every consultation is tailored to your unique background and goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
