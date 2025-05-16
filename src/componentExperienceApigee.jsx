import React from "react";
import data from '../src/data/en.json';
import 'bootstrap-icons/font/bootstrap-icons.css';



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
                        <p className="skill">Postman
                        </p>
                        <p className="skill">Swagger
                        </p>
                        <p className="skill">Javascript <i class="fa-brands fa-js"></i></p>
                        <p className="skill">Apigee <i class="bi bi-google"></i></p>
                        <p className="skill">SOAP <i class="fa-solid fa-bars-staggered"></i></p>
                        <p className="skill">JSON <i class="bi bi-filetype-json"></i></p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ComponentExperienceApigee;