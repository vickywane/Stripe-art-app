import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "../App.css";
import Banner from "../components/banner";
import ArtworkCard from "../components/artworkCard";

const Home = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    (async () => await fetchArtworks())();
  }, []);

  const fetchArtworks = async () => {
    const res = await fetch(`${process.env.REACT_APP_FUNCTION_ENDPOINT}/products`);
    const { data } = await res.json();

    setArtworks(data);
  };

  return (
    <div style={{ backgroundColor: "#F3F6FC", height: "100vh" }}>
      <Header />
      <Banner />
      <br />
      <br />

      <div className="page-padding">
        <div style={{}}>
          <div className="flex">
            <div className="align-center">
              <h4> My Rated Art Paints </h4>
            </div>
          </div>

          <p>
            Every artist dips his brush in his own soul, <br />
            and paints his own nature into his pictures.
          </p>
        </div>

        <br />

        <div>
          <ul className="artwork-list">
            {artworks.map(({ id, name, img_uri, images, description }) => (
              <li key={id}>
                <ArtworkCard
                  productId={id}
                  description={description}
                  img_uri={images[0]}
                  name={name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
