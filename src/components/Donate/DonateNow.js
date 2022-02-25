import React from "react";
import "./DonateNow.css";

function DonateNow() {
  return (
    <div className="donationForm d-flex flex-column align-items-center py-4">
      <h1>BLOOD DONOR QUESTIONNAIRE & CONSENT FORM</h1>
      <form className="mx-5 my-4 p-4">
        <ol>
          <div className="row">
            <li className="donor col">Do you feel well today?</li>
            <div className="form-check col-md-1">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                No
              </label>
            </div>
          </div>
          <div className="row">
            <li className="donor col">
              Did you have something to eat in the last 4 hours?
            </li>
            <div className="form-check col-md-1">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                No
              </label>
            </div>
          </div>
          <div className="row">
            <li className="donor col">Did you sleep well last night?</li>
            <div className="form-check col-md-1">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                No
              </label>
            </div>
          </div>
          <div className="row">
            <li className="donor col">
              Have You any reason to believe that you may be infected By either
              Hepatits,Malaria,HIV/AIDS and /or venereal disease?
            </li>
            <div className="form-check col-md-1">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                No
              </label>
            </div>
          </div>
          <li className="donor">
            In the last 6 months have you had any history of the following :
          </li>
          <div className="row">
            <div className="form-check col-md-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Unexplained weight loss
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Repeated diarrhoea
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col-md-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Swollen glands
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Continuos low-grade fever
              </label>
            </div>
          </div>
          <li className="donor">In the last 6 months have you had any :</li>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Tattooing
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Ear piercing
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Dental Extraction
              </label>
            </div>
          </div>
          <li className="donor">
            Do you suffer from or have suffered from any of the following
            diseases.
          </li>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Heart Diseases
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Lung Disease
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Kidney Disease
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Cancer / Malignant disease
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Epilepsy
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Diabetes
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Abnormal Bleeding Tendency
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Tuberculosis
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Hepatits B/C
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Allergic /disease
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Jaundice(last 1 yr.)
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Sexually Trans. Disease
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Malaria (6 months)
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Typhoid (last 1 yr.)
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Fainting Spells
              </label>
            </div>
          </div>
          <ul>
            <li>
              Are you taking or have taken any of these in the past 72 hours ?
            </li>
          </ul>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Antibiotics
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Aspirin
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Alcohol
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Steroids
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Vaccinations
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Dog Bite / Rabies Vaccine
              </label>
            </div>
          </div>
          <li className="donor">
            Is there any history of blood transfusion in the past 6 months ?
          </li>
          <div className="row">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Major
              </label>
            </div>{" "}
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Minor
              </label>
            </div>{" "}
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Blood Transfusion
              </label>
            </div>
          </div>
          <li className="donor">For Women donours </li>
          <ul>
            {" "}
            <div className="row">
              <li className="part col">Are you pregnant?</li>
              <div className="form-check col-md-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  No
                </label>
              </div>
            </div>
            <div className="row">
              <li className="part col">
                Have you had any an abortion in the last 3 months ?
              </li>
              <div className="form-check col-md-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  No
                </label>
              </div>
            </div>
            <div className="row">
              <li className="part col">
                Do you Have a child less than one year old ?
              </li>
              <div className="form-check col-md-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  No
                </label>
              </div>
            </div>
          </ul>
          <li className="donor">
            Would you like to be informed about any abnormal test result at the
            address furnished by you ?
          </li>
          <div className="row">
            <div className="form-check col-md-1">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                No
              </label>
            </div>
          </div>
          <ol type="a">
            <li>
              Have you read and understood all the information presented and
              answered all the question truthfully, as any incorrect statement
              or concealment may affect your health or may harm the recipient
            </li>
            <div className="row">
              <div className="form-check col-md-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  No
                </label>
              </div>
            </div>
            <li>I understand that</li>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Blood donation is a totally voluntary act and no inducement
                or remuneration has been offered.
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Donation of blood /components is a medical procedure and
                that by donation voluntarily, I accept the risks associated with
                this procedure.
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                My blood will be tested for hepatitis C, Malaria parasite,
                HIV/AIDS and veneral disease in addition to any other screening
                tests required to ensured blood safety.
              </label>
            </div>
          </ol>
        </ol>
      </form>
    </div>
  );
}

export default DonateNow;
