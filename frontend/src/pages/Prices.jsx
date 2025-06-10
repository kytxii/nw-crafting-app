import Header from "../components/Header";
import Footer from "../components/Footer";

function Prices() {
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
          <div></div>
          <div></div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Prices;
