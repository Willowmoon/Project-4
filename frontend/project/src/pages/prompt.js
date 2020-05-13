import React from "react"
import { ReactMediaRecorder } from "react-media-recorder"
import Layout from "../components/layout"

const prompt = () => {
  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <Layout>
            <br />
            <p>{status}</p>
            <div>
              {status === "recording"
                ? "press stop when you are complete"
                : "press the button to start recording"}
            </div>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <br />
            <audio src={mediaBlobUrl} controls />
          </Layout>
        )}
      />
    </div>
  )
}

export default prompt
