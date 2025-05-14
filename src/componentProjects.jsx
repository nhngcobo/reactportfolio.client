import React from "react";
import data from './data/en.json';
import ComponentPortfolio from '../src/componentPortfoliProject';
import SentimentsProject from '../src/componentSentimentAnalysis';

class ComponentProjects extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
    }


    render() {
        return (
            <>
                <div className="ComponentProjects">
                    <p>{this.text.Projects}</p>
                </div>
                <ComponentPortfolio />
                <SentimentsProject />
            </>
        )
    }
}

export default ComponentProjects;