import * as React from "react"

const pageStyles = {
  backgroundColor: "#1e1e1e",
  color: "#a0fba1",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const backgroundStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: -1,
  backgroundImage: `radial-gradient(#1e1e1e 1px, transparent 1px), radial-gradient(#1e1e1e 1px, transparent 1px)`,
  backgroundSize: "3px 3px",
  backgroundPosition: "0 0, 1.5px 1.5px",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const headingAccentStyles = {
  color: "#66ff66",
}

const paragraphStyles = {
  marginBottom: 48,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#66ff66",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#a0fba1",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const IndexPage = () => {
  return (
    <>
      <div style={backgroundStyles}></div>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          John Doe
          <br />
          <span style={headingAccentStyles}>Computer Engineer</span>
        </h1>
        <p style={paragraphStyles}>
          I am a computer engineer with a degree in XYZ from ABC University. I am experienced in various programming languages and frameworks, and I am passionate about creating efficient, scalable, and maintainable software solutions.
        </p>
        <h2>Projects</h2>
        <ul style={listStyles}>
          {/* Add your projects here */}
          <li style={listItemStyles}>
            <a style={linkStyle} href="https://github.com/username/project">
              Project 1
            </a>
            <p style={descriptionStyle}>
              A brief description of your first project.
            </p>
          </li>
          <li style={listItemStyles}>
            <a style={linkStyle} href="https://github.com/username/project">
              Project 2
            </a>
            <p style={descriptionStyle}>
              A brief description of your second project.
            </p>
          </li>
        </ul>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>John Doe - Computer Engineer</title>
