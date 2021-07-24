import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = (props) => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <header className="header">
      <div className="header-items">
        <div className="align-center">
          <h4 className="brand" > Artwork Shop </h4>
        </div>

        <div className="align-center">
          <ul className="flex-list">
            <li className="list-item">
              {!isAuthenticated && (
                <button
                  className="btn"
                  onClick={(_) => loginWithRedirect()}
                >
                  Create Account
                </button>
              )}
            </li>
            <li className="list-item">
              {isAuthenticated ? (
                <button
                  className="btn"
                  onClick={(_) => logout()}
                >
                  Sign Out
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={(_) => loginWithRedirect()}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
