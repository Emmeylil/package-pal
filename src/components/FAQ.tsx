import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What items can I send with Jumia Delivery?",
      answer:
        "You can send most items, from documents and personal effects to electronics and business goods. However, there are prohibited items for safety and legal reasons (e.g., illegal substances, flammable materials, live animals). Please check our detailed list of prohibited items.",
    },
    {
      question: "How long does delivery take with Jumia Delivery?",
      answer:
        "Delivery times vary based on the service chosen and the destination. Standard nationwide delivery in Nigeria typically takes 1-5 working days depending on the distance. You'll get an estimated delivery time when you drop off.",
    },
    {
      question: "How should I package my items?",
      answer:
        "Proper packaging is crucial to ensure your items arrive safely. Use sturdy boxes, bubble wrap for fragile items, and seal your package well.",
    },
    {
      question: "What if my parcel is delayed or lost?",
      answer:
        "While we strive for on-time delivery, unforeseen circumstances can occasionally cause delays. You can track your parcel using our online tool for real-time updates. In the rare event of a lost parcel, please contact our customer support immediately.",
    },
    {
      question: "How can I contact Jumia Delivery customer support?",
      answer:
        'Our customer support team is here to help! You can reach us via phone at 02018881106, email, or through our live chat during business hours.',
    },
    {
      question: "What are your operational hours for pickup and drop-off?",
      answer:
        "Our pickup and drop-off station hours vary by location. Generally, they operate from 9 AM - 5 PM, Monday to Friday, and 10 AM - 2 PM on Saturdays. Specific hours for your nearest station can be found on our website.",
    },
  ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const goToJoin = () => {
    window.open("https://www.jumia.com.ng/sp-pickup-stations/", "_blank");
  };

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg border border-gray-300 bg-white p-4 transition hover:shadow-md"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-xl text-primary">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="mt-3 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-12 text-center">
          <button
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:bg-primary/90"
            onClick={goToJoin}
          >
            Find a Jumia Station
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
