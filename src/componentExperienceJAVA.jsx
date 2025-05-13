import React from "react";
import data from '../src/data/en.json';
import jspLogo from '../src/assets/icons8-jsp-64.png';

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
                    <div className="tech-skills">
                        <p className="skill">JAVA <i class="fa-brands fa-java"></i></p>
                        <p className="skill">JSP
                            <img
                                src={jspLogo}
                                style={{height:"1.3rem"}}
                            />
                        </p>
                        <p className="skill">CSS  <i class="bi bi-filetype-css"></i></p>
                        <p className="skill">SQL  <i class="fa-solid fa-database"></i></p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ComponentExperienceJAVA;