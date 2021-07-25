import { navigate } from "@reach/router";

const ArtworkCard = ({ name, description, img_uri, price, product_id }) => (
  <div className="artwork-card">
    <div
      className="card-top"
      style={{
        backgroundImage: `url(${img_uri})`,
      }}
    >
      <div className={"flex"} style={{ justifyContent: "space-between" }}>
        <h5> {name} </h5>
      </div>
    </div>

    <div className="artwork-details">
      <p> $12.00 </p>
      <p> {description} </p>

      <div style={{ justifyContent: "space-between" }} className="flex"></div>
      <button
        onClick={() =>
          navigate(`product/${name}`, {
            state: {
              name,
              description,
              price,
              img_uri,
              product_id,
            },
          })
        }
        className="btn"
      >
        View Artwork
      </button>
      <br />
    </div>
  </div>
);

export default ArtworkCard;
