function Services() {
return (
<>
<main className="section">
<div className="container">
{/* Hero / Intro row */}
<div className="row g-4 align-items-center mb-4">
    <div className="col-lg-7">
        <div className="hero-badge mb-3">
            <span className="hero-badge-dot" />
            <span>Services • Training & Development</span>
        </div>
        <h1 className="section-heading mb-3">
            Training, development & career services under one roof.
        </h1>
        <p className="section-subtitle mb-3">
            Nobel IT Solutions &amp; Development offers job‑oriented IT training,
            software and web application development, mobile app development and
            other IT services for students, professionals and businesses.
        </p>
        <p className="section-subtitle mb-0">
            Whether you want to start a career in IT, upgrade your team’s skills or
            build custom software, our services are designed to support you at every
            stage — from learning to implementation.
        </p>
    </div>

</div>

{/* Training & career services */}
<div className="row g-4 mb-5">
    <div className="col-12">
        <h2 className="section-heading mb-2">Training &amp; career services</h2>
        <p className="section-subtitle mb-3">
            Structured training, career support and placement‑oriented programs that
            help you become industry‑ready in IT.
        </p>
    </div>

    <div className="col-md-4">
        <div className="card-elevated p-4 h-100">
            <span className="course-pill mb-2">
                <span
                    className="rounded-circle bg-success"
                    style={{ width: 6, height: 6 }}
                />
                <span>Career Services</span>
            </span>
            <h3 className="h6 mb-2">Career counselling &amp; guidance</h3>
            <p className="section-subtitle small mb-0">
                Helping students and professionals choose the right IT career path,
                technologies and training program based on their background and goals.
            </p>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card-elevated p-4 h-100">
            <span className="course-pill mb-2">
                <span
                    className="rounded-circle bg-success"
                    style={{ width: 6, height: 6 }}
                />
                <span>Job‑Oriented Programs</span>
            </span>
            <h3 className="h6 mb-2">Job‑oriented &amp; placement programs</h3>
            <p className="section-subtitle small mb-0">
                Training with real‑time projects, interview preparation, resume
                building and placement assistance to help you secure IT jobs.
            </p>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card-elevated p-4 h-100">
            <span className="course-pill mb-2">
                <span
                    className="rounded-circle bg-success"
                    style={{ width: 6, height: 6 }}
                />
                <span>Corporate Training</span>
            </span>
            <h3 className="h6 mb-2">Corporate &amp; team training</h3>
            <p className="section-subtitle small mb-0">
                Customized corporate training programs to upgrade teams on
                full‑stack development, testing, data analytics and other IT skills.
            </p>
        </div>
    </div>
</div>

{/* Development services grid */}
<div className="row g-4 mb-5">
    <div className="col-12">
        <h2 className="section-heading mb-2">Development &amp; IT services</h2>
        <p className="section-subtitle mb-3">
            From traditional web development to modern mobile, API, ERP, IoT and
            biometric solutions, Nobel IT delivers a wide range of IT services.
        </p>
    </div>

    {/* Web development */}
    <div className="col-md-6 col-lg-4">
        <div className="card-elevated p-4 h-100">
            <h3 className="h6 mb-2">Website &amp; web application development</h3>
            <p className="section-subtitle small mb-2">
                Development of business websites, dynamic portals and scalable web
                applications tailored to client requirements.
            </p>
            <ul className="small section-subtitle mb-0">
                <li>Responsive website design &amp; development</li>
                <li>Custom web applications &amp; dashboards</li>
            </ul>
        </div>
    </div>

    {/* Software & mobile apps */}
    <div className="col-md-6 col-lg-4">
        <div className="card-elevated p-4 h-100">
            <h3 className="h6 mb-2">Software &amp; mobile app development</h3>
            <p className="section-subtitle small mb-2">
                End‑to‑end software and mobile applications for business workflows,
                services and products.[web:3]
            </p>
            <ul className="small section-subtitle mb-0">
                <li>Desktop &amp; web‑based applications</li>
                <li>Android / mobile app development</li>
            </ul>
        </div>
    </div>

    {/* API, ERP & CRM */}
    <div className="col-md-6 col-lg-4">
        <div className="card-elevated p-4 h-100">
            <h3 className="h6 mb-2">API, ERP &amp; CRM solutions</h3>
            <p className="section-subtitle small mb-2">
                Development and integration of APIs, ERP and CRM modules to
                streamline business processes.
            </p>
            <ul className="small section-subtitle mb-0">
                <li>API development (e.g. MVC ASP.NET APIs)</li>
                <li>ERP &amp; CRM modules for operations</li>
            </ul>
        </div>
    </div>

    {/* Arduino & IoT */}
    <div className="col-md-6 col-lg-4">
        <div className="card-elevated p-4 h-100">
            <h3 className="h6 mb-2">Arduino &amp; IoT solutions</h3>
            <p className="section-subtitle small mb-2">
                Solutions using Arduino and IoT to connect devices, collect data and
                build smart applications.
            </p>
            <ul className="small section-subtitle mb-0">
                <li>Sensor‑based IoT prototypes</li>
                <li>Industry‑specific IoT solutions</li>
            </ul>
        </div>
    </div>

    {/* Biometric integration */}
    <div className="col-md-6 col-lg-4">
        <div className="card-elevated p-4 h-100">
            <h3 className="h6 mb-2">Biometric integration</h3>
            <p className="section-subtitle small mb-2">
                Integration of biometric systems into applications for attendance,
                access control and security.
            </p>
            <ul className="small section-subtitle mb-0">
                <li>Biometric attendance &amp; access systems</li>
                <li>Integration with existing software</li>
            </ul>
        </div>
    </div>

    {/* Other IT consulting */}
    <div className="col-md-6 col-lg-4">
        <div className="card-elevated p-4 h-100">
            <h3 className="h6 mb-2">Other IT consulting &amp; support</h3>
            <p className="section-subtitle small mb-2">
                Consulting for custom application development, process management,
                mobile technologies and ongoing maintenance.
            </p>
            <ul className="small section-subtitle mb-0">
                <li>IT consulting &amp; solution design</li>
                <li>Maintenance &amp; support services</li>
            </ul>
        </div>
    </div>
</div>
</div>
</main>
</>
);
}

export default Services;