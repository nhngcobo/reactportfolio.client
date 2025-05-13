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
                        <p className="skill">C# .NET <i class="fa-solid fa-code"></i></p>
                        <p className="skill">React JS <i class="fa-brands fa-js"></i></p>
                        <p className="skill">CSS  <i class="bi bi-filetype-css"></i></p>
                        <p className="skill">SQL  <i class="fa-solid fa-database"></i></p>
                        <p className="skill">DevOps  <i class="bi bi-git"></i></p>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default ComponentExperience;