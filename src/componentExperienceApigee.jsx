import React from "react";
import data from '../src/data/en.json';

class ComponentExperienceApigee extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentExperience">
                <p className="duration-apigee">2020 - 2023</p>
                <div>
                    <p>Integration Developer</p>
                    <p>{this.text.jobDescApigee}</p>
                </div>
                
            </div>
        )
    }
}

export default ComponentExperienceApigee;