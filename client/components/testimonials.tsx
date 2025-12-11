"use client"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Skilled Worker Visa Applicant  ",
      image: "/professional-woman-headshot.png",
      quote:
        "My visa consultant clarified every step of the process—from documentation to interview prep. Thanks to their guidance, my application was approved in just six weeks.",
    },
    {
      name: "Mohammad Sohel",
      role: "Student Visa Applicant",
      image: "/professional-man-headshot.png",
      quote:
        "I was overwhelmed by the requirements, but my counselor created a clear, personalized roadmap. They even helped me draft a strong SOP that made all the difference.",
    },
    {
      name: "Amina Begum",
      role: "Family Reunification Applicant",
      image: "/professional-woman-smiling.png",
      quote:
        "The emotional support and legal clarity I received were invaluable. My consultant responded quickly to every concern and kept me informed at every stage.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">What Our Students Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
