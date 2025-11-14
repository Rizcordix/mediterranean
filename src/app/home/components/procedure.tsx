'use client'
import React from 'react';

const ProcedureSection = () => {
  const steps = [
    {
      number: "01",
      title: "Enrollment Process for Users",
      description: "Join us today by signing up for an account. It's easy and quick. In simple terms, becoming a member of our service is easy and will open doors to a wealth of resources for writers and professionals.",
      isDark: true
    },
    {
      number: "02",
      title: "Developing an Outline",
      description: "Once as you're on board, we'll begin working together to draft a detailed overview. To make sure the plan reflects the spirit and direction of your book, we collaborate closely with you to learn your story's complexities.",
      isDark: false
    },
    {
      number: "03",
      title: "An Initial Draft",
      description: "Our service provider-committed writers will start writing your narrative and produce a first draft after getting a clear outline. In this step, you will constantly provide feedback to the author to ensure their initial draft matches your vision.",
      isDark: true
    },
    {
      number: "04",
      title: "Finalisation & Revision",
      description: "Our service Modification and finalization are in progress based on your feedback. Reading and editing the story word-for-word refines it. You must repeat this approach until you discover the sweet spot if you want your manuscript to be great.",
      isDark: false
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#eeeae7' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3" style={{ color: '#0f252f', letterSpacing: '-0.5px' }}>
            OUR QUICK PROCEDURE
          </h1>
          <p className="mx-auto" style={{ maxWidth: '900px', color: '#364a52', fontSize: '1.05rem' }}>
            Over this seamless process, we prioritize open communication, teamwork, and achieving your intellectual goals. 
            Join us as we center your story to create art. That's the steps
          </p>
        </div>

        {/* Horizontal Steps */}
        <div className="row g-3 mt-4 mb-5">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div 
                className="h-100 p-4 rounded-4 position-relative"
                style={{ 
                  backgroundColor: step.isDark ? '#364a52' : '#0f252f',
                  minHeight: '350px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Number Badge */}
                <div 
                  className="position-absolute rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    backgroundColor: step.isDark ? '#0f252f' : '#364a52',
                    color: '#eeeae7',
                    width: '70px',
                    height: '70px',
                    fontSize: '1.75rem',
                    top: '-10px',
                    right: '25px',
                    border: '4px solid #eeeae7',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-4 pt-2">
                  <h5 
                    className="fw-bold mb-3" 
                    style={{ 
                      color: '#eeeae7',
                      fontSize: '1.3rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {step.title}
                  </h5>
                  <p 
                    className="mb-0" 
                    style={{ 
                      color: '#eeeae7',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      opacity: '0.9'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
      </div>
    </section>
  );
};

export default ProcedureSection;