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
        const { theme } = this.props;

        return (
            <>
                <div className="ComponentProjects">
                        <h2 style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', fontWeight: 600, margin: 0 }}>{this.text.Projects}</h2>
                </div>
                <ComponentPortfolio theme={theme} />
                <SentimentsProject />
            </>
        )
    }
}

export default ComponentProjects;