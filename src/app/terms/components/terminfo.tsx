'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp, FileText, Shield, CreditCard, RefreshCw, AlertCircle } from 'lucide-react'

interface Section {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const TermsOfService: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const sections: Section[] = [
    {
      id: 'consent',
      icon: <FileText size={24} />,
      title: 'SMS Consent Communication',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Users who provide their contact information as part of our SMS consent process will be eligible to receive communications related to Mediterranean Publishing services. This information will be stored safely and used exclusively for marketing purposes.
          </p>
        </div>
      )
    },
    {
      id: 'types',
      icon: <FileText size={24} />,
      title: 'Types of SMS Communications',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Upon enrollment in Mediterranean Publishing&apos;s SMS consent process, you may receive messages categorized as &quot;Transactional&quot; or &quot;Promotional&quot;. These communications may include promotional offers and service-related updates.
          </p>
        </div>
      )
    },
    {
      id: 'frequency',
      icon: <RefreshCw size={24} />,
      title: 'Message Frequency',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            The volume of messages you receive may vary depending on the nature of our communications and your engagement level.
          </p>
        </div>
      )
    },
    {
      id: 'fees',
      icon: <CreditCard size={24} />,
      title: 'Potential Fees for SMS Messaging',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Standard messaging and data rates may apply based on your carrier&apos;s pricing structure. These charges may differ for domestic and international communications.
          </p>
        </div>
      )
    },
    {
      id: 'optin',
      icon: <Shield size={24} />,
      title: 'Opt-In Method',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>You may choose to receive SMS messages from Mediterranean Publishing through the following methods:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Website registration</li>
            <li style={{ marginBottom: '0.5rem' }}>In-person or phone conversations</li>
            <li style={{ marginBottom: '0.5rem' }}>Completing an online form</li>
            <li style={{ marginBottom: '0.5rem' }}>Direct enrollment request</li>
          </ul>
        </div>
      )
    },
    {
      id: 'optout',
      icon: <AlertCircle size={24} />,
      title: 'Opt-Out Method',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            You can discontinue receiving SMS messages at any time. Simply reply with &quot;STOP&quot; to any SMS message you receive. Alternatively, you may contact us directly to request removal from our messaging list.
          </p>
        </div>
      )
    },
    {
      id: 'help',
      icon: <FileText size={24} />,
      title: 'Help',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            For questions or concerns, simply reply with the keyword &quot;HELP&quot; to get help directly from us.
          </p>
        </div>
      )
    },
    {
      id: 'additional',
      icon: <FileText size={24} />,
      title: 'Additional Options',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            To review our SMS policies, please click the SMS consent box on our forms. You can opt-out of any text message by replying &quot;STOP&quot; to any text message you receive.
          </p>
        </div>
      )
    },
    {
      id: 'disclosures',
      icon: <FileText size={24} />,
      title: 'Standard Messaging Disclosures',
      content: (
        <div>
          <p style={{ marginBottom: '0.5rem' }}>Standard data rates may apply.</p>
          <p style={{ marginBottom: '0.5rem' }}>You can opt-out at any time by texting &quot;STOP&quot;.</p>
          <p style={{ marginBottom: '1rem' }}>For assistance, text &quot;HELP&quot; or visit our Privacy Policy and Terms and Conditions pages.</p>
        </div>
      )
    },
    {
      id: 'copyrights',
      icon: <Shield size={24} />,
      title: 'Copyrights',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Our company will acquire the rights and ownership of the content we deliver under the terms below. The original project we created has no rights; you can utilize it in whatever you see fit.
          </p>
        </div>
      )
    },
    {
      id: 'payment',
      icon: <CreditCard size={24} />,
      title: 'Payment',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            We demand full payment in advance for any services we render, and all fees are billed quarterly (depending on the fee schedule).
          </p>
        </div>
      )
    },
    {
      id: 'revision',
      icon: <RefreshCw size={24} />,
      title: 'Revision',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>Our 30-day time limit for revisions can also be extended in the case of exceptional circumstances.</p>
          <p style={{ marginBottom: '1rem' }}>The following categories apply to the turnaround time for revisions:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Revisions requested while in process: For starters 96 hours of urgency, and for 24-72 hours.</li>
            <li style={{ marginBottom: '0.5rem' }}>Revisions that are still unfinished: as lengthy as 30 days.</li>
            <li style={{ marginBottom: '0.5rem' }}>Revisions requested now shall be 90 hours for projects requiring seven weeks and over 48 hours.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'conditions',
      icon: <FileText size={24} />,
      title: 'Conditions for a Project',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Before starting the job, our Mediterranean Publishing team preserves conversations with each client to review the requirements. Then, based on our established terms and conditions at the beginning of the project, we make sure to reward you if there is a cancel or x-win.
          </p>
        </div>
      )
    },
    {
      id: 'refund',
      icon: <CreditCard size={24} />,
      title: 'Refund Procedure',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            You should be fully justified when the full out-of-request refund charges, which are $250 or 70% of the purchase price, whichever is smaller, as long as you request a full refund before starting.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            After the purchase but before 90 calendar days have passed, we refunds will be issued.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Once the order is paid for, we do not automatically refund the services. However, it can be settled in a refund for &quot;Change of Mind&quot;, and Mediterranean Publishing are not required to settle this.
          </p>
          <p style={{ marginBottom: '1rem' }}>If 25% of the purchase price must be paid once your manuscript has been turned in but before delivery work starts (design, web, schedule etc.), it can&apos;t be ruled as any formatting, settings, image placement, corrections, revisions, and preproductions!</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>50% of the purchase price once design work starts because final approval</li>
            <li style={{ marginBottom: '0.5rem' }}>100% of the order will be billed upon give final approval of the Work</li>
          </ul>
        </div>
      )
    },
    {
      id: 'terms',
      icon: <FileText size={24} />,
      title: 'Terms of Use',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            The services offered by the company are included in the data provided by Mediterranean Publishing. It is our next task, however, we make no additional recommendations or procedures anywhere.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            It is up to the customer to decide how to be based on information obtained within a certain window on the website.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Our business will not be held responsible for any performance issues, operational delays, omissions, disruptions, communication gaps, fact, data loss, or unauthorized access to the information on the website.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            By accepting our terms and conditions, you agree to indemnify and leave for free and to indemnity hurtless from and against any third-party claims. Additional losses, damages, or ramifications resulting from or connected to U.S. Your inability or any third party&apos;s right, including without limitation any intellectual property right, publicity, non-identity, property, or privacy right, violates these terms and conditions or a law.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            No partnership, joint venture, or employment connection between the company and its clients is covered by the agreement made with the website.
          </p>
        </div>
      )
    },
    {
      id: 'disclaimer',
      icon: <AlertCircle size={24} />,
      title: 'Disclaimer',
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            All company logos and trademarks appearing on our website are the property of their respective owners. We are not affiliated, associated, endorsed by, or in any way officially connected with these companies or their trademarks. The use of these logos and trademarks here has no legal connection, affiliation, or approval by these trademark owners and is used for identification purposes only. Any references to third-party trademarks, brands, products, or services are provided for informational purposes only and does not constitute professional advice. We do not guarantee the accuracy or completeness of any information provided on our website. We are not responsible for any errors or omissions, or for the results obtained from the use of this information. Any reliance you place on such information is strictly at your own risk.
          </p>
        </div>
      )
    }
  ];

  return (
    <div style={{ backgroundColor: '#eeeae7', minHeight: '100vh', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        {/* Accordion Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {sections.map((section) => {
            const isExpanded = expandedSection === section.id;
            return (
              <div
                key={section.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(15, 37, 47, 0.08)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  style={{
                    width: '100%',
                    padding: '24px 30px',
                    backgroundColor: isExpanded ? '#364a52' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div 
                      style={{ 
                        color: isExpanded ? '#eeeae7' : '#364a52',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {section.icon}
                    </div>
                    <h3 
                      style={{ 
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: isExpanded ? '#eeeae7' : '#0f252f',
                        textAlign: 'left',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <div style={{ color: isExpanded ? '#eeeae7' : '#364a52' }}>
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>
                
                {isExpanded && (
                  <div 
                    style={{ 
                      padding: '30px',
                      color: '#364a52',
                      fontSize: '1rem',
                      lineHeight: '1.8',
                      borderTop: '2px solid #eeeae7'
                    }}
                  >
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div 
          style={{ 
            marginTop: '60px',
            padding: '30px',
            backgroundColor: '#0f252f',
            borderRadius: '16px',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#eeeae7', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Last Updated: November 2025
          </p>
          <p style={{ color: '#eeeae7', fontSize: '0.9rem', opacity: 0.8 }}>
            If you have any questions about these Terms & Conditions, please contact Mediterranean Publishing support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService