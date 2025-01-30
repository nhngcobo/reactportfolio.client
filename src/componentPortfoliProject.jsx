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
            <div className="ComponentProjects">
                <img className="portfolioScreenshot"
                                                src={portfolioScreenshot}
                                           />
            </div>
        )
    }
}

export default ComponentPortfoliProject;