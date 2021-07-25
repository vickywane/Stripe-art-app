import React, { useState } from "react";

import Header from "../components/header";
import "../App.css";

const Checkout = (props) => {
  const { img_uri, itemName, description } = props.location.state;
  const [cardInputs, showCardInputs] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardValidity, setCardValidity] = useState("");

  const makePayment = () => {};

  return (
    <div
      style={{
        height: "100vh",
        background: "#F3F6FC",
      }}
    >
      <Header />

      <div className="product-page-padding">
        <br />

        <div className="align-center">
          <div className="payment-card">
            <h5 className="align-center"> {itemName} </h5>
            <p>
              <b>Total Price:</b> $12.00
            </p>
            <p>
              <b> Product Id: </b> {new Date().getTime()}{" "}
            </p>

            <hr />
            <p> {description} </p>
            <form>
              <h5> Payment Details </h5>
              <br />
              <div className="input-container">
                <label id="name"> Cardholder Name </label>
                <input
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="payment-input"
                  placeholder="Bank Cardholder Name"
                  type="text"
                />
              </div>
              <br />
              <div className="input-container">
                <label id="name"> Card Number </label>
                <input
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="payment-input"
                  placeholder="Bank Card Numbers"
                  type="number"
                />
              </div>
              <br />
              <div className="input-container">
                <label id="name"> Card CVC </label>
                <input
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  className="payment-input"
                  placeholder="Bank Card CVC"
                  type="text"
                />
              </div>
              <br />
              <div className="input-container">
                <label id="name"> Card Validity </label>
                <input
                  value={cardValidity}
                  onChange={(e) => setCardValidity(e.target.value)}
                  className="payment-input"
                  placeholder="Bank Card Validiity"
                  type="text"
                />
              </div>
            </form>
            <br />

            <button
              style={{ width: "100%" }}
              onClick={() => showCardInputs(true)}
              className="btn"
            >
              Confirm Payment Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
