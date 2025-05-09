import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";

function Home() {
  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundColor: "#1f1f1f",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Header />
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <ItemList />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
