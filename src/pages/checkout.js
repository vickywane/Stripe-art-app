import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "../components/header";
import "../App.css";

const Checkout = (props) => {
  const { purchaseType, priceEntityId, name, price } = props.location.state;

  const [cardNumber, setCardNumber] = useState("4242424242424242");
  const [cardName, setCardName] = useState("John Doe");
  const [cvc, setcvc] = useState("211");
  const [cardExpiryMonth, setCardExpiryMonth] = useState("08");
  const [cardExpiryYear, setCardExpiryYear] = useState("2024");
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { user } = useAuth0();

  const makePayment = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_FUNCTION_ENDPOINT}/purchase`,
        {
          method: "POST",
          body: JSON.stringify({
            number: cardNumber,
            exp_month: cardExpiryMonth,
            exp_year: cardExpiryYear,
            purchaseAmount : price,
            purchaseType,
            priceEntityId,
            cvc,
            email: user.email,
          }),
        }
      );

      if (res.status === 200) {
        await res.json();

        setPaymentSuccess(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    let n = price.toString().split("");

    n.push(".", n.length - 3);

    return n.join("");
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#F3F6FC",
      }}
    >
      <Header />

      <div
        className="product-page-padding"
        style={{
          height: window.innerHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="align-center">
          <div className="payment-card">
            <h5 className="align-center">
              <b>{name} Checkout </b>
            </h5>
            <p>
              <b>Total Price:</b> {`$${formatPrice(price)}`}
            </p>
            <p>
              <b> Payment Type: </b> {purchaseType.toUpperCase()}
            </p>

            <hr />
            {!paymentSuccess ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  makePayment();
                }}
              >
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
                    value={cvc}
                    onChange={(e) => setcvc(e.target.value)}
                    className="payment-input"
                    placeholder="Bank Card CVC"
                    type="text"
                  />
                </div>
                <br />
                <div className="input-container">
                  <label id="name"> Card Expiry Month </label>
                  <input
                    value={cardExpiryMonth}
                    onChange={(e) => setCardExpiryMonth(e.target.value)}
                    className="payment-input"
                    placeholder="Bank Card Expiry Month"
                    type="text"
                  />
                </div>
                <br />
                <div className="input-container">
                  <label id="name"> Card Expiry Year </label>
                  <input
                    value={cardExpiryYear}
                    onChange={(e) => setCardExpiryYear(e.target.value)}
                    className="payment-input"
                    placeholder="Bank Card Expiry Year"
                    type="text"
                  />
                </div>
                <br />

                <button
                  disabled={loading}
                  style={{ width: "100%" }}
                  onClick={(e) => {
                    e.preventDefault();
                    makePayment();
                  }}
                  className="btn"
                >
                  {!loading ? "Confirm" : "Confirming"} My Payment
                </button>
              </form>
            ) : (
              <div>
                <br />

                <h5 className="align-center">
                  Your {`$${price}`} purchase of {name} was successfull{" "}
                </h5>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
