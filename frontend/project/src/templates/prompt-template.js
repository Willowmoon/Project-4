import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import { ReactMediaRecorder } from "react-media-recorder"
import SEO from "../components/seo"
import {
  FaChevronLeft,
  FaChevronRight,
  FaCaretRight,
  FaEllipsisV,
  FaTerminal,
} from "react-icons/fa"
const promptTemplate = ({ data }) => {
  const { prompt, slug } = data.prompt

  return (
    <Layout>
      <SEO title={slug} />
      <br />
      <br />
      <div className="promptBox">
        <h1>{prompt}</h1>

        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <>
              <br />

              {status !== "recording" ? (
                <button
                  className="btn-primary recorder"
                  onClick={startRecording}
                >
                  Start Recording
                </button>
              ) : (
                <button
                  className="btn-primary recorder"
                  onClick={stopRecording}
                >
                  Stop Recording
                </button>
              )}
              <br />
              <br />

              <audio
                src={mediaBlobUrl}
                controls
                className="recorder"
                style={{
                  border: "5px solid #32a1a5",
                  padding: "1px",
                  borderRadius: "35px",
                  backgroundColor: "#32a1a5",
                }}
              />
              <br />
              <br />
            </>
          )}
        />
        <div>
          {Number(slug) < 2 ? (
            ""
          ) : (
            <AniLink
              className="btn-primary"
              paintDrip
              hex="#32a1a5"
              to={`/prompts/${Number(slug) - 1}`}
            >
              <FaChevronLeft />
              &nbsp;&nbsp;Prev
            </AniLink>
          )}
          <AniLink
            className="btn-primary"
            paintDrip
            hex="#32a1a5"
            to={`/prompts/${Number(slug) + 1}`}
          >
            Next&nbsp;&nbsp;
            <FaChevronRight />
          </AniLink>
          <br />
          <br />
          <p>
            press <FaCaretRight /> to review and <FaEllipsisV /> to save
          </p>
        </div>
      </div>
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
