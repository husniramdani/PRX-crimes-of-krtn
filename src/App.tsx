function App() {
  return (
    <>
      <div className="section">
        <div className="background-video w-background-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source src="../transcode.mp4" data-wf-ignore="true" />
            <source src="../transcode.webm" data-wf-ignore="true" />
          </video>
        </div>
      </div>
      <div id="my-overlay" className="my-overlay"></div>
      <div id="convex" className="convex"></div>
    </>
  );
}

export default App;
