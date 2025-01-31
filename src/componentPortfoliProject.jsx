import React from "react";
import data from './data/en.json';
import portfolioScreenshot from '../src/assets/portfoliScreenshot.png';


class ComponentPortfoliProject extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div  className="ComponentExperience">
                <img className="portfolioScreenshot" src={portfolioScreenshot}/>
                <div>
                    <p className="PortfolioProject">{this.text.PortfolioProject}</p>
                </div>
            </div>
        )
    }
}

export default ComponentPortfoliProject;