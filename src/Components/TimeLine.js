import React from "react";

function TimeLine() {
  return (
    <div className="main">
      <div className="container timeline">
        <div className="row ">
          <div className="col-6 mx-2 ">
            <div className="card text-right p-3" style={{ border: "none" }}>
              <div className="card-title">
                <h2 className="text-dark text-right ">
                  Application Period
                  <hr className="bg-dark" />
                </h2>
              </div>
              <div className="card-body">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias autem obcaecati culpa eos minima aperiam repellendus
                  harum neque facere amet quo, laboriosam ab? Corporis, neque?
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-2 text-left">
            <button className="btn btn-sm btn-dark my-3">
              February 20 , 2021
            </button>
          </div>
        </div>
        {/* next data */}
        <div className="row ">
          <div className="col mx-2 text-right">
            <button className="btn btn-sm btn-dark my-3">
              February 20 , 2021
            </button>
          </div>
          <div className="col-6 mx-2">
            <div className="card text-left p-3" style={{ border: "none" }}>
              <div className="card-title">
                <h2 className="text-dark ">
                  Application Period
                  <hr className="bg-dark" />
                </h2>
              </div>
              <div className="card-body">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias autem obcaecati culpa eos minima aperiam repellendus
                  harum neque facere amet quo, laboriosam ab? Corporis, neque?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* next */}
      </div>
    </div>
  );
}

export default TimeLine;
