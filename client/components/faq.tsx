"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Do I need a visa consultant, or can I apply on my own?",
      answer:
        "While it’s possible to apply independently, visa rules are complex and frequently change. A qualified consultant reduces the risk of errors, delays, or refusals—and increases your chances of approval.",
    },
    {
      question: "Which countries do you assist with?",
      answer:
        "I specialize in visa applications for the New Zealand and Australia. If your destination is outside this list, I’ll let you know during our consultation if I can help or refer you to a trusted expert.",
    },
    {
      question: "How soon should I book a consultation before my intended travel date?",
      answer:
        "It’s best to start 3–6 months in advance, especially for skilled worker, student, or family-based visas. Processing times vary widely by country and visa type, and early planning helps avoid last-minute stress.",
    },
    {
      question: "What documents will I need to prepare?",
      answer:
        "Requirements depend on your visa category and nationality, but typically include a valid passport, proof of funds, employment or admission letters, travel history, and sometimes medical exams or police clearance. I’ll provide a personalized checklist during our session.",
    },
    {
      question: "Do you guarantee visa approval?",
      answer:
        "No ethical consultant can guarantee approval—that decision rests solely with immigration authorities. However, I ensure your application is complete, consistent, and compelling to maximize your chances of success.",
    },
    {
      question: "What happens if my visa is refused?",
      answer:
        "If refusal occurs, I’ll review the reasons with you and advise on whether to reapply, appeal, or explore alternative pathways. Many refusals can be overcome with corrected documentation or stronger supporting evidence.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Questions?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
