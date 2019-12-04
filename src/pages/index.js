import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
    <Link to="/simpleNodeServer">Node Web Server</Link>|
    <Link to="/esp8266">ESP8266</Link> |<Link to="/docker">Docker</Link>|
    <Link to="/about">About me</Link>|
  </Layout>
)

export default IndexPage
