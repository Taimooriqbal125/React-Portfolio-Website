import "./Sectionthree.css";

function Sectionthree() {
  return (
    <div>
      <div id="sectionthreemain">
        <h1>Recent Work</h1>
        <p
          style={{ fontFamily: "monospace", marginLeft: 170, marginRight: 170 }}
        >
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div id="ff">
     <div>
     <div>
          <img style={{ width: 400 }} src="./sectionthree1.png" alt="pichere" />
        </div>
        <h2>Frontend</h2>
        <p style={{ fontFamily: "monospace", lineHeight: 1.9 }}>
          Labore et dolore magna aliqua. sed do eiusmod tempor
          <br></br>
          labore et dolore magna labore et dolore magna..
        </p>
        <button id="btn">Visit Work</button>
      </div>

      <div id ="abcd">
        <div>
          <img style={{ width: 400 }} src="./sectionthree2.png" alt="pichere" />
        </div>
        <h2>Backend</h2>
        <p style={{ fontFamily: "monospace", lineHeight: 1.9 }}>
          Labore et dolore magna aliqua. sed do eiusmod tempor
          <br></br>
          labore et dolore magna labore et dolore magna..
        </p>
        <button id="btn">Visit Work</button>
      </div>
     </div>
    </div>
  );
}

export default Sectionthree;
