// src/components/FAQSection.jsx
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Who Are These Courses For?",
    answer:
      "These courses are designed for beginners and working professionals who want hands-on practical learning.",
  },
  {
    id: 2,
    question: "Are The Courses Live Or Pre-Recorded?",
    answer:
      "All sessions are live and interactive, with real-time guidance and hands-on projects. No boring videos.",
  },
  {
    id: 3,
    question: "Do I Need Any Prior Experience?",
    answer:
      "Basic familiarity with tools or tech is helpful, but everything important is taught from scratch.",
  },
  {
    id: 4,
    question: "Will I Get Recordings?",
    answer:
      "Yes, all sessions are recorded and shared so you can revise at your own pace.",
  },
  {
    id: 5,
    question: "What Is The Class Size?",
    answer:
      "We keep batch sizes small so you get attention and detailed feedback.",
  },
  {
    id: 6,
    question: "Do You Offer Placement Support?",
    answer:
      "We provide portfolio guidance, feedback and referrals, but don’t guarantee jobs.",
  },
  {
    id: 7,
    question: "What If I Miss A Class?",
    answer:
      "No worries, you can watch the recording later and ask doubts in the next live session.",
  },
  {
    id: 8,
    question: "Is There Any Certificate?",
    answer:
      "Yes, you’ll get a certificate after finishing the course.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(2);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  return (
    <section className="w-full flex justify-center px-4 py-16">
      <div className="w-full max-w-[1290px]">

        <h2 className="text-[28px] md:text-[32px] font-semibold mb-8">
          FAQs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {leftColumn.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="rounded-lg bg-[#F2F2F2]">
                  
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full flex items-center justify-between px-6 py-4"
                  >
                    <span
                      className={`text-sm md:text-base font-medium ${
                        isOpen ? "text-[#E10051]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* ARROW SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 text-[#E10051]"
                          : "rotate-0 text-black"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#555] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {rightColumn.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="rounded-lg bg-[#F2F2F2]">

                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full flex items-center justify-between px-6 py-4"
                  >
                    <span
                      className={`text-sm md:text-base font-medium ${
                        isOpen ? "text-[#E10051]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* ARROW SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 text-[#E10051]"
                          : "rotate-0 text-black"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#555] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

