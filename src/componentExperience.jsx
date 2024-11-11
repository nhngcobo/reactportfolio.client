import React from "react";
import data from '../src/data/en.json';

class ComponentExperience extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentExperience">
                <p>{this.text.jobDescCompB}</p>
            </div>
        )
    }
}

export default ComponentExperience;