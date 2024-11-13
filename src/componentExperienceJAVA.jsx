import React from "react";
import data from '../src/data/en.json';

class ComponentExperienceJAVA extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentExperience">
                <p className="duration-java">2023 - 2023</p>
                <div>
                    <p>Software Engineer</p>
                    <p>{this.text.jobDescJAVA}</p>
                </div>
                
            </div>
        )
    }
}

export default ComponentExperienceJAVA;