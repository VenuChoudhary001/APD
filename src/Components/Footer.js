import React from "react";

function Footer() {
  return (
    <section id="footer" class="mt-4">
      <div class="footer-overlay">
        <div class="row">
          <div class="col">
            <div class="container">
              <div class="row  d-sm-flex flex-row">
                <div class="col-sm-6 mt-2 col-md-6">
                  <div class="container mt-4 text-white p-2">
                    <h5 class="mb-4" style={{ overflow: "hidden" }}>
                      Contact Us{" "}
                    </h5>
                    <hr class="bg-danger" />
                    <ul class="custom-list text-muted">
                      <li>Email us at: </li>
                      <li>debatingsociety.nitdgp@gmail.com</li>
                      <li>Call or message us at:</li>
                      <li> 8017449727</li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-6 mt-2 col-md-6">
                  <div class="container mt-4 text-white p-2">
                    <h5 class="mb-4" style={{ overflow: "hidden" }}>
                      FOLLOW US
                    </h5>
                    <hr class="bg-danger" />
                    <ul class="custom-list text-muted">
                      <li>Facebook</li>
                      <li>Messenger</li>
                      <li>Twitter</li>
                      <li>Instagram</li>
                      <li>LinkedIn</li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="d-block text-center text-white">
                &#169; 2021 Copyright: Debsocnitdgp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
