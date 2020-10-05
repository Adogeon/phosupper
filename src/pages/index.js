import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu/menu"
import NavBar from "../components/nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Menu" />
    <NavBar />
    <Menu />
  </Layout>
)

export default IndexPage
