// src/pages/NonTechnicalCourses.jsx
import React from "react";
import { Button } from "react-bootstrap";

const nonTechnicalBlocks = [
  {
    category: "Office & Productivity",
    courses: [
      {
        title: "Basic Computer & Internet",
        badge: "Foundation",
        duration: "1–2 Months",
        highlight:
          "Learn essential computer fundamentals, operating systems, internet usage, email and file management for daily work and studies.",
      },
      {
        title: "MS Office (Word, Excel, PowerPoint)",
        badge: "Productivity",
        duration: "1–2 Months",
        highlight:
          "Hands‑on training in MS Word, Excel and PowerPoint for documentation, data handling, reporting and presentations used in all job roles.",
      },
      {
        title: "Advanced Excel",
        badge: "Data Handling",
        duration: "1–2 Months",
        highlight:
          "Formulas, functions, charts, pivot tables and data analysis skills that support office, finance and analytics profiles.",
      },
    ],
  },
  {
    category: "Communication & Personality",
    courses: [
      {
        title: "Spoken English",
        badge: "Communication",
        duration: "1–3 Months",
        highlight:
          "Improve spoken English, grammar, vocabulary and confidence for interviews, corporate communication and day‑to‑day interactions.",
      },
      {
        title: "Communication Skills",
        badge: "Soft Skills",
        duration: "1–2 Months",
        highlight:
          "Verbal & written communication, listening skills, email etiquette and presentation skills for professional growth.",
      },
      {
        title: "Personality Development & Soft Skills",
        badge: "Professional Growth",
        duration: "40 Hours",
        highlight:
          "Self‑confidence, teamwork, leadership, emotional intelligence, conflict handling and workplace etiquette.",
      },
    ],
  },
  {
    category: "Finance & Business",
    courses: [
      {
        title: "Tally / Accounting Basics",
        badge: "Accounts",
        duration: "1–3 Months",
        highlight:
          "Introduction to accounting concepts, Tally operations, vouchers, ledgers and basic GST/billing workflows for entry‑level accounting roles.",
      },
      {
        title: "Business & Office Etiquette",
        badge: "Corporate Readiness",
        duration: "Short Module",
        highlight:
          "Professional conduct, email and phone etiquette, dress code, meeting behavior and corporate culture awareness.",
      },
    ],
  },
  {
    category: "Digital & Career Skills",
    courses: [
      {
        title: "Digital Marketing (Basic)",
        badge: "Digital Skills",
        duration: "2–3 Months",
        highlight:
          "Introduction to SEO, social media marketing, content basics and online branding to support small business and marketing roles.",
      },
      {
        title: "Career Readiness Program",
        badge: "Career",
        duration: "Short Module",
        highlight:
          "Basic resume building, interview tips, group discussions and professional communication to support job search.",
      },
    ],
  },
];

const NonTechnical = () => {
  return (
    <main className="section">
      <div className="container">
        {/* Intro row */}
        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <div className="hero-badge mb-3">
              <span className="hero-badge-dot" />
              <span>Non Technical Courses • Nobel IT Solutions &amp; Development</span>
            </div>
            <h1 className="section-heading mb-3">
              Non technical courses for everyday skills and career growth.
            </h1>
            <p className="section-subtitle mb-3">
              Along with technical IT courses, Nobel IT Solutions also offers non
              technical programs like Spoken English, Soft Skills, Basic Computer, MS
              Office, Tally and Digital Skills to support overall career development.
            </p>
            <p className="section-subtitle mb-0">
              These courses are ideal for students, freshers and professionals who want
              to build confidence in communication, office tools and personality, and
              prepare for job roles in different industries.
            </p>
          </div>
        </div>

        {/* Category blocks */}
        {nonTechnicalBlocks.map((block) => (
          <section key={block.category} className="mb-5">
            <div className="d-flex justify-content-between align-items-end mb-3">
              <div>
                <h2 className="h4 section-heading mb-1">{block.category}</h2>
              </div>
            </div>
            <div className="row g-4">
              {block.courses.map((course) => (
                <div className="col-md-6 col-lg-3" key={course.title}>
                  <div className="card-elevated h-100 p-3 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="course-pill">
                        <span
                          className="rounded-circle bg-success"
                          style={{ width: 6, height: 6 }}
                        />
                        <span>{course.badge}</span>
                      </span>
                    </div>
                    <h3 className="h6 mb-2">{course.title}</h3>
                    <p className="section-subtitle small mb-3 flex-grow-1">
                      {course.highlight}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="/contact" className="small text-decoration-none">
                        Get details →
                      </a>
                      <a href="/contact" className="small text-decoration-none">
                        Join batch →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA row */}
        <div className="row g-4 mt-4">
          <div className="col-md-7">
            <div className="contact-card p-4 h-100">
              <h2 className="h5 mb-2">Combine non technical courses with IT programs.</h2>
              <p className="section-subtitle mb-3">
                Strengthen your profile by adding soft skills, office tools and digital
                skills along with your technical course like Full Stack, Testing or Data
                Analytics.
              </p>
              <Button href="/Contact" className="btn-primary-soft d-flex justify-content-center">
                Ask for combo options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NonTechnical;