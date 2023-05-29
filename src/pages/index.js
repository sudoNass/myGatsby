import * as React from "react";

const pageStyles = {
  color: "#fff",
  backgroundColor: "#1a1a1a",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 10%",
}

const headingStyles = {
  fontSize: "4rem",
  margin: "0 0 2rem",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.3rem",
}

const subheadingStyles = {
  fontSize: "1.5rem",
  margin: "0 0 4rem",
  textAlign: "center",
  fontWeight: "bold",
}

const iconStyles = {
  display: "inline-block",
  width: "2rem",
  height: "2rem",
  marginRight: "1rem",
  verticalAlign: "middle",
}

const sectionStyles = {
  margin: "4rem 0",
  padding: "2rem",
  borderRadius: "0.5rem",
  backgroundColor: "#333",
  maxWidth: "50rem",
  width: "100%",
}

const sectionHeadingStyles = {
  fontSize: "2Here's the rest of the code:

```jsx
rem",
  margin: "0 0 2rem",
  textTransform: "uppercase",
  letterSpacing: "0.2rem",
  textAlign: "center",
}

const sectionSubheadingStyles = {
  fontSize: "1.25rem",
  margin: "0 0 4rem",
  textAlign: "center",
  fontWeight: "bold",
}

const listItemStyles = {
  fontSize: "1.25rem",
  margin: "0 0 2rem",
  display: "flex",
  alignItems: "center",
}

const listIconStyles = {
  ...iconStyles,
  width: "1.5rem",
  height: "1.5rem",
  marginRight: "0.5rem",
}

const listTextStyles = {
  fontWeight: "bold",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>John Doe</h1>
      <h2 style={subheadingStyles}>Computer Engineer</h2>
      <section style={sectionStyles}>
        <h3 style={sectionHeadingStyles}>
          <i className="bi bi-award" style={listIconStyles}></i>Education
        </h3>
        <p style={sectionSubheadingStyles}>Bachelor of Science in Computer Engineering</p>
        <ul>
          <li style={listItemStyles}>
            <i className="bi bi-check" style={listIconStyles}></i>
            <span style={listTextStyles}>University of Engineering and Technology, Lahore</span>
          </li>
        </ul>
      </section>
      <section style={sectionStyles}>
        <h3 style={sectionHeadingStyles}>
          <i className="bi bi-code-slash" style={listIconStyles}></i>Skills
        </h3>
        <p style={sectionSubheadingStyles}>Programming Languages</p>
        <ul>
          <li style={listItemStyles}>
            <i className="bi bi-check" style={listIconStyles}></i>
            <span style={listTextStyles}>C, C++, Java, Python</span>
          </li>
        </ul>
        <p style={sectionSubheadingStyles}>Tools and Frameworks</p>
        <ul>
          <li style={listItemStyles}>
            <i className="bi bi-check" style={listIconStyles}></i>
            <span style={listTextStyles}>Arduino, Raspberry Pi, React, Node.js</span>
          </li>
        </ul>
      </section>
      <section style={sectionStyles}>
        <h3 style={sectionHeadingStyles}>
          <i className="bi bi-briefcase" style={listIconStyles}></i>Experience
        </h3>
        <ul>
          <li style={listItemStyles}>
            <i className="bi bi-briefcase" style={listIconStyles}></i>
            <span style={listTextStyles}>Software Engineer, XYZ Company</span>
          </li>
          <li style={listItemStyles}>
            <i className="bi bi-briefcase" style={listIconStyles}></i>
            <span style={listTextStyles}>Intern, ABC Company</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>John Doe - Computer Engineer</title>
