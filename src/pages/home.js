import React from "react";
import Header from "../components/header";
import "../App.css";
import Data from "./mock.json";
import ArtworkCard from "../components/artworkCard";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div style={{ backgroundColor: "#F3F6FC", height: window.innerHeight }}>
      <Header />
      <br />

      <div className="page-padding">
        <h3> Today's Art Collections </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem a
          praesentium doloremque velit in inventore nisi nulla soluta
          perspiciatis. Placeat dolor quae recusandae aperiam aliquid adipisci a
          inventore minima sit.
        </p>
        <br />
        <ul className="artwork-list">
          {Data.artworks.map(({ id, name, description, img_uri }) => (
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
  );
};

export default Home;
