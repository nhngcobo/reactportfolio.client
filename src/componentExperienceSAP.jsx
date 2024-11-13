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
                </div>
                
            </div>
        )
    }
}

export default ComponentExperienceSAP;