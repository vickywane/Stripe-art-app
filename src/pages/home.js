import React from "react";
import Header from "../components/header";
import "../App.css";
import Banner from "../components/banner";
import ArtworkCard from "../components/artworkCard";
import data from "./mock.json";

const Home = () => {
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
            {data.artworks.map(({ id, name, img_uri, description }) => (
              <li key={id}>
                <ArtworkCard
                  description={description}
                  img_uri={img_uri}
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
