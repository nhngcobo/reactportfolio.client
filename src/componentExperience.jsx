import React from "react";
import data from '../src/data/en.json';
import jspLogo from '../src/assets/icons8-react.svg';


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
                    <p>Deloitte Consulting</p>
                    <p>Software Engineer</p>
                    <p>{this.text.jobDescCompB}</p>
                    <div className="tech-skills">
                        <p className="skill">C# .NET
                        </p>
                        <p className="skill">React JS
                            <img
                                src={jspLogo}
                                style={{ height: "1.3rem" }}
                            />
                        </p>
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