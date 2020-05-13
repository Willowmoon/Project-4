import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import { ReactMediaRecorder } from "react-media-recorder"
import SEO from "../components/seo"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
const promptTemplate = ({ data }) => {
  const { prompt,slug } = data.prompt
  console.log(data)
  return (
    <Layout>
      <SEO title={slug} />
      <h1>{prompt}</h1>
      {Number(slug) < 2 ? (
        ""
      ) : (
        <AniLink paintDrip hex="#3fd0d4" to={`/prompts/${Number(slug) - 1}`}>
          <FaChevronLeft />
          Previous Question
        </AniLink>
      )}

      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <>
            <br />
            <p>{status}</p>
            <div>
              {status === "recording" ? (
                <p>press stop when you are complete</p>
              ) : (
                <p>press the button to start recording</p>
              )}
            </div>
            {status !== "recording" ? (
              <button className="btn-primary" onClick={startRecording}>
                Start Recording
              </button>
            ) : (
              <button className="btn-primary" onClick={stopRecording}>
                Stop Recording
              </button>
            )}
            <br />
            <br />
            <br />
            <audio src={mediaBlobUrl} controls />
          </>
        )}
      />

      <AniLink paintDrip hex="#3fd0d4" to={`/prompts/${Number(slug) + 1}`}>
        Next Question
        <FaChevronRight />
      </AniLink>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    prompt: contentfulPrompts(slug: { eq: $slug }) {
      slug
      prompt
      id
    }
  }
`
export default promptTemplate
