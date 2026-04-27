import React from "react";
import { Button } from "react-bootstrap";

const Personality = () => {
  return (
    <main className="section">
      <div className="container">
        {/* Intro / hero row */}
        <div className="row g-4 mb-4 align-items-center">
          <div className="col-lg-8">
            <div className="hero-badge mb-3">
              <span className="hero-badge-dot" />
              <span>Soft Skills &amp; Personality Development</span>
            </div>
            <h1 className="section-heading mb-3">
              Personality Development &amp; Soft Skills Training in Pune.
            </h1>
            <p className="section-subtitle mb-3">
              Enhance your professional and personal growth with Nobel IT’s Personality
              Development and Soft Skills course in Pune. This program focuses on
              communication, teamwork, leadership, problem-solving and emotional
              intelligence to help you perform confidently in interviews and the
              workplace.
            </p>
            <p className="section-subtitle mb-0">
              The course is ideal for students, freshers and working professionals who
              want to improve their interpersonal skills, build self confidence, handle
              conflicts better and create a positive impression in professional
              environments.
            </p>
          </div>

          {/* Key details card */}
          <div className="col-lg-4 py-5">
            <div className="contact-card p-4 h-100">
              <h2 className="h6 mb-3">Course snapshot</h2>
              <div className="d-flex justify-content-between mb-2">
                <span className="section-subtitle small">Course </span>
                <span className="small"> Personality Development / Soft Skills</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="section-subtitle small">Duration</span>
                <span className="small">40 Hours</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="section-subtitle small">Batch</span>
                <span className="small">Weekdays</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="section-subtitle small">Mode</span>
                <span className="small">Classroom / Online (as per availability)</span>
              </div>
              <div className="mt-3">
              <Button href="/Contact" className="btn-primary-soft d-flex justify-content-center">
                Enquire for next batch
              </Button>
              </div>
            </div>
          </div>
        </div>

        {/* What you will learn */}
        <div className="row g-4 mb-5 ">
          <div className="col-lg-7">
            <h2 className="section-heading mb-2">What you will learn</h2>
            <p className="section-subtitle mb-3">
              The Personality Development and Soft Skills course covers the key
              interpersonal skills required to grow in today's competitive job market,
              along with practical activities and role plays.
            </p>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card-elevated p-3 h-100">
                  <h3 className="h6 mb-2">Communication skills</h3>
                  <p className="section-subtitle small mb-0">
                    Improve verbal and non-verbal communication, active listening,
                    clarity of expression and professional email / presentation
                    skills.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-elevated p-3 h-100">
                  <h3 className="h6 mb-2">Teamwork &amp; collaboration</h3>
                  <p className="section-subtitle small mb-0">
                    Learn how to work effectively in teams, build trust, participate
                    in group discussions and contribute positively to group tasks.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-elevated p-3 h-100">
                  <h3 className="h6 mb-2">Leadership &amp; responsibility</h3>
                  <p className="section-subtitle small mb-0">
                    Understand basic leadership traits, ownership, decision-making and
                    how to take initiative in academic and workplace settings.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-elevated p-3 h-100">
                  <h3 className="h6 mb-2">Problem-solving &amp; critical thinking</h3>
                  <p className="section-subtitle small mb-0">
                    Develop logical thinking, structured problem-solving and the
                    ability to assess situations calmly before responding.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-elevated p-3 h-100">
                  <h3 className="h6 mb-2">Emotional intelligence &amp; confidence</h3>
                  <p className="section-subtitle small mb-0">
                    Learn to manage emotions, build self-confidence, maintain a
                    positive attitude and handle criticism constructively.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-elevated p-3 h-100">
                  <h3 className="h6 mb-2">Conflict handling &amp; workplace etiquette</h3>
                  <p className="section-subtitle small mb-0">
                    Techniques to handle disagreements, maintain professionalism,
                    follow workplace etiquette and create a good impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft skills + interview prep section */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card-elevated p-4 h-100">
              <h2 className="h6 mb-2">Soft skills &amp; interview preparation</h2>
              <p className="section-subtitle small mb-2">
                Nobel IT also integrates personality development with interview
                preparation, so that you are not only technically strong but also ready
                to present yourself effectively to employers.
              </p>
              <ul className="section-subtitle small mb-0">
                <li>Mock HR interviews &amp; common HR questions.</li>
                <li>Body language &amp; first impression tips.</li>
                <li>Resume and profile presentation guidance.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="contact-card p-4 h-100">
              <h2 className="h6 mb-2">Want to know if this course is for you?</h2>
              <p className="section-subtitle small mb-3">
                Talk to our counsellor to understand how Personality Development and
                Soft Skills training can support your career and interview goals.
              </p>
              <Button href="/Contact" className="btn-primary-soft d-flex justify-content-center">
                Talk to counsellor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Personality;