const ArtworkCard = ({ name, description, img_uri }) => (
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
      <hr />
      <div style={{ justifyContent: "space-between" }} className="flex">
        <div className="align-center">
          <p> $12.00 </p>
        </div>

        <div>
          <button className="btn">Purchase</button>
        </div>
      </div>
      <br />
      <p> {description} </p>
    </div>
  </div>
);

export default ArtworkCard;
