import "./Header.css";

// import "./Frontpage.css"

function Header() {
  return (
    <div>
      <div id="main">
        <div id="navbar">
          <ul id="firstrow">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recent Work</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Explore More</a>
            </li>
          </ul>
        </div>

        <div>
          <div id="frontpage1">
            <h1>Temoor Iqbal</h1>
            <p>
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, <br></br>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button id="btn">Hire me</button>
          </div>
          <div id="frontpage2">
            <image >
              <img id="img" src="./Picture2.jpeg" alt="Pic here" />
            </image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
