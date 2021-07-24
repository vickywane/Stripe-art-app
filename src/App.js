import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/home";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTHO_DOMAIN}
      clientId={process.env.REACT_APP_AUTHO_CLIENTID}
      redirectUri={process.env.REACT_APP_AUTHO_REDIRECT_URI}
    >
      <Router>
        <Home path="/" exact />
      </Router>
    </Auth0Provider>
  );
}

export default App;
