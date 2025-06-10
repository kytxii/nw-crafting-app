function Footer() {
  return (
    <>
      <footer
        className="footer-container"
        style={{ width: "100%", height: "100px" }}
      >
        <div
          className="text-center"
          style={{
            backgroundColor: "#121212",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            height: "100%",
            width: "100%",
          }}
        >
          © 2025 Copyright
          <a
            className="text-body"
            href="https://steamcommunity.com/id/m2karlito/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Karl
          </a>
          <a
            className="text-body"
            href="https://github.com/kytxii"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
