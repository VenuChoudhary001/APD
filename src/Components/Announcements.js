import React from "react";

function Announcements() {
  return (
    <div className="container mt-4">
      <h1 className="display-md-4 text-center">
        Announcements
        <hr className="bg-dark" />
      </h1>
      <div className="row d-flex justify-content-md-center flex-wrap ">
        <div className="card-container mx-2 my-2">
          <div className="main-card-img">
            <img
              src="https://images.unsplash.com/photo-1564522365984-c08ed1f78893?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlZWNofGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="card-content text-white">
            <p className="title h1" style={{ overflow: "hidden" }}>
              Heading
            </p>
            <p className="lead text center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              libero! Illum explicabo placeat porro in.
            </p>
          </div>
        </div>
        <div className="card-container mx-2 my-2">
          <div className="main-card-img">
            <img
              src="https://images.unsplash.com/photo-1564522365984-c08ed1f78893?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlZWNofGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="card-content text-white">
            <p className="title h1" style={{ overflow: "hidden" }}>
              Heading
            </p>
            <p className="lead text center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              libero! Illum explicabo placeat porro in.
            </p>
          </div>
        </div>
        <div className="card-container mx-2 my-2">
          <div className="main-card-img">
            <img
              src="https://images.unsplash.com/photo-1564522365984-c08ed1f78893?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlZWNofGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="card-content text-white">
            <p className="title h1" style={{ overflow: "hidden" }}>
              Heading
            </p>
            <p className="lead text center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              libero! Illum explicabo placeat porro in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
