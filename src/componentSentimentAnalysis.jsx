import React from "react";
import data from './data/en.json';
import portfolioScreenshot from '../src/assets/sentiments.png';
import sourceLogo from '../src/assets/icons8-github-link.png';


class ComponentSentimentAnalyis extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    // Function to open an external window
    openWindowToExternalDomain = (url) => {
        url && window.open(url, url)
    }

    render() {
        return (
            <div className="ComponentExperience">
                <img className="portfolioScreenshot" src={portfolioScreenshot} />
                <div>
                    <p className="PortfolioProject">{this.text.SentimentsProject}</p>
                    <p className="PortfolioProject">{this.text.SentimentsProject2}</p>
                    <p className="PortfolioProject">{this.text.SentimentsProject3}</p>
                </div>
                <p className="github-Link"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.openWindowToExternalDomain("https://github.com/nhngcobo/SentimentsReact.git")}
                    title="GitHub Repository Source Code"
                >
                    <img
                        src={sourceLogo}
                        alt={"Github"}
                        style={{ height: "1.3rem" }}
                    />
                </p>
            </div>
        )
    }
}

export default ComponentSentimentAnalyis;