"use client"
import { useState } from "react";
import { FaParking } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const faqData= [
    {
      id: 1,
      icon: <FaParking size={18} className="text-primary" />,
      question: 'What is QR Park?',
      answer:
        'QR Park is a smart parking solution that lets you contact a car owner instantly without sharing personal phone numbers. Simply register your vehicle once and get a unique QR tag — that\'s all you need.',
    },
    {
      id: 2,
      icon: <FaCashRegister size={18} className="text-primary" />,
      question: 'How do I register my vehicle?',
      answer:
        'Download the QR Park app, create an account, and follow the on-screen instructions to register your vehicle. You\'ll receive a QR code sticker to place on your windshield.',
    },
    {
      id: 3,
      icon: <FaPhoneAlt size={18} className="text-primary" />,
      question: 'Is my phone number public?',
      answer:
        'No. Your phone number is never shared publicly. All communication goes through our secure platform, keeping your personal information completely private.',
    },
    {
      id: 4,
      icon: <IoMdHelpCircle size={18} className="text-primary" />,
      question: 'How does the SOS feature work?',
      answer:
        'The SOS feature allows you to send an immediate alert to emergency contacts if you feel unsafe. Simply tap the SOS button in the app to trigger the alert with your current location.',
    },
  ];
  function AccordionItem({item}) {
    const [open, setOpen] = useState(false);
   
    return (
      <div
        className={`border border-[#e2eaf4] rounded-xl mb-3 overflow-hidden transition-all duration-300 ${
          open ? 'shadow-soft' : ''
        } bg-primary-side-light`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 text-left"
        >
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0">{item.icon}</span>
            <span className="text-[15px] font-semibold text-primary">
              {item.question}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-primary transition-transform duration-300 flex-shrink-0 ${
              open ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
   
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    );
  }
export function FaqCard() {
    return (
      <section className="w-full bg-background py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
          {/* Card title */}
          <h2 className="text-xl font-bold text-primary mb-2">What is QR Park?</h2>
          <p className="text-sm text-primary mb-6 leading-relaxed">
            QR Park is a smart parking solution. You&apos;re able to contact a vehicle
            owner instantly without sharing your personal number — simply register your
            vehicle once and get a unique QR tag to use every time.
          </p>
   
          {/* Accordion items */}
          {faqData.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  }
   