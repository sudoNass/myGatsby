import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
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
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom:0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const IndexPage = () => {
  const name = "Your Name";
  const email = "your.email@example.com";
  const degree = "Your Degree";
  const projects = [
    {
      name: "Project 1",
      description: "Description of Project 1"
    },
    {
      name: "Project 2",
      description: "Description of Project 2"
    }
  ];

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        {name}
        <br />
        <span style={headingAccentStyles}>— Online Resume</span>
      </h1>
      <p style={paragraphStyles}>
        Email: {email}
      </p>
      <h2 style={headingStyles}>Education:</h2>
      <p style={paragraphStyles}>{degree}</p>
      <h2 style={headingStyles}>Projects:</h2>
      <ul style={listStyles}>
        {projects.map((project, index) => (
          <li key={index} style={{ ...listItemStyles, color: linkStyle.color }}>
            <span>
              <h3 style={{ ...linkStyle, marginBottom: 0 }}>{project.name}</h3>
             <p style={descriptionStyle}>{project.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to update your online resume. 😎
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Online Resume</title>
