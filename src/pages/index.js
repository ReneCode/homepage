import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="@relang" />
    <h1>Hello - have a good time</h1>
    <p>
      I'm currently working on <a href="http://ecad.fun">ecad.fun</a>.<br></br>
      Just take a look here:
      <Link to="/ecad-fun">Look here</Link>
    </p>
    {/* <Link to="http://ecad.fun">ecad.fun</Link> */}
    {/* <h2>old blogs:</h2> */}
    <Link to="/links">Links</Link>|
    <Link to="/simpleNodeServer">Node Web Server</Link>|
    <Link to="/esp8266">ESP8266</Link> |<Link to="/docker">Docker</Link>|
    <Link to="/elixir">Elixir</Link>|<Link to="/startup">startup</Link>|
    <Link to="/simpleNodeServer">Simple Node Server</Link>|
    <Link to="/naming-convention">Naming convention</Link>|
    <Link to="/plugin">plugin</Link>|<Link to="/preact">preact</Link>|
    <Link to="/oscillator-beep">Oscillator beep</Link>|
    <Link to="/GraphDatabaseNeo4j">GraphDatabase Neo4j</Link>|
    <Link to="/team-work">Team work</Link>|<Link to="/react">React</Link>|
    <Link to="/rust">Rust</Link>|<Link to="/about">About me</Link>|
  </Layout>
)

export default IndexPage
