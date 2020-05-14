import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome!</h1>
      <p className="promptBox">
        Single-origin coffee swag heirloom man braid lyft cloud bread. Hexagon
        selvage artisan next level tumeric copper mug coloring book narwhal
        meggings fam. Mlkshk actually normcore typewriter. Snackwave crucifix
        yuccie copper mug, ramps air plant prism stumptown banh mi tumeric
        umami.
      </p>
      <p>Press below to begin</p>
      <AniLink paintDrip hex="#32a1a5" to="/prompts/1" className="btn-primary">
        Start
      </AniLink>
    </Layout>
  )
}
