// Email HTML Templates for different form types
// These templates are elegant, modern, and responsive

const baseStyles = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
`;

const containerStyle = `
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const headerStyle = `
  background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const contentStyle = `
  padding: 40px 20px;
  background-color: #f9f9f9;
`;

const footerStyle = `
  background-color: #364a52;
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 12px;
`;

export function getContactFormEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  countryCode?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { ${baseStyles} }
        </style>
      </head>
      <body style="${baseStyles}">
        <div style="${containerStyle}">
          <!-- Header -->
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Thank You!</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.95;">Your message has been received</p>
          </div>

          <!-- Main Content -->
          <div style="${contentStyle}">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">Hi <strong>${data.name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #555;">
              Thank you for reaching out to Mediterranean Publishing! We've received your message and truly appreciate you taking the time to contact us.
            </p>

            <div style="background: white; border-left: 4px solid #364a52; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="margin: 0; font-weight: 600; color: #364a52; font-size: 14px;">SUBJECT</p>
              <p style="margin: 5px 0 0 0; color: #333; font-size: 14px;">${data.subject}</p>
            </div>

            ${data.phone ? `<div style="background: white; border-left: 4px solid #364a52; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="margin: 0; font-weight: 600; color: #364a52; font-size: 14px;">PHONE</p>
              <p style="margin: 5px 0 0 0; color: #333; font-size: 14px;">${data.phone}</p>
            </div>` : ''}

            <p style="margin: 25px 0 20px 0; font-size: 15px; color: #555;">
              Our dedicated team is reviewing your inquiry and will get back to you shortly. We aim to respond to all messages within 24-48 hours.
            </p>

            <div style="background: linear-gradient(135deg, #f0f4f7 0%, #fff 100%); padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                <strong>Quick Links:</strong><br><br>
                <a href="https://www.mediterraneanpublishing.com" style="color: #364a52; text-decoration: none; font-weight: 500; margin: 0 10px;">Visit Our Website</a> | 
                <a href="https://www.mediterraneanpublishing.com/services/bookwriting" style="color: #364a52; text-decoration: none; font-weight: 500; margin: 0 10px;">Our Services</a>
              </p>
            </div>

            <p style="margin: 20px 0 0 0; font-size: 15px; color: #555;">
              If you have any questions in the meantime, feel free to reach out to us at <strong>info@mediterraneanpublishing.com</strong> or call <strong>+1 281-247-0786</strong>.
            </p>
          </div>

          <!-- Footer -->
          <div style="${footerStyle}">
            <p style="margin: 5px 0;">© 2024 Mediterranean Publishing. All rights reserved.</p>
            <p style="margin: 5px 0;">6340 N Eldridge Pkwy suite N, Houston, Texas 77041, United States</p>
            <p style="margin: 10px 0 0 0;">
              <a href="https://www.mediterraneanpublishing.com/privacy" style="color: #fff; text-decoration: none;">Privacy Policy</a> | 
              <a href="https://www.mediterraneanpublishing.com/terms" style="color: #fff; text-decoration: none;">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getDiscountFormEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  countryCode?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { ${baseStyles} }
        </style>
      </head>
      <body style="${baseStyles}">
        <div style="${containerStyle}">
          <!-- Header -->
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">🎉 Exclusive Offer Confirmed!</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.95;">Your 50% discount application has been received</p>
          </div>

          <!-- Main Content -->
          <div style="${contentStyle}">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">Hi <strong>${data.name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #555;">
              Congratulations! Your application for the <strong>exclusive 50% discount</strong> has been received by our team. This is a limited-time offer, and we're excited to help you bring your publishing project to life!
            </p>

            <div style="background: linear-gradient(135deg, #fff5e6 0%, #ffe8cc 100%); border: 2px solid #ffc966; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <p style="margin: 0; font-size: 24px; font-weight: 700; color: #d97706;">50% OFF</p>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #b45309;">Limited time offer - Consultation call included</p>
            </div>

            <p style="margin: 20px 0; font-size: 15px; color: #555;">
              <strong>What happens next?</strong>
            </p>
            
            <ol style="margin: 0 0 20px 0; padding-left: 20px; color: #555;">
              <li style="margin-bottom: 10px; font-size: 14px;">Our team will reach out shortly to schedule your <strong>free consultation call</strong></li>
              <li style="margin-bottom: 10px; font-size: 14px;">We'll discuss your project in detail and provide a <strong>customized quote</strong></li>
              <li style="margin-bottom: 10px; font-size: 14px;">Lock in your <strong>50% discount</strong> and start your publishing journey</li>
            </ol>

            <div style="background: white; border-left: 4px solid #d97706; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="margin: 0; font-weight: 600; color: #364a52; font-size: 14px;">CONTACT INFORMATION ON FILE</p>
              <p style="margin: 5px 0 0 0; color: #333; font-size: 13px;">Email: ${data.email}<br>Phone: ${data.phone}</p>
            </div>

            <p style="margin: 20px 0 0 0; font-size: 15px; color: #555;">
              If these details need updating or you have any questions, reply directly to this email or call us at <strong>+1 281-247-0786</strong>.
            </p>
          </div>

          <!-- Footer -->
          <div style="${footerStyle}">
            <p style="margin: 5px 0;">© 2024 Mediterranean Publishing. All rights reserved.</p>
            <p style="margin: 5px 0;">6340 N Eldridge Pkwy suite N, Houston, Texas 77041, United States</p>
            <p style="margin: 10px 0 0 0;">
              <a href="https://www.mediterraneanpublishing.com/privacy" style="color: #fff; text-decoration: none;">Privacy Policy</a> | 
              <a href="https://www.mediterraneanpublishing.com/terms" style="color: #fff; text-decoration: none;">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getQuoteFormEmail(data: {
  name: string;
  email: string;
  category: string;
  service: string;
  turnaround: string;
  words?: string;
  title?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { ${baseStyles} }
        </style>
      </head>
      <body style="${baseStyles}">
        <div style="${containerStyle}">
          <!-- Header -->
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Quote Request Received</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.95;">We'll prepare a personalized quote for you</p>
          </div>

          <!-- Main Content -->
          <div style="${contentStyle}">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">Hi <strong>${data.name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #555;">
              Thank you for requesting a quote! We've received your inquiry and our expert team is already working on a comprehensive, customized quote tailored to your specific needs.
            </p>

            <div style="background: white; border: 2px solid #364a52; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0 0 15px 0; font-weight: 600; color: #364a52; font-size: 14px;">YOUR PROJECT DETAILS</p>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 13px;">
                <div>
                  <p style="margin: 0 0 3px 0; color: #999; font-weight: 500; text-transform: uppercase;">Category</p>
                  <p style="margin: 0; color: #333;">${data.category}</p>
                </div>
                <div>
                  <p style="margin: 0 0 3px 0; color: #999; font-weight: 500; text-transform: uppercase;">Service</p>
                  <p style="margin: 0; color: #333;">${data.service}</p>
                </div>
                ${data.words ? `
                <div>
                  <p style="margin: 0 0 3px 0; color: #999; font-weight: 500; text-transform: uppercase;">Word Count</p>
                  <p style="margin: 0; color: #333;">${data.words}</p>
                </div>
                ` : ''}
                <div>
                  <p style="margin: 0 0 3px 0; color: #999; font-weight: 500; text-transform: uppercase;">Turnaround Time</p>
                  <p style="margin: 0; color: #333;">${data.turnaround}</p>
                </div>
              </div>
            </div>

            <p style="margin: 20px 0; font-size: 15px; color: #555;">
              <strong>What to expect:</strong>
            </p>
            
            <ul style="margin: 0 0 20px 0; padding-left: 20px; color: #555;">
              <li style="margin-bottom: 8px; font-size: 14px;">A detailed quote breakdown with transparent pricing</li>
              <li style="margin-bottom: 8px; font-size: 14px;">Timeline and project milestones</li>
              <li style="margin-bottom: 8px; font-size: 14px;">Payment options and flexible plans</li>
              <li style="margin-bottom: 8px; font-size: 14px;">A consultation call to discuss your vision</li>
            </ul>

            <div style="background: linear-gradient(135deg, #f0f4f7 0%, #fff 100%); padding: 15px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                <strong>Average Response Time:</strong> 2-4 hours<br>
                We're working on your quote and will send it shortly.
              </p>
            </div>

            <p style="margin: 20px 0 0 0; font-size: 15px; color: #555;">
              Have questions? Reach out to us at <strong>info@mediterraneanpublishing.com</strong> or <strong>+1 281-247-0786</strong>
            </p>
          </div>

          <!-- Footer -->
          <div style="${footerStyle}">
            <p style="margin: 5px 0;">© 2024 Mediterranean Publishing. All rights reserved.</p>
            <p style="margin: 5px 0;">6340 N Eldridge Pkwy suite N, Houston, Texas 77041, United States</p>
            <p style="margin: 10px 0 0 0;">
              <a href="https://www.mediterraneanpublishing.com/privacy" style="color: #fff; text-decoration: none;">Privacy Policy</a> | 
              <a href="https://www.mediterraneanpublishing.com/terms" style="color: #fff; text-decoration: none;">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getNewsletterEmail(data: { email: string }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { ${baseStyles} }
        </style>
      </head>
      <body style="${baseStyles}">
        <div style="${containerStyle}">
          <!-- Header -->
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Welcome!</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.95;">You've been subscribed to our newsletter</p>
          </div>

          <!-- Main Content -->
          <div style="${contentStyle}">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">Hello there!</p>
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">${data.email}</p>
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #555;">
              Thank you for subscribing to Mediterranean Publishing's newsletter! You're now part of our community of aspiring authors, publishing professionals, and literary enthusiasts.
            </p>

            <div style="background: linear-gradient(135deg, #e8f4f8 0%, #d4e9f0 100%); border-left: 4px solid #364a52; padding: 20px; border-radius: 4px; margin: 25px 0;">
              <p style="margin: 0 0 10px 0; font-weight: 600; color: #364a52; font-size: 14px;">What you'll receive:</p>
              <ul style="margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 5px; font-size: 14px; color: #555;">Exclusive publishing tips and industry insights</li>
                <li style="margin-bottom: 5px; font-size: 14px; color: #555;">Updates on new services and special offers</li>
                <li style="margin-bottom: 5px; font-size: 14px; color: #555;">Success stories from our clients</li>
                <li style="font-size: 14px; color: #555;">Resources to help bring your book to life</li>
              </ul>
            </div>

            <p style="margin: 20px 0; font-size: 15px; color: #555;">
              We respect your inbox and promise to send valuable content only. Expect newsletters roughly once a week with actionable insights and opportunities.
            </p>

            <p style="margin: 20px 0 0 0; font-size: 15px; color: #555;">
              Ready to start your publishing journey? Explore our <a href="https://www.mediterraneanpublishing.com/services/bookwriting" style="color: #364a52; text-decoration: none; font-weight: 600;">services</a> to learn how we can help.
            </p>
          </div>

          <!-- Footer -->
          <div style="${footerStyle}">
            <p style="margin: 5px 0;">© 2024 Mediterranean Publishing. All rights reserved.</p>
            <p style="margin: 5px 0;">6340 N Eldridge Pkwy suite N, Houston, Texas 77041, United States</p>
            <p style="margin: 10px 0 0 0;">
              <a href="https://www.mediterraneanpublishing.com/privacy" style="color: #fff; text-decoration: none;">Privacy Policy</a> | 
              <a href="https://www.mediterraneanpublishing.com/terms" style="color: #fff; text-decoration: none;">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getReportFormEmail(data: {
  name: string;
  email: string;
  title: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { ${baseStyles} }
        </style>
      </head>
      <body style="${baseStyles}">
        <div style="${containerStyle}">
          <!-- Header -->
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Report Request Received</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.95;">Thank you for reaching out</p>
          </div>

          <!-- Main Content -->
          <div style="${contentStyle}">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">Hi <strong>${data.name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #555;">
              We've received your book report request. Our team will analyze your manuscript and prepare a comprehensive report tailored to help you improve and polish your work.
            </p>

            <div style="background: white; border-left: 4px solid #364a52; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="margin: 0; font-weight: 600; color: #364a52; font-size: 14px;">BOOK TITLE</p>
              <p style="margin: 5px 0 0 0; color: #333; font-size: 14px;">${data.title}</p>
            </div>

            <p style="margin: 20px 0; font-size: 15px; color: #555;">
              <strong>Your comprehensive report will include:</strong>
            </p>
            
            <ul style="margin: 0 0 20px 0; padding-left: 20px; color: #555;">
              <li style="margin-bottom: 8px; font-size: 14px;">Structural and content analysis</li>
              <li style="margin-bottom: 8px; font-size: 14px;">Writing style and flow assessment</li>
              <li style="margin-bottom: 8px; font-size: 14px;">Market positioning recommendations</li>
              <li style="margin-bottom: 8px; font-size: 14px;">Detailed feedback for improvement</li>
              <li style="font-size: 14px;">Next steps in your publishing journey</li>
            </ul>

            <div style="background: linear-gradient(135deg, #f0f4f7 0%, #fff 100%); padding: 15px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                <strong>Estimated Delivery:</strong> 5-7 business days<br>
                We're carefully reviewing your manuscript.
              </p>
            </div>

            <p style="margin: 20px 0 0 0; font-size: 15px; color: #555;">
              Questions? Contact us at <strong>info@mediterraneanpublishing.com</strong> or <strong>+1 281-247-0786</strong>
            </p>
          </div>

          <!-- Footer -->
          <div style="${footerStyle}">
            <p style="margin: 5px 0;">© 2024 Mediterranean Publishing. All rights reserved.</p>
            <p style="margin: 5px 0;">6340 N Eldridge Pkwy suite N, Houston, Texas 77041, United States</p>
            <p style="margin: 10px 0 0 0;">
              <a href="https://www.mediterraneanpublishing.com/privacy" style="color: #fff; text-decoration: none;">Privacy Policy</a> | 
              <a href="https://www.mediterraneanpublishing.com/terms" style="color: #fff; text-decoration: none;">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getLandingPageFormEmail(data: {
  name: string;
  email: string;
  phone: string;
  countryCode?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { ${baseStyles} }
        </style>
      </head>
      <body style="${baseStyles}">
        <div style="${containerStyle}">
          <!-- Header -->
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">✓ Thank You!</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.95;">Your inquiry has been received</p>
          </div>

          <!-- Main Content -->
          <div style="${contentStyle}">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">Hi <strong>${data.name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #555;">
              Thank you for your interest in Mediterranean Publishing! We're thrilled to connect with you and hear about your publishing journey. Your inquiry has been received and we're already reviewing your details.
            </p>

            <div style="background: white; border-left: 4px solid #364a52; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="margin: 0; font-weight: 600; color: #364a52; font-size: 14px;">WHAT HAPPENS NEXT?</p>
              <ol style="margin: 10px 0 0 0; padding-left: 20px; color: #333; font-size: 14px;">
                <li>Our team reviews your information</li>
                <li>We'll contact you within 24 hours to discuss your project</li>
                <li>We'll provide a customized offer and timeline</li>
                <li>Your publishing journey begins!</li>
              </ol>
            </div>

            <p style="margin: 25px 0 20px 0; font-size: 15px; color: #555;">
              Our expert publishing team is excited to help bring your book to life. Whether you're just starting or refining your manuscript, we have the perfect solution for you.
            </p>

            <div style="background: linear-gradient(135deg, #f0f4f7 0%, #fff 100%); padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
                <strong>Quick Links:</strong>
              </p>
              <p style="margin: 10px 0; font-size: 14px;">
                <a href="https://www.mediterraneanpublishing.com" style="color: #364a52; text-decoration: none; font-weight: 500; margin: 0 10px;">Website</a> | 
                <a href="https://www.mediterraneanpublishing.com/services/bookwriting" style="color: #364a52; text-decoration: none; font-weight: 500; margin: 0 10px;">Services</a> |
                <a href="https://www.mediterraneanpublishing.com/book-samples" style="color: #364a52; text-decoration: none; font-weight: 500; margin: 0 10px;">Book Samples</a>
              </p>
            </div>

            <p style="margin: 20px 0 0 0; font-size: 15px; color: #555;">
              If you'd like to speak with someone sooner, feel free to reach out to us at <strong>info@mediterraneanpublishing.com</strong> or call <strong>+1 281-247-0786</strong>.
            </p>
          </div>

          <!-- Footer -->
          <div style="${footerStyle}">
            <p style="margin: 5px 0;">© 2024 Mediterranean Publishing. All rights reserved.</p>
            <p style="margin: 5px 0;">6340 N Eldridge Pkwy suite N, Houston, Texas 77041, United States</p>
            <p style="margin: 10px 0 0 0;">
              <a href="https://www.mediterraneanpublishing.com/privacy" style="color: #fff; text-decoration: none;">Privacy Policy</a> | 
              <a href="https://www.mediterraneanpublishing.com/terms" style="color: #fff; text-decoration: none;">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}
