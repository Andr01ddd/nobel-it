import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const courses = [
    {
    title: "MERN Stack Development",
    tag: "Most Popular",
    duration: "80 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "MongoDB, Express.js, React, Node.js, REST APIs & real projects.",
  },
  {
    title: "SQL Developer",
    tag: "Most Popular",
    duration: "80 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "SQL fundamentals, database design, optimization, stored procedures & projects.",
  },
  {
    title: "Python",
    tag: "Career Switch",
    Class: "Weekdays & Weekends",
    duration: "100 Hrs",
    highlight: "Python basics, OOP, Django, REST APIs, SQL & mini projects.",
  },
  {
    title: "Java Full Stack",
    tag: "Beginner Friendly",
    duration: "80 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "Java fundamentals, Spring Boot, REST APIs, SQL & hands‑on projects.",
  },
  {
    title: ".NET Full Stack",
    tag: "Beginner Friendly",
    duration: "80 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "C#, ASP.NET Core, Entity Framework, REST APIs, SQL & real‑world projects.",
  },
  {
    title: "Data Science & Analytics",
    tag: "Career Switch",
    duration: "80 hrs",
    Class: "Weekdays & Weekends",
    highlight: "Python, data analysis, visualization, machine learning, SQL & projects.",
  },
  {
    title: "Generative AI",
    tag: "Cutting Edge",
    duration: "50 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "AI fundamentals, prompt engineering, LLMs, generative models & hands‑on projects.",
  },
    {
    title: "C Programming",
    tag: "Beginner Friendly",
    duration: "40 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "C syntax, data structures, algorithms, problem‑solving & coding interview prep.",
  },
    {
    title: "C++ Programming",
    tag: "Beginner Friendly",
    duration: "40 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "C++ syntax, OOP, STL, data structures, algorithms & coding interview prep.",
  },
    {
    title: "Data Structures & Algorithms",
    tag: "Most Popular",
    duration: "40 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "In‑depth DSA concepts, problem‑solving techniques, coding interview prep & mock interviews.",
  },
      {
    title: "AWS",
    tag: "Most Popular",
    duration: "60 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "AWS fundamentals, core services, architecture best practices, hands‑on labs & projects.",
  },
  {
    title: "Software Testing",
    tag: "Career Switch",
    duration: "16 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "Testing fundamentals, manual & automation testing, Selenium, test cases & real‑world projects.",
  },
  {
    title: "Automation Testing",
    tag: "Career Switch",
    duration: "50 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "Selenium WebDriver, test automation frameworks, Java/Python for automation, real‑world projects & interview prep.",
  },
  {
    title: "DevOps",
    tag: "Cutting Edge",
    duration: "50 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "DevOps principles, CI/CD pipelines, Docker, Kubernetes, infrastructure as code & hands‑on projects.",
  },
  {
    title: "UI Design",
    tag: "Creative Track",
    duration: "50 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "UI design principles, tools like Figma, prototyping, user research & real‑world projects.",
  },
  {
    title: "Cybersecurity",
    tag: "Cutting Edge",
    duration: "90 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "Cybersecurity fundamentals, network security, ethical hacking, penetration testing & hands‑on labs.",
  },
  {
    title: "CCNA",
    tag: "Career Switch",
    duration: "40 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "CCNA fundamentals, network protocols, routing & switching, network security & hands‑on labs.",
  },
  {
    title: "Ethical Hacking",
    tag: "Cutting Edge",
    duration: "50 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "Ethical hacking principles, penetration testing methodologies, tools like Metasploit, real‑world labs & projects.",
  },
  {
    title: "Digital Marketing",
    tag: "Creative Track",
    duration: "50 Hrs",
    Class: "Weekdays & Weekends",
    highlight: "Digital marketing fundamentals, SEO, social media marketing, content marketing, Google Ads & real‑world projects.",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section">
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="section-heading mb-2">
              Job‑oriented courses designed with industry experts.
            </h2>
            <p className="section-subtitle mb-0">
              Choose from full stack, programming, testing and analytics tracks
              tailored to freshers and working professionals.
            </p>
          </div>
          <div className="d-none d-md-block text-end ">
            Weekday &amp; weekend batches, flexible timings, doubt‑clearing support.
          </div>
        </div>
        <Row className="g-4">
          {courses.map((course) => (
            <Col key={course.title} md={4}>
              <div className="card-elevated h-100 p-3 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="course-pill">
                    <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                    <span>{course.tag}</span>
                  </span>
                </div>
                <h5 className="mb-2">{course.title}</h5>
                <p>{course.highlight}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span>Duration: {course.duration}</span>
                  <a href="#contact" className="small text-decoration-none">
                    Know more →
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoursesSection;