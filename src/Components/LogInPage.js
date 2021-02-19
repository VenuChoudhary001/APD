import React from "react";
import Footer from "./Footer";

function LogInPage() {
  return (
    <div className="logIn mb-0">
      <div className="container mt-4">
        <div className="row">
          <div className="col offset-md-1 offset-sm-2 my-form ">
            <h1 className="p-2 text-white display-4 mt-4 text-center ">
              REGISTER
              <hr className="bg-light" />
            </h1>
            <form className="form p-2  text-white">
              <div className="form-group">
                <label htmlFor="name" className="h4">
                  Name :
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="h4">
                  Email :
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="h4">
                  Contact :
                </label>
                <input type="text" className="form-control" />
              </div>

              <button className="btn d-block mx-auto btn-outline-light my-3">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default LogInPage;
