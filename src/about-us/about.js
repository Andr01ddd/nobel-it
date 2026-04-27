// src/pages/About.jsx
import React from "react";
import './aboutus.css';
import keyPeople from './key_people.png';

const About = () => {
  return (
    <body>
      <div class="page-wrapper">
        <div class="page-header my-5">
          <div class="page-title">
            <h1>
              We’re building the next generation of
              <span class="gradient"> developers!</span>
            </h1>
            <p>
              Nobel IT Solutions and Development is a Pune based training & placement company engaged in providing training and development courses and services such as web application development for students and corporate professionals. The company was founded in 2008 by Mr. Prashant Amritkar with the specific aim of working for training and development of core and advanced IT courses to boost the knowledge of students, corporate entities and corporate people in their respective IT field.
              We offer wide range of training and development courses in the IT field and various services from the traditional web application development to the mobile application development.We also offer consultancy services for varied web solutions like Custom Application Development, Process Management, Mobile Technologies and their Maintenance & Support.We are adept at the technologies including PHP, Python, JavaScript, Ajax, Web 2.0 , .Net, Java etc. You can view all the technology features we use.
              We are proud to have expertise for both desktop and mobile technologies. These members bring with them comprehensive experience from live projects that they have worked on; giving them the leverage to learn and experiment. Hence the knowledge that they have is not the one that has been passed on but gained from ingenuity and expertise.
            </p>
          </div>

          <div class="stats-strip">
            <div class="stat-pill">
              <i class="fa-solid fa-users"></i>
              <span class="number">12,000+</span>
              learners
            </div>
            <div class="stat-pill">
              <i class="fa-solid fa-laptop-code"></i>
              <span class="number">45+</span>
              hands‑on courses
            </div>
          </div>
        </div>

        <div class="content-grid">
          <section id="founder" class="card founder-card">
            <div class="founder-top">
              <div class="founder-avatar">
                <div class="avatar-circle">
                  <div class="avatar-inner"></div>
                </div>
                <div class="founder-meta">
                  <h3>Mr. Prashant Amritkar</h3>
                  <span class="role">Founder</span>
                </div>
              </div>
              <div class="signature">
                MCA, -University of Pune<br />
              </div>
            </div>

            <div class="founder-story">
              <p>
                Mr. Prashant Amritkar Founder – <span class="highlight">Noble IT Solutions</span> has completed his MCA from University Of Pune. He is very passionate about his idea of NobleIT Solutions and its implementation. With regards to this he is associated with providing training and development for various courses to stakeholders of IT field such as corporate entities, students, groups, and other individuals. He is regularly involved in conducting workshops and seminars for master and bachelor students from professional courses like engineering, computer science and application as per their need. He also believes in providing strong content and quality training to corporate people as per their custom requirements.
              </p>
            </div>
          </section>
           <img src={keyPeople} style={{"border-radius": "50%", "height": "100%"}} alt="Nobel IT Office"/>
        </div>
      </div>
    </body>
  );
};

export default About;