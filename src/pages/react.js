import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="@relang" />
    <h1>React</h1>
    <Link to="/react-props-1">React properties</Link>|
  </Layout>
)

export default IndexPage
