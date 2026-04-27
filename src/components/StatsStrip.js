import React from "react";

const StatsStrip = () => {
  return (
    <div className="stats-strip px-4 py-3">
      <div className="d-flex justify-content-between text-center w-100">
        <div className="flex-grow-1">
          <div className="fw-semibold fs-4">10+</div>
          <div>Years in Training &amp; Development</div>
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold fs-4">2k+</div>
          <div>Students Trained</div>
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold fs-4">100+</div>
          <div>Hiring Partners</div>
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold fs-4">100%</div>
          <div>Job-Oriented Curriculum</div>
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;