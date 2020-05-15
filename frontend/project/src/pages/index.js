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
        Years after my grandfather passed I found myself trying to remember the
        life lessons he taught me and stories he would tell. However, every time
        I would come up blank when I tried to picture his voice in my head. I
        wanted to create a simple application that would allow people to save
        and send those important lessons and stories to loved ones for them to
        have forever with the goal of having no one else go through a similar
        situation when they try to remember. <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        Thank you for visiting and take your time, feel free to skip questions
        you dont want to answer.
      </p>
      <p>Press below to begin</p>
      <AniLink paintDrip hex="#32a1a5" to="/prompts/1" className="btn-primary">
        Start
      </AniLink>
    </Layout>
  )
}
