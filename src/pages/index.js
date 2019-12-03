import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="@relang" />
    <h1>Hello - have a good time</h1>
    {/* <Link to="http://ecad.fun">ecad.fun</Link> */}
    {/* <h2>old blogs:</h2> */}
    <Link to="/esp8266">ESP8266</Link> |<Link to="/docker">Docker</Link>|
    <Link to="/about">About me</Link>|<Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
