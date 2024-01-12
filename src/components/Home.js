import Typewriter from "typewriter-effect";
import Lottie from 'react-lottie'
import animationData from '../lotties/shapes.json'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    
    <div className="home">

      <div className="homeContainer">
        {/* <img id="myPic" src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1637695467/ProfilePic_vyffoy.jpg" alt="myPic" /> */}

        <div>
          <Lottie 
          options={defaultOptions}
            height={200}
            width={200}
          />
        </div>

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
          <div className="aboutMe">Software Engineer | Web Developer</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
