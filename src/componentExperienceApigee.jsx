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
                    <div className="tech-skills">
                        <p className="skill">Postman</p>
                        <p className="skill">Swagger</p>
                        <p className="skill">Javascript</p>
                        <p className="skill">Google Apigee</p>
                        <p className="skill">SOAP</p>
                        <p className="skill">JSON</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ComponentExperienceApigee;