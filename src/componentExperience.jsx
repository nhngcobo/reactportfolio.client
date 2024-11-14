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
                <p className="duration">2024 - Present</p>
                <div>
                    <p>Deloiite Consulting</p>
                    <p>Software Engineer</p>
                    <p>{this.text.jobDescCompB}</p>
                    <div className="tech-skills">
                        <p className="skill">C#</p>
                        <p className="skill">React JS</p>
                        <p className="skill">CSS</p>
                        <p className="skill">SQL</p>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default ComponentExperience;