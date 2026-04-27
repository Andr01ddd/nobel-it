import React from "react";

function Testimonials() {
  return (
    <div className="container my-5 pt-5">
      <div
        id="testimonialsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              className="rounded-circle shadow mb-4"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Maria Kate</h5>
                <p>Photographer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
                  deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam
                  illo, beatae quia fugit consequatur laudantium velit magnam error.
                  Consectetur distinctio fugit doloremque.
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              className="rounded-circle shadow mb-4"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">John Doe</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
                  deleniti nesciunt sint eligendi reprehenderit reiciendis.
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              className="rounded-circle shadow mb-4"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Anna Deynah</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
                  deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam
                  illo, beatae quia fugit consequatur laudantium velit magnam error.
                  Consectetur distinctio fugit doloremque.
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>
        </div>

        {/* Bootstrap arrows */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;