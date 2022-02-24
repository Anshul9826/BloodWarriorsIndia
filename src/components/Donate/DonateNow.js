import React from "react";
import "./DonateNow.css";

function DonateNow() {
  return (
    <div className="donationForm d-flex flex-column align-items-center">
      <h3>To Donate Blood Please Answer Some Questions</h3>
      <form className="d-flex flex-column">
      <div className="d-flex">
        <input type="checkbox" id="question1" name="question1" />
        <label htmlFor="question1">Do you feel well today?</label>
      </div>
      </form>
    </div>
  );
}

export default DonateNow;
