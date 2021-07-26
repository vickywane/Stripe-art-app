import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/home";
import { Auth0Provider } from "@auth0/auth0-react";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectRoutes = ({ Component, location }) => {
  const { isLoading, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isLoading && !isAuthenticated ? (
        <div className="page-padding">
          <br />

          <h1 className="align-center">
            {" "}
            Please login or create an account to view that page{" "}
          </h1>
          <br />
          <div className="align-center">
            <button onClick={() => loginWithRedirect()} className="btn">
              Sign in to your account
            </button>
          </div>
        </div>
      ) : (
        <Component location={location} />
      )}
    </div>
  );
};

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTHO_DOMAIN}
      clientId={process.env.REACT_APP_AUTHO_CLIENTID}
      redirectUri={process.env.REACT_APP_AUTHO_REDIRECT_URI}
    >
      <Router>
        <Home path="/" exact />
        <Product path="/product/:name" />
        <ProtectRoutes Component={Checkout} path="/checkout/:price_id" />
      </Router>
    </Auth0Provider>
  );
}

export default App;
