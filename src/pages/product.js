import React, { useState } from "react";

import Header from "../components/header";
import "../App.css";
import { navigate } from "@reach/router";

const Product = (props) => {
  const { img_uri, name, description, price_id } = props.location.state;
  const [cardInputs, showCardInputs] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardValidity, setCardValidity] = useState("");

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
        <br />

        <div className="product-grid">
          <div className="product-card">
            <img alt="product" className="product-img" src={img_uri} />
            <br />
            <br />
            <div className="padding">
              <h4> {name} </h4>
              <p> Ref ID: {new Date().getTime()} </p>
            </div>
          </div>

          <div className="product-card">
            <div className="padding">
              <br />
              <h4> About The Artwork </h4>
              <p>Price: $12.00</p>
              <p> Posted on {new Date().getTime()} </p>

              <hr />
              <p> {description} </p>
              {!cardInputs ? (
                <ul className="product-specifications">
                  <li className="specification"> Something here for you </li>
                  <li className="specification"> Something here for you </li>
                  <li className="specification"> Something here for you </li>
                  <li className="specification"> Something here for you </li>
                </ul>
              ) : (
                <form>
                  <h5> Payment Details </h5>
                  <hr />
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
              )}

              <br />

              <button
                onClick={() => navigate(`/checkout/${price_id}`, {
                    state : {
                        itemName : name
                    }
                })}
                className="btn"
              >
                Proceed To Purchase Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;