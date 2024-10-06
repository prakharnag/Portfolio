import './LandingPage.css';
import myImage from './prakhar.png'
const LandingPage = () =>{
    return (
        <div className="landing-page">
          <div className="left-section">
            <h3>Hello!</h3>
            <h2>I'm Prakhar Nag</h2>
            <p>A Software Developer</p>
            <div className="buttons">
              <button>Hire Me</button>
              <button>My Works</button>
            </div>
          </div>
          <div className="right-section">
          <img src= {myImage}></img>
          </div>
        </div>
      );
    };

export default LandingPage;

