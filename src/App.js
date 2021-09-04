import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/home";

import { Auth0Provider } from "@auth0/auth0-react";
import Product from "./pages/product";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_CLIENT_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTHO_REDIRECT_URI}
    >
      <Router>
        <Home path="/" exact />
        <Product path="/product/:name" />
        <Checkout path="/checkout/:price_id" />
      </Router>
    </Auth0Provider>
  );
}

export default App;
