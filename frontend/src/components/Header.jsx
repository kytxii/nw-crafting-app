import { Link } from "react-router-dom";

import logo from "../assets/images/nwc-logo.png";
import recipes from "../assets/images/recipes.png";
import prices from "../assets/images/prices.png";
import sales from "../assets/images/sales.png";

function Header() {
  return (
    <>
      <div
        className="header-container"
        style={{
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "1000",
        }}
      >
        <div
          className="title-search"
          style={{
            backgroundColor: "#121212",
            borderBottom: "2px solid #1f1f1f",
            height: "66px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 50px",
          }}
        >
          <Link
            to="/"
            style={{
              height: "40px",
            }}
          >
            <img
              src={logo}
              alt="NWC Logo"
              style={{
                height: "45px",
                width: "45px",
                margin: "0",
                padding: "0",
              }}
            />
          </Link>
          <input
            type="search"
            placeholder="Search recipes..."
            style={{
              height: "40px",
              backgroundColor: "#1f1f1f",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              outline: "none",
            }}
          />
        </div>
        {/* Recipes */}
        <div
          className="navbar"
          style={{
            backgroundColor: "#121212",
            height: "42px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              textAlign: "center",
            }}
          >
            <Link
              to="/recipes"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={recipes}
                alt="recipes"
                style={{
                  height: "18px",
                  width: "18px",
                  marginRight: "10px",
                }}
              />
              Recipes
            </Link>
          </div>
          {/* Price Customization */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              textAlign: "center",
            }}
          >
            <Link
              to="/prices"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={prices}
                alt="prices"
                style={{
                  height: "18px",
                  width: "18px",
                  marginRight: "10px",
                }}
              />
              Price Customization
            </Link>
          </div>
          {/* Sales Tracker */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              textAlign: "center",
            }}
          >
            <Link
              to="/sales-tracker"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={sales}
                alt="sales"
                style={{
                  height: "18px",
                  width: "18px",
                  marginRight: "10px",
                }}
              />
              Sales Tracker
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
