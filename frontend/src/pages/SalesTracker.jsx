import Header from "../components/Header";
import Footer from "../components/Footer";
import SalesTable from "../components/SalesTable";

function SalesTracker() {
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
            <SalesTable />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SalesTracker;
