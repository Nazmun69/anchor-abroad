"use client"

export function Benefits() {
  const benefits = [
    {
      icon: "👤",
      title: "Personalized Case Review",
      description: "One-on-one consultation focused on your unique background, visa type, and goals.",
    },
    {
      icon: "📄",
      title: " Document Checklist & Review",
      description: "Get a customized checklist and expert review of all your application materials.",
    },
    {
      icon: "💬",
      title: "Interview Preparation",
      description: "Mock interviews, common questions, and strategies to confidently pass your visa interview.",
    },
    {
      icon: "🌍",
      title: " Country-Specific Guidance",
      description: "Up-to-date advice tailored to U.S., Canada, UK, New Zealand and other key destinations.",
    },
    {
      icon: "⏰",
      title: "Fast Response & Support",
      description: "Quick replies to urgent questions during critical stages of your application.",
    },
    {
      icon: "🔒",
      title: "Post-Consultation Resources",
      description: "Access to templates, sample letters, and policy updates—even after your session.",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Everything You Need for a Successful Visa Application
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Expert guidance designed to simplify your immigration journey, avoid costly mistakes, and maximize your chances of approval.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
