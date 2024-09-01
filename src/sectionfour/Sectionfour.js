import "./Sectionfour.css";

function Sectionfour() {
  return (
    <div id="sectionfourmain">
      <div id="sectionfour1">
        <h1 style={{ color: "white", paddingTop: 20 }}>Recent Work</h1>
        <p className="pere">
          Solving user & business problems since last 15+ years.Lorem ipsum
          <br></br>
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          <br></br>
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <form style={{ paddingTop: 20 }}>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                color: "white",
                marginInlineEnd: 240,
                fontFamily: "monospace",
              }}
            >
              Email
            </label>
            <input
              style={{
                width: 260,
                height: 25,
                marginInlineStart: 500,
                paddingTop: 5,
                marginTop: 5,
              }}
              placeholder="Please enter your email"
            ></input>
          </span>
          <span
            style={{ display: "flex", flexDirection: "column", paddingTop: 25 }}
          >
            <label
              style={{
                color: "white",
                marginInlineEnd: 240,
                fontFamily: "monospace",
              }}
            >
              Mobile
            </label>
            <input
              style={{
                width: 260,
                height: 25,
                marginInlineStart: 500,
                marginTop: 5,
              }}
              placeholder="Please enter number"
            ></input>
          </span>
          <span
            style={{ display: "flex", flexDirection: "column", paddingTop: 25 }}
          >
            <label
              style={{
                color: "white",
                marginInlineEnd: 230,
                fontFamily: "monospace",
              }}
            >
              Message
            </label>
            <textarea
              placeholder="Enter Message"
              style={{
                width: 260,
                height: 95,
                marginInlineStart: 500,
                paddingTop: 5,
                marginTop: 5,
                alignItems: "start",
              }}
            ></textarea>
          </span>
          <div style={{ paddingTop: 20 }}>
            <button
              style={{
                width: 270,
                height: 37,
                backgroundColor: "green",
                color: "white",
                borderRadius: 7,
                fontFamily: "monoplace",
                borderBlockColor: "GrayText",
              }}
            >
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sectionfour;
