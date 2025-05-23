import React from "react";
import data from './data/en.json';
import portfolioScreenshotDark from '../src/assets/portfoliScreenshot.png';
import portfolioScreenshot from '../src/assets/portfolioSS.png';

import sourceLogo from '../src/assets/icons8-github-link.png';


class ComponentPortfoliProject extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

    // Function to open an external window
    openWindowToExternalDomain = (url) => {
        url && window.open(url, url)
    }
      
    render() {
        const { theme } = this.props;

        return (
            <div  className="ComponentExperience">
                {theme == "light" ? <img className="portfolioScreenshot" src={portfolioScreenshotDark}/>
                : <img className="portfolioScreenshot" src={portfolioScreenshot}/>
                }
                
                <div>
                    <p className="PortfolioProject">{this.text.PortfolioProject}</p>
                </div>
                <p className="github-Link"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.openWindowToExternalDomain("https://github.com/nhngcobo/reactportfolio.client.git")}
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

export default ComponentPortfoliProject;