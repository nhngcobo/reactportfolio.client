import React from "react";
import data from './data/en.json';
import portfolioScreenshot from '../src/assets/sentiments.png';


class ComponentSentimentAnalyis extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div  className="ComponentExperience">
                <img className="portfolioScreenshot" src={portfolioScreenshot}/>
                <div>
                    <p className="PortfolioProject">{this.text.SentimentsProject}</p>
                    <p className="PortfolioProject">{this.text.SentimentsProject2}</p>
                    <p className="PortfolioProject">{this.text.SentimentsProject3} <i class="fa-brands fa-python"></i></p>


                </div>
            </div>
        )
    }
}

export default ComponentSentimentAnalyis;