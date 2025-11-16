'use client'
import React from 'react'

interface Section {
  id: string;
  title: string;
  content: string[];
}

const sectionsData: Section[] = [
  {
    id: 'terms',
    title: 'Terms and Conditions',
    content: [
      'By accessing and using Mediterranean Publishing services, you agree to comply with these terms and conditions. Please review them carefully before engaging our services.',
      'Mediterranean Publishing reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.'
    ]
  },
  {
    id: 'product',
    title: 'Service Description',
    content: [
      'Mediterranean Publishing provides comprehensive publishing services including ghostwriting, editing, illustration, proofreading, and book marketing solutions.',
      'All services are delivered digitally unless otherwise specified. Physical deliverables, when applicable, will be shipped according to the agreed timeline.',
      'Service specifications and deliverables will be outlined in your individual service agreement.'
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy and Data Protection',
    content: [
      'We are committed to protecting your personal information. All data collected is used solely for service delivery and communication purposes.',
      'Your manuscript content and personal details are kept strictly confidential. We implement industry-standard security measures to safeguard your information.',
      'We will never share, sell, or distribute your personal information or creative work to third parties without explicit consent.'
    ]
  },
  {
    id: 'messaging',
    title: 'Communication Standards',
    content: [
      'Mediterranean Publishing communicates with clients via email, phone, and our secure client portal.',
      'We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please contact our priority support line.',
      'Standard SMS messaging rates may apply when opting into text notifications. You can unsubscribe at any time.'
    ]
  },
  {
    id: 'payment',
    title: 'Payment Terms',
    content: [
      'Payment schedules are established in your service agreement. We accept major credit cards, debit cards, PayPal, and wire transfers.',
      'Deposits are typically required before project commencement. Remaining balances are due according to agreed milestones.',
      'All payments are processed securely through encrypted payment gateways. We do not store complete payment card information.',
      'Refund policies are outlined in individual service agreements and vary based on project stage and deliverables completed.'
    ]
  },
  {
    id: 'intellectual',
    title: 'Intellectual Property Rights',
    content: [
      'Upon full payment, you retain complete ownership of all original content created for your project, including manuscripts, illustrations, and designs.',
      'Mediterranean Publishing retains the right to showcase completed projects in our portfolio unless a non-disclosure agreement specifies otherwise.',
      'Any pre-existing materials, templates, or resources provided by Mediterranean Publishing remain our intellectual property.',
      'You warrant that all content provided to us does not infringe upon any third-party copyrights or intellectual property rights.'
    ]
  },
  {
    id: 'services',
    title: 'Service Information',
    content: [
      'Detailed service descriptions, timelines, and deliverables are provided in your custom service agreement.',
      'Project timelines are estimates and may vary based on project complexity, revision requests, and client responsiveness.',
      'Rush services may be available for an additional fee. Please inquire about expedited options when discussing your project.',
      'We reserve the right to decline projects that fall outside our expertise or that conflict with our ethical standards.'
    ]
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality Agreement',
    content: [
      'Mediterranean Publishing maintains strict confidentiality regarding all client projects and communications.',
      'All team members working on your project sign non-disclosure agreements to protect your creative work.',
      'Client information is stored securely and accessed only by personnel directly involved in your project.',
      'Upon request, we can provide additional non-disclosure documentation for sensitive or high-profile projects.'
    ]
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: [
      'Mediterranean Publishing provides services with professional care and expertise but cannot guarantee specific market outcomes or sales results.',
      'Our liability is limited to the total amount paid for services. We are not responsible for indirect, incidental, or consequential damages.',
      'Clients are responsible for reviewing all deliverables and providing feedback during designated review periods.',
      'Any claims must be submitted in writing within 30 days of project completion.'
    ]
  },
  {
    id: 'termination',
    title: 'Project Cancellation',
    content: [
      'Either party may terminate a project agreement with written notice. Cancellation terms and applicable fees are outlined in your service agreement.',
      'Completed work up to the point of cancellation will be delivered, and payment for services rendered will be required.',
      'Refunds for cancelled projects are handled on a case-by-case basis depending on project stage and work completed.',
      'Mediterranean Publishing reserves the right to terminate projects that violate our terms or involve fraudulent activity.'
    ]
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: [
      'For questions about these terms or our privacy practices, please contact Mediterranean Publishing at: contact@mediterraneanpublishing.com',
      'Our customer service team is available Monday through Friday, 9 AM to 6 PM EST.',
      'For urgent matters or project-related inquiries, please use the direct contact information provided in your service agreement.'
    ]
  }
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#eeeae7', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '50px' }}>
          <p style={{ 
            color: '#364a52', 
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '0.5rem'
          }}>
            Please review our policies and terms carefully.
          </p>
          <p style={{ 
            color: '#364a52', 
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            Last Updated: November 2025
          </p>
        </div>

        {/* Content Sections */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: 'clamp(30px, 5vw, 50px)',
          boxShadow: '0 4px 20px rgba(15, 37, 47, 0.08)'
        }}>
          {sectionsData.map((section, index) => (
            <div
              key={section.id}
              style={{
                marginBottom: index < sectionsData.length - 1 ? '40px' : '0',
                paddingBottom: index < sectionsData.length - 1 ? '40px' : '0',
                borderBottom: index < sectionsData.length - 1 ? '1px solid #eeeae7' : 'none'
              }}
            >
              <h2 style={{ 
                color: '#0f252f', 
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                {section.title}
              </h2>

              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex}
                    style={{ 
                      color: '#364a52',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      margin: 0
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Contact */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '30px',
          backgroundColor: '#364a52',
          borderRadius: '12px',
          color: '#eeeae7'
        }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            Questions or Concerns?
          </h3>
          <p style={{ 
            fontSize: '0.95rem',
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>
            Contact our support team at info@mediterraneanpublishing.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;