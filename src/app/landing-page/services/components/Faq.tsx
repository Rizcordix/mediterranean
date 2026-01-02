"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Button } from 'react-bootstrap';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
  {
    question: "How long does publishing actually take?",
    answer:
      "Average timeline is 90 days from consultation to live on Amazon. This includes writing (if needed), editing, cover design, formatting, and publishing setup. If you add optional services like ghostwriting or comprehensive marketing, timeline can extend to 4–6 months. You control the pace."
  },
  {
    question: "What if I've already written a draft?",
    answer:
      "Perfect. We assess your manuscript, identify what editing or polishing is needed, and move directly to that stage. Timeline is typically 60 days from draft to published."
  },
  {
    question: "Can I really keep 100% of my royalties?",
    answer:
      "Yes. We don’t take royalty cuts. You own your ISBN, copyright, and all files. We make money from our service fees only. Your book sales are 100% yours forever."
  },
  {
    question: "What if I don't like the cover design?",
    answer:
      "You get unlimited revisions until you love it. It’s our job to get your cover right. We don’t move forward until you’re 100% satisfied."
  },
  {
    question: "Do I have to publish on Amazon or can I choose other platforms?",
    answer:
      "You choose. We can publish eBook-only on Kindle, expand to print (IngramSpark), audiobooks (Audible), and 95+ other distribution channels. The choice is always yours."
  },
  {
    question: "What if I want to add services later?",
    answer:
      "You can. Start with Essentials and upgrade later, or add audiobook production after publication. We also offer à la carte services."
  },
  {
    question: "Is there really no hidden fees?",
    answer:
      "No. Our pricing is transparent. You see exactly what’s included and what’s available as add-ons. No surprise invoices. No processing fees. One upfront package cost."
  },
  {
    question: "What if I'm not ready to publish yet?",
    answer:
      "No pressure. Many authors start with a free consultation to discuss their vision and timeline. You can begin writing services, editing, or marketing strategies before committing to full publishing."
  },
  {
    question: "How do you handle my intellectual property and rights?",
    answer:
      "You own everything—your manuscript, cover art, ISBN, and copyright. We are a service provider facilitating publication. Your intellectual property is yours forever."
  },
  {
    question: "Can you help with marketing my book?",
    answer:
      "Yes. Marketing is included in higher packages or available as an add-on. We handle social media, email marketing, blogger outreach, Amazon ads, and book launch strategies."
  }
];


  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <div className="section-header">
          <div className="header-icon">
            <HelpCircle size={32} />
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the Author&apos;s Legacy program</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className={`faq-icon ${activeIndex === index ? 'rotated' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </div>
              
              <div className={`faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-cta">
          <h3>Still have questions?</h3>
          <p>We&apos;re here to help you make the right decision for your author journey.</p>
          <Button href='/calendly' target='_blank' className="primary-button">
            Schedule a Consultation
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        .faq-container {
          background-color: #eeeae7;
          padding: 60px 20px;
          position: relative;
        }
        
        .faq-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }
        
        .faq-content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .header-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #364a52;
          color: #eeeae7;
          margin-bottom: 20px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          color: #0f252f;
          margin-bottom: 12px;
          position: relative;
          display: inline-block;
        }
        
        .section-header h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 25%;
          width: 50%;
          height: 3px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }
        
        .section-header p {
          font-size: 1.1rem;
          color: #364a52;
          max-width: 600px;
          margin: 16px auto 0;
        }
        
        .faq-list {
          margin-bottom: 50px;
        }
        
        .faq-item {
          background-color: white;
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.05);
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          box-shadow: 0 6px 16px rgba(15, 37, 47, 0.1);
        }
        
        .faq-item.active {
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.15);
        }
        
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          cursor: pointer;
        }
        
        .faq-question h3 {
          font-size: 1.1rem;
          color: #0f252f;
          margin: 0;
          padding-right: 20px;
          line-height: 1.4;
        }
        
        .faq-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(54, 74, 82, 0.1);
          color: #364a52;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .faq-item.active .faq-icon {
          background-color: #364a52;
          color: #eeeae7;
        }
        
        .faq-icon.rotated {
          transform: rotate(180deg);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        
        .faq-answer.expanded {
          max-height: 300px;
          padding: 0 24px 20px 24px;
        }
        
        .faq-answer p {
          color: #364a52;
          line-height: 1.6;
          margin: 0;
        }
        
        .section-cta {
          text-align: center;
          padding: 30px;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.05);
        }
        
        .section-cta h3 {
          font-size: 1.5rem;
          color: #0f252f;
          margin: 0 0 8px 0;
        }
        
        .section-cta p {
          color: #364a52;
          margin: 0 0 20px 0;
        }
        
        .primary-button {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: white;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.2);
        }
        
        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(15, 37, 47, 0.3);
        }
        
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .faq-question {
            padding: 16px 20px;
          }
          
          .faq-question h3 {
            font-size: 1rem;
            padding-right: 16px;
          }
          
          .faq-answer.expanded {
            padding: 0 20px 16px 20px;
          }
          
          .section-cta {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQ;