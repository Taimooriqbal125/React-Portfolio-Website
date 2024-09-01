import { startTransition } from "react";
import "./Sectionone.css";

function Sectionone() {
  return (
    <div id="sectionone">
      <h1>Case Studies</h1>
      <p style={{ fontWeight: "lighter", fontFamily: "monospace" }}>
        Solving user & business problems since last 15+ years.Lorem ipsum dolor
        sit amet, consectetur <br></br>adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      <div id="works">
        <div id="work1">
          <div style={{ textAlign: "start", lineHeight: 2 }}>
            <p>
              <h2>Frontend</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button id="buton">Vist Work</button>
          </div>
          <div>
            <img src="./work1.png" alt="photohere" style={{ width: 400 }} />
          </div>
        </div>
        <div id="work2">
          <div>
            <img src="./work3.png" alt="photohere" style={{ width: 400 }} />
          </div>
          <div style={{ textAlign: "start", lineHeight: 2 }}>
            <p>
              <h2>UX/UI Design</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button id="buton2">Vist Work</button>
          </div>
        </div>

        <div id="work3">
          <div style={{ textAlign: "start", lineHeight: 2 }}>
            <p>
              <h2>Backend</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button id="buton3">Vist Work</button>
          </div>
          <div>
            <img src="./work2.png" alt="photohere" style={{ width: 400 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionone;
