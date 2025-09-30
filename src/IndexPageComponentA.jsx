
import React from "react";
import data from '../src/data/en.json';
import profilePhoto from './assets/IMG_3942COMP1.jpg';

class IndexPageComponentA extends React.Component {
  constructor(props) {
    super(props);
    this.text = data;
    this.state = {
      overallJobDesc: "", 
      currentWordIndex: 0,
      currentLetterIndex: 0,
    };
  }

  componentDidMount() {
    this.typeWord();
  }

  typeWord = () => {
    const words = [this.text.overallDev, this.text.overallCodeWars, this.text.overallGitHub];
    const currentWord = words[this.state.currentWordIndex];
    const totalLetters = currentWord.length;

    this.intervalId = setInterval(() => {
      if (this.state.currentLetterIndex < totalLetters) {
        this.setState((prevState) => ({
          overallJobDesc: currentWord.slice(0, prevState.currentLetterIndex + 1) + "_",
          currentLetterIndex: prevState.currentLetterIndex + 1,
        }));
      } else {
        // Once the current word is fully typed, switch to the other word after a short pause
        clearInterval(this.intervalId);

        // Wait for 1 second, then start typing the next word
        setTimeout(() => {
          this.setState((prevState) => ({
            currentWordIndex: (prevState.currentWordIndex + 1) % words.length,
            currentLetterIndex: 0,
            overallJobDesc: "",
          }), this.typeWord);
        }, 1000);
      }
    }, 100);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {  

    return (
      <>
        <div className="header-container" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img
            src={profilePhoto}
            alt="Profile"
            className="profile-photo"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '1rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
            }}
          />
          <h1 className="headingName" style={{ marginBottom: '0.5rem' }}>{this.text.fullnames}</h1>
          <h3 style={{ fontWeight: 400, color: '#666', marginBottom: '0.5rem' }}>{this.text.occupation}</h3>
          <div className="intro-tagline" style={{ fontStyle: 'italic', color: '#2e7d32', marginBottom: '1.5rem' }}>
            Passionate about building impactful software and always learning.
          </div>
        </div>

        <div className="slogan-text">
          <h3 className="inline-text">{this.text.overallJobDesc}</h3>
          <h3 className="typing-text">{this.state.overallJobDesc}</h3>
        </div>
      </>
    );
  }
}
export default IndexPageComponentA;
