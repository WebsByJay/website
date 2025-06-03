import React, { useState } from "react";

export default function App() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Elegance</h1>
        <p style={styles.subtext}>
          A high-end experience designed with intention and beauty.
        </p>
        <div style={styles.dropdownWrapper}>
          <Dropdown title="Contact Me" content="216 345 9097" />
          <Dropdown title="Pricing" content="$10 - $25 depending on request" />
          <Dropdown title="How Fast?" content="2-6 hours for most projects" />
        </div>
      </div>
    </div>
  );
}

function Dropdown({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.dropdown}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          ...styles.dropdownButton,
          ...(open ? styles.activeButton : {}),
        }}
      >
        {title}
      </button>
      <div
        style={{
          ...styles.dropdownContent,
          maxHeight: open ? "200px" : "0px",
          padding: open ? "10px 15px" : "0px 15px",
        }}
      >
        {content}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    fontFamily: "'Helvetica Neue', sans-serif",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "1000px",
    backdropFilter: "blur(6px)",
    padding: "30px",
    borderRadius: "16px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: 300,
    marginBottom: "20px",
    color: "#fff",
  },
  subtext: {
    fontSize: "18px",
    opacity: 0.9,
    color: "#fff",
    marginBottom: "40px",
  },
  dropdownWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  dropdown: {
    width: "250px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    backdropFilter: "blur(4px)",
  },
  dropdownButton: {
    width: "100%",
    background: "transparent",
    border: "none",
    padding: "15px",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "left",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  activeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  dropdownContent: {
    color: "#fff",
    fontSize: "16px",
    overflow: "hidden",
    maxHeight: "0px",
    transition: "all 0.4s ease",
  },
};
