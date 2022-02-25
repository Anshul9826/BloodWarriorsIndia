import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="main d-flex flex-column">
        <div className=" d-flex align-items-center my-3 m-auto">
          <h1>
            About <span style={{ color: "red" }}>Blood</span> Warriors{" "}
            <span style={{ color: "orange" }}>In</span> 
            <span style={{ color: "blue" }}>d</span>
            <span style={{ color: "green" }}>ia</span>
          </h1>
          <img
            className="rounded-circle ms-2"
            src="/image/heart_anime.gif"
            alt="heart"
            style={{ width: "50px", border: "2px solid red" }}
          />
        </div>
        <div className="section1 d-flex p-4">
          <div className="d-flex flex-column align-items-center">
            <h1 className="my-3"> Message From Our Side</h1>
            <h5>
              We blood warriors India requesting you all atleast donate your
              blood two times in a year.Your one donation can save life upto
              three people.{" "}
            </h5>
            <p>
              We know that there is only one God even though we call all doctors
              the real life god.But everyone can't be the doctors instead they
              can be the part of the god by doanating blood and save other's
              lives.
            </p>
          </div>
          <div>
            <img src="/image/Message.gif" alt="none" />
          </div>
        </div>
        <div
          className="unique-section d-flex flex-column align-items-center my-4 m-auto"
        >
          <h1>How We Are Unique</h1>
          <h5 className="my-3">
            We saw and felt that how a person seek and struggle for blood when
            someone of his own going through that disease so we started a (BWI)
            platform where we reduce trouble of someone and are trying to find
            blood easily. Apart from that someone can start a new life when
            he/she gets blood through us. A platform where we provide blood
            seeker and where people connect to each other by which people aware
            to donnate blood , and its all not about our profit its all about
            humanity and all we are doing related to blood because our main
            focus to donater who donate the blood by helping a little from our
            side.{" "}
          </h5>
        </div>
        <div className="section2 d-flex m-4">
          <div className="section2-text mx-4 d-flex flex-column align-items-center">
            <h1>
              Our Mission <i className="fa-solid fa-hand-holding-droplet"></i>
            </h1>
            <h5>
              Blood warrior is an organization which is trying to help both
              blood donor and blood requestor by using blockchain technology.
              What we are tryinng to do is whenever a person donates blood he
              gets a token from the hospital/Blood donation center. These token
              can be redeemed by the donor at any local buisness(or sponsor) in
              exchange of discount and promotions.
            </h5>
            <h6>
              In this way we are creating a virtual circle of value exchange
              between three parties{" "}
              <ol type="1">
                <li id="id">eligible life donors</li>
                <li id="id">Donation centres</li>
                <li id="id">Local buisness/Sponsors</li>
              </ol>
            </h6>
          </div>
        </div>
        <div className="section3 d-flex align-items-center p-4">
          <img src="/image/image1.webp" alt="about vission" />
          <div className="d-flex flex-column align-items-center">
            <h1>
              Our Vision <i className="fa-solid fa-glasses"></i>{" "}
            </h1>
            <h5>
              At least every healthy person should donate blood 2 time a year.
              and no one should die due to lack of blood and donor should also
              get something in exchange of blood. And we are also trying to
              promote local buisness which will help in increasing GDP of india.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
