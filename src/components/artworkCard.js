import { navigate } from "@reach/router";
import React, { useState, useEffect } from "react";

const ArtworkCard = ({ name, description, img_uri, productId }) => {
  const [priceData, setPriceData] = useState({});

  useEffect(() => {
    (async () => await fetchPrice())();
  }, []);

  const fetchPrice = async () => {
    const res = await fetch(
      `http://localhost:4040/api/price?product=${productId}`
    );
    const { data } = await res.json();

    setPriceData(data);
  };

  return (
    <div className="artwork-card">
      <div
        className="card-top"
        style={{
          backgroundImage: `url(${img_uri})`,
        }}
      ></div>

      <div className="artwork-details">
        <div className={"align-center"}>
          <h5> {name} </h5>
        </div>
        <hr />
        <div style={{ justifyContent: "space-between" }} className="flex">
          <div className="align-center">
            <p> {`$${priceData.unit_amount}`} </p>
          </div>

          <div>
            <button
              className="btn"
              onClick={() =>
                navigate(`/checkout/${productId}`, {
                  state: {
                    name,
                    productId,
                    priceEntityId: priceData.id,
                    price: priceData.unit_amount,
                    purchaseType : priceData.type
                  },
                })
              }
            >
              Purchase
            </button>
          </div>
        </div>
        <br />
        <p> {description} </p>
      </div>
    </div>
  );
};

export default ArtworkCard;
