'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { careersData } from '../data'

const Careers = () => {
  const [formData, setFormData] = useState({
    email: '',
    bookTitle: '',
    wordCount: '',
    description: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section className="pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <div className="accordion accordion-icon-gradient" id="accordionExample3">
              {careersData.map((item, idx) => (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header" id={`heading${idx}`}>
                    <button
                      className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${idx}`}
                      aria-expanded={idx === 0 ? 'true' : 'false'}
                      aria-controls={`collapse${idx}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${idx}`}
                    className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${idx}`}
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="accordion-body">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 sidebar">
            <div className="widget p-4 border-0 rounded" style={{ backgroundColor: '#eeeae7' }}>
              <h4 className="mb-4" style={{ color: '#0f252f' }}>Get Your Book Report</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={{ color: '#364a52', fontWeight: '500' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    style={{ 
                      borderColor: '#364a52',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: '#364a52', fontWeight: '500' }}>
                    Book Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="bookTitle"
                    value={formData.bookTitle}
                    onChange={handleChange}
                    placeholder="Enter book title"
                    required
                    style={{ 
                      borderColor: '#364a52',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: '#364a52', fontWeight: '500' }}>
                    Number of Words
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="wordCount"
                    value={formData.wordCount}
                    onChange={handleChange}
                    placeholder="e.g., 50000"
                    required
                    style={{ 
                      borderColor: '#364a52',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label" style={{ color: '#364a52', fontWeight: '500' }}>
                    Tell Us About Your Book
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share a brief description of your book..."
                    required
                    style={{ 
                      borderColor: '#364a52',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100"
                  style={{ 
                    backgroundColor: '#0f252f',
                    borderColor: '#0f252f',
                    color: '#fff',
                    fontWeight: '600',
                    padding: '12px'
                  }}
                >
                  Get Report
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers