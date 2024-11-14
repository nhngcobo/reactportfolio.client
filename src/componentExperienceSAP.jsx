import React from "react";
import data from '../src/data/en.json';

class ComponentExperienceSAP extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentExperience">
                <p className="duration-sap">2022 - 2022</p>
                <div>
                    <p>Integration Developer</p>
                    <p>{this.text.JobDescSAP}</p>
                    <div className="tech-skills">
                        <p className="skill">SAP CPI</p>
                        <p className="skill">API</p>
                        <p className="skill">Groovy script</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ComponentExperienceSAP;