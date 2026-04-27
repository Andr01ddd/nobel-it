// src/pages/TechnicalCourses.jsx
import React from "react";
import { Button } from "react-bootstrap";

const technicalCourses = [
  {
    category: "Full Stack Programs",
    courses: [
      {
        title: "Java Full Stack Developer",
        badge: "Job-Oriented Program",
        duration: "6–8 Months",
        highlight:
          "Learn Core Java, Advanced Java, Spring Boot, Hibernate, REST APIs, front-end and database to become a job-ready Java Full Stack Developer.",
      },
      {
        title: ".NET Full Stack Developer",
        badge: "Microsoft Stack",
        duration: "6–8 Months",
        highlight:
          "Master C#, ASP.NET Core / MVC, Web API, Entity Framework, SQL Server and front-end technologies for .NET Full Stack roles.",
      },
      {
        title: "Python Full Stack Developer",
        badge: "Beginner Friendly",
        duration: "5–7 Months",
        highlight:
          "Python programming, Django/Flask, REST APIs, HTML/CSS/JS and database integration for full stack Python development.",
      },
      {
        title: "MERN Stack / Web Full Stack",
        badge: "Modern Web",
        duration: "5–7 Months",
        highlight:
          "Front-end and back-end web development using HTML, CSS, JavaScript, React/Angular and Node.js with database skills.",
      },
    ],
  },
  {
    category: "Programming & Core Technologies",
    courses: [
      {
        title: "Core Java / Advanced Java",
        badge: "Programming",
        duration: "3–4 Months",
        highlight:
          "Strong foundation in Java programming, OOP, collections, multithreading and advanced concepts for application development.",
      },
      {
        title: "C / C++ Programming",
        badge: "Fundamentals",
        duration: "2–3 Months",
        highlight:
          "Structured programming concepts, pointers, functions, arrays and OOP with C++ for logic building.",
      },
      {
        title: "Python Programming",
        badge: "High Demand",
        duration: "2–3 Months",
        highlight:
          "Python basics, functions, modules, file handling and scripting as a base for automation, analytics and back‑end development.",
      },
    ],
  },
  {
    category: "Data Analytics & Data Science",
    courses: [
      {
        title: "Data Analytics",
        badge: "Analytics Career",
        duration: "4–6 Months",
        highlight:
          "Data analysis using Excel, SQL, Power BI / Tableau, Python basics and visualization for business reporting roles.",
      },
      {
        title: "Data Science / Machine Learning",
        badge: "Advanced",
        duration: "5–7 Months",
        highlight:
          "Python for data science, NumPy, Pandas, ML algorithms, model building and real‑world datasets.",
      },
    ],
  },
  {
    category: "Software Testing & Quality",
    courses: [
      {
        title: "Software Testing (Manual + Automation)",
        badge: "QA Track",
        duration: "3–4 Months",
        highlight:
          "Manual testing concepts, test case design, defect tracking and automation with Selenium and frameworks.",
      },
    ],
  },
  {
    category: "Other Technical Courses",
    courses: [
      {
        title: "Android App Development",
        badge: "Mobile",
        duration: "3–4 Months",
        highlight:
          "Android fundamentals, UI design, APIs and database integration for mobile applications.",
      },
      {
        title: "UI / UX & Web Designing",
        badge: "Design",
        duration: "2–4 Months",
        highlight:
          "HTML5, CSS3, responsive web design, basic UI/UX concepts and popular tools for modern interfaces.",
      },
      {
        title: "Cyber Security / Ethical Hacking",
        badge: "Security",
        duration: "3–4 Months",
        highlight:
          "Security fundamentals, ethical hacking concepts and tools for entry‑level cyber security roles.",
      },
      {
        title: "DevOps & Cloud Basics",
        badge: "Infra & Cloud",
        duration: "3–4 Months",
        highlight:
          "DevOps concepts, CI/CD, version control and basics of cloud platforms such as AWS/Azure.",
      },
    ],
  },
];

const Technical = () => {
  return (
    <main className="section">
      <div className="container">
        {/* Intro */}
        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <div className="hero-badge mb-3">
              <span className="hero-badge-dot" />
              <span>Technical Courses • Nobel IT Solutions &amp; Development</span>
            </div>
            <h1 className="section-heading mb-3">
              Technical courses that make you job ready in IT.
            </h1>
            <p className="section-subtitle mb-3">
              Enroll in top IT courses in Pune at Nobel IT Solutions. Learn Full Stack
              Development, Python, Java, .NET, Web Development, Data Science, Android
              and more with practical, job oriented training.
            </p>
            <p className="section-subtitle mb-0">
              Courses are designed for students, freshers and working professionals who
              want to build strong foundations and hands on skills with real time
              projects and placement support.
            </p>
          </div>
        </div>

        {/* Category sections */}
        {technicalCourses.map((block) => (
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
                        Get syllabus →
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

        {/* CTA */}
        <div className="row g-4 mt-4 d-flex justify-content-center">
          <div className="col-md-7">
            <div className="contact-card p-4 h-100">
              <h2 className="h5 mb-2">Not sure which course is right for you?</h2>
              <p className="section-subtitle mb-3">
                Talk to our counsellor to understand which full stack, programming,
                testing or analytics course suits your background and goals.
              </p>
              <Button href="/Contact" className="btn-primary-soft">
                Book Free Counseling
              </Button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Technical;