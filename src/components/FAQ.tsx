import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What items can I send?",
      answer: "You can send most general goods including clothing, shoes, books, small appliances (blenders), and non-perishable items. We do not transport cash, livestock, fresh food, or hazardous materials.",
    },
    {
      question: "What if my parcel is lost or damaged?",
      answer: "We offer standard compensation of 2x the shipping fee. For valuable items, we recommend adding Premium Protection which covers up to ₦500,000 in value.",
    },
    {
      question: "How do I package my item?",
      answer: "Items must be securely packed to withstand transport. Jumia agencies may refuse items deemed fragile if they are not properly protected.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="bg-card rounded-lg shadow-sm border border-border px-4"
          >
            <AccordionTrigger className="text-left font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
