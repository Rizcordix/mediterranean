"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Who should apply for Author's Legacy?",
      answer: "Authors who are serious about building a platform, establishing authority, and creating multiple revenue streams from their book. This is for coaches, consultants, entrepreneurs, thought leaders, and professionals who view their book as a business asset, not just a vanity project."
    },
    {
      question: "How much time do I need to commit?",
      answer: "Minimal active time from you. We manage most execution. You participate in bi-weekly strategy calls (1 hour), provide feedback on content/marketing, and implement recommendations in your business. Average: 5-10 hours monthly of your time."
    },
    {
      question: "What if I already have a platform?",
      answer: "We enhance it. If you have an email list, we grow it. If you have social media, we optimize it. If you have a website, we improve it. We never start from zero; we build on what you have."
    },
    {
      question: "How do you measure success?",
      answer: "Clear metrics: book sales, email list growth, speaking invitations, consulting inquiry increases, revenue growth. Quarterly business reviews track progress against your goals."
    },
    {
      question: "Can I upgrade after starting with a lower package?",
      answer: "Yes. Many authors start with our Complete Solution ($2,899) and upgrade to Author's Legacy ($8,999) after seeing results. You pay only the difference."
    },
    {
      question: "What if my book doesn't fit the 'traditional' mold?",
      answer: "We work across 50+ genres and unconventional book types. Fiction, non-fiction, self-help, memoir, business, children's books—our strategies adapt to your book type and goals."
    },
    {
      question: "How long until I see ROI?",
      answer: "Typically 4-6 months for coaching/consulting professionals. Speaking fees and consulting contracts from book visibility usually appear within 3-6 months."
    },
    {
      question: "Do I own my book?",
      answer: "100% ownership. Your ISBN. Your copyright. Your files. Your royalties (100% of them). We're a service provider. You're the owner."
    },
    {
      question: "What about author taxes and business structure?",
      answer: "We recommend working with a CPA on business structure and tax strategy. We can provide referrals to CPA firms specializing in author taxation. It's outside our scope but we connect you with experts."
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
          <button className="primary-button">
            Schedule a Consultation
          </button>
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