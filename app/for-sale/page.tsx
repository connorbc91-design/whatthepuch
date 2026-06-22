export default function ForSale() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf8f2",
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "900",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Items For Sale
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Available parts and bikes. Contact me if you're interested.
      </p>

      {/* Add listings here */}
    </main>
  );
}