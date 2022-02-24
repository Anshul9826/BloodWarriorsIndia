import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="home my-5 me-4 d-flex flex-column">
        <div className="d-flex">

          <section
            className="container d-flex flex-column align-items-center ms-3 p-3"
            id="home"
          >
            <h3 style={{ fontSize: "2rem" }}>
              <strong>
                Give freely, you may never know whom that gift will help.
              </strong>
            </h3>
            <p>
              Your one donation can save or improve the life of up to three
              people, so be the lifesaver..
            </p>

            <h1>
              <strong style={{ fontSize: "3rem" }}>With..</strong>
            </h1>
            <img
              src={props.logo}
              alt="Blood Warriors"
              style={{ width: "250px" }}
            />
            <Link to="/" className="btn btn-lg">
              Donate Now
            </Link>
          </section>
          <div
            className="asset-1 d-flex align-items-center p-3"
          >
            <img
              src="/asset1.jpg"
              alt="asset"
              style={{ width: "700px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
