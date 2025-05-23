const data = [
  {
    serialNumber: "/001.",
    heading: "GASLESS TRADING",
    description: "Signature-based orders allow for gasless order placement and cancellation. Trade freely, unaffected by network congestion.",
    iconImage: "⚡"
  },
  {
    serialNumber: "/002.",
    heading: "BEST PRICING",
    description: "Solvers and market makers compete for your order flow. Aori matches you with the best price across all available liquidity sources.",
    iconImage: "💹",
  },
  {
    serialNumber: "/003.",
    heading: "Third Section",
    description: "Third Solvers and market makers compete for your order flow. Aori matches you with the best price across all available liquidity sources.",
    iconImage: "⏬",
  },
  {
    serialNumber: "/004.",
    heading: "Fourth Section",
    description: "Fourth Solvers and market makers compete for your order flow. Aori matches you with the best price across all available liquidity sources.",
    iconImage: "🈸",
  },
  {
    serialNumber: "/005.",
    heading: "Five Section",
    description: "Five Solvers and market makers compete for your order flow. Aori matches you with the best price across all available liquidity sources.",
    iconImage: "🛑",
  },
  {
    serialNumber: "/006.",
    heading: "Six Section",
    description: "Six Solvers and market makers compete for your order flow. Aori matches you with the best price across all available liquidity sources.",
    iconImage: "🛂",
  },
];

export default function App() {
  return (
    <div>

      <div style={styles.placeholder}></div>

      <div style={styles.container}>
        {data.map((item, index) => (
          <section key={item.serialNumber} style={{
            ...styles.section,
            top: `${75 * index}px`,
          }}
          >
            <div style={styles.sectionContent}>
              <div style={styles.numberContainer}>
                <span style={styles.sectionNumber}>{item.serialNumber}</span>
              </div>
              <div style={styles.textContainer}>
                <h2 style={styles.heading}>{item.heading}</h2>
                <p style={styles.paragraph}>{item.description}</p>
              </div>
              <div style={styles.graphicContainer}>
                <div style={styles.iconBackground}>
                  <span style={styles.singleIcon}>{item.iconImage}</span>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* links mimick kar raha hai aori.io ki tarah */}
        <section style={{
          ...styles.section,
        }}
        >
          <div style={styles.sectionContent}>
            <div style={styles.numberContainer}>
              <span style={styles.sectionNumber}>/LINKS.</span>
            </div>
            <div style={styles.textContainer}>
              <h2 style={styles.heading}></h2>
              <p style={styles.paragraph}></p>
            </div>
            <div style={styles.graphicContainer}>
              <div style={{
                width: "150px",
                height: "150px",
              }}>
                <span style={styles.singleIcon}></span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ye placeholders required hai scroll spaces ke liye */}
      <div style={styles.placeholder}></div>
      <div style={styles.placeholder}></div>
    </div>
  )
}


const styles = {
  placeholder: {
    height: "75vh",
    backgroundColor: "green",
    position: "static"
  },
  container: {
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    padding: "0",
    display: "flex",
    position: "relative",
    // height: "200vh",     // yaha be change kiya that, but required nahi hai // agar links nahi chahiye to isse uncomment aur links ko comment kar sakta hai
    height: "auto",
    top: "0px",
    flexDirection: "column",
  },
  section: {
    position: "sticky",
    padding: "40px 20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "black",
  },
  sectionContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  numberContainer: {
    width: "80px",
    paddingTop: "5px",
  },
  sectionNumber: {
    fontSize: "14px",
    opacity: 0.7,
  },
  textContainer: {
    flex: "1",
    maxWidth: "500px",
  },
  graphicContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "1px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    opacity: 0.8,
    maxWidth: "400px",
  },
  iconBackground: {
    backgroundColor: "#1a1a1a",
    borderRadius: "8px",
    padding: "30px",
    width: "150px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  singleIcon: {
    fontSize: "64px",
    color: "white",
  },
}
