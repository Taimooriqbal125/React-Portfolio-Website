import "./Sectiontwo.css";

function Sectiontwo() {
  return (
    <div id="sectiontwo">
      <div>
        <h1 style={{ textAlign: "center", color: "white", paddingTop: 30 }}>
          Testimonials
        </h1>
        <p
          style={{
            fontFamily: "monospace",
            lineHeight: 1.5,
            color: "#9C9C9C",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br></br>
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div id="client1">
        <p
          style={{
            color: "white",
            lineHeight: 1.6,
            fontFamily: "monospace",
            color: "#9C9C9C",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <div style={{ display: "flex", gap: 20 }}>
            <image>
              <img
                src="./myphoto.jpg"
                alt="pichere"
                style={{ width: 35, borderRadius: 50, paddingTop: 10 }}
              />{" "}
            </image>
            <h4 style={{ color: "white" }}>Abdul Haq</h4>
          </div>
        </p>

        <p
          style={{
            color: "white",
            lineHeight: 1.6,
            fontFamily: "monospace",
            color: "#9C9C9C",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <div style={{ display: "flex", gap: 20 }}>
            <image>
              <img
                src="./white man.jpeg"
                alt="pichere"
                style={{ width: 42, borderRadius: 50, paddingTop: 10 }}
              />{" "}
            </image>
            <h4 style={{ color: "white" }}>John Blug</h4>
          </div>
        </p>
      </div>

      <div id="client1">
        <p
          style={{
            color: "white",
            lineHeight: 1.6,
            fontFamily: "monospace",
            color: "#9C9C9C",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <div style={{ display: "flex", gap: 20 }}>
            <image>
              <img
                src="./man3.jpeg"
                alt="pichere"
                style={{ width: 45, borderRadius: 50, paddingTop: 10 }}
              />{" "}
            </image>
            <h4 style={{ color: "white" }}>Calam Puk</h4>
          </div>
        </p>

        <p
          style={{
            color: "white",
            lineHeight: 1.6,
            fontFamily: "monospace",
            color: "#9C9C9C",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <div style={{ display: "flex", gap: 20 }}>
            <image>
              <img
                src="./man2.jpeg"
                alt="pichere"
                style={{ width: 45, borderRadius: 50, paddingTop: 10 }}
              />{" "}
            </image>
            <h4 style={{ color: "white" }}>Plank Adm</h4>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Sectiontwo;
