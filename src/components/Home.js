import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <img id="myPic" src="./ProfilePic.jpg" alt="myPic" />

        <div className="main">
          <h4 className="name">
            <Typewriter
              className="typewriter"
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Shinhee!")

                  // .pauseFor(1000)
                  // .deleteAll()
                  // .typeString("Coder")

                  .start();
              }}
            />
          </h4>
          <div className="aboutMe">I'm a Software Engineer.</div>
          <div className="separator"></div>

          <div className="socialsHome">
            <a
              target="blank"
              href="https://www.linkedin.com/in/shinhee-p-b025885a/"
            >
              <div className="socials">
                <i class="fab fa-linkedin icon home-icon"></i>
              </div>
            </a>
            <a target="blank" href="https://github.com/shinheep">
              <div className="socials">
                <i class="fab fa-github icon home-icon"></i>
              </div>
            </a>
            <a target="blank" href="https://twitter.com/shinheecodey">
              <div className="socials">
                <i class="fab fa-twitter-square icon home-icon"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
