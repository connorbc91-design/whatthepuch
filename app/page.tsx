import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf8f2",
        padding: "40px",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
   <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  }}
>
  <Image
    src="/logotransparent.png"
    alt="WhatThePuch Logo"
    width={300}
    height={300}
    priority
  />
</div>

     {/* Header */}
<h1
  style={{
    fontSize: "4rem",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "4px",
    color: "#222",
    marginTop: "20px",
    marginBottom: "10px",
    textShadow: "3px 3px 6px rgba(0,0,0,0.15)",
  }}
>
  WhatThePuch
</h1>

<p
  style={{
    maxWidth: "600px",
    margin: "20px auto",
    fontSize: "1.2rem",
  }}
>
  Unique custom Puch's. Built in Ipswich, Suffolk.
</p>

<div style={{ height: "20px" }} />

<p
  style={{
    maxWidth: "600px",
    margin: "20px auto",
    fontSize: "1.2rem",
  }}
>
  Please visit my Instagram for more builds and restorations.
</p>

      <a
        href="https://instagram.com/_whatthepuch_"
        target="_blank"
        style={{
          padding: "12px 24px",
          border: "2px solid black",
          borderRadius: "8px",
          textDecoration: "none",
          color: "black",
        }}
      >
        View Instagram
      </a>

 {/* For Sale */}
<section
  style={{
    marginTop: "80px",
    width: "100%",
    maxWidth: "900px",
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    border: "2px solid #d9d2c3",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      fontWeight: "900",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginBottom: "20px",
      color: "#222",
    }}
  >
    For Sale
  </h2>

  <p
    style={{
      color: "#666",
      marginBottom: "30px",
      fontSize: "1.1rem",
    }}
  >
    Browse available parts & builds.
  </p>

  <a
    href="/for-sale"
    style={{
      display: "inline-block",
      padding: "16px 32px",
      border: "2px solid #222",
      borderRadius: "12px",
      textDecoration: "none",
      color: "#222",
      fontWeight: "700",
      fontSize: "1.1rem",
      transition: "0.2s ease",
    }}
  >
    🏍️ View All Items For Sale
  </a>
</section>

<div
  style={{
    marginTop: "40px",
    width: "100%",
    maxWidth: "900px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  {[
    "🔧 Repairs & Servicing",
    "⚙️ Engine Builds & Tuning",
    "🏍️ Full Restorations",
    "🎨 Custom Builds & Modifications",
    "📦 Parts Sourcing",
  ].map((service) => (
    <div
      key={service}
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #d9d2c3",
        textDecoration: "none",
        color: "#222",
        fontWeight: "600",
        textAlign: "center",
      }}
    >
      {service}
    </div>
  ))}
</div>
      {/* Gallery */}
      <section style={{ marginTop: "80px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Recent Builds & Restorations
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Custom Puch Maxi projects from the workshop
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            ["blackmaxiback.jpeg", "70cc Matt Black custom build"],
            ["blackmaxiracerfront.jpeg", "70cc Matt Black custom build"],
            ["Greymaxibuild.jpeg", "70cc Maxi Build"],
            ["ms50restoration.jpeg", "MS50 Restoration"],
            ["orangemaxibuild.jpeg", "50cc Maxi Build"],
            ["pullengine70.jpeg", "70cc Pull StartEngine Build"],
            ["showmaxifront.jpeg", "My Maxi - Show Build"],
            ["showmaxiside.jpeg", "My Maxi 70CC Reed Valve 60MPH"],
          ].map(([file, title]) => (
            <div
              key={file}
              style={{
                border: "2px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
                background: "white",
              }}
            >
              <img
                src={`/${file}`}
                alt={title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <p
                style={{
                  padding: "10px",
                  margin: 0,
                  fontWeight: "bold",
                }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        style={{
          marginTop: "80px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>Need Help With Your Puch?</h2>

        <p>
          Based in Ipswich, Suffolk, WhatThePuch specialises in restoration,
          repairs, servicing, tuning and modification of vintage two-stroke
          mopeds, particularly the iconic Puch Maxi.
        </p>
<div style={{ marginBottom: "20px" }} />
        <p>
          From full nut-and-bolt restorations to custom builds and performance
          upgrades, every project is approached with attention to detail and a
          passion for keeping classic mopeds on the road.
        </p>
<div style={{ marginBottom: "20px" }} />
        <a
          href="mailto:connorlockwood1991@live.co.uk"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 24px",
            border: "2px solid black",
            borderRadius: "8px",
            textDecoration: "none",
            color: "black",
          }}
        >
          Contact Me
        </a>

        <a
          href="tel:07949760022"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 24px",
            border: "2px solid black",
            borderRadius: "8px",
            textDecoration: "none",
            color: "black",
          }}
        >
          Call Me
        </a>
      </section>


      <hr
        style={{
          marginTop: "80px",
        }}
      />

      <p
        style={{
          color: "#666",
          fontSize: "0.9rem",
          marginTop: "20px",
        }}
      >
        © 2026 WhatThePuch • Ipswich, Suffolk
      </p>
    </main>
  );
}