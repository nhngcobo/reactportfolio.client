import React from "react";
import linkedInlogo from '../src/assets/icons8-linkedin-50.png';
import githubLogo from '../src/assets/icons8-github.svg';
import codewarsLogo from '../src/assets/icons8-codewars.svg';

class ComponentAfooter extends React.Component {
    render() {
        return (
            <div className="ComponentAfooter">
                <a href="https://www.linkedin.com/in/nhlanhla-fortune-ngcobo-71072a166" target="_blank"><img src={linkedInlogo} alt="Logo" /></a>
                <a href="https://github.com/nhngcobo" target="_blank"><img src={githubLogo} alt="Logo" /></a>
                <a href="https://www.codewars.com/users/nfortunengcobo@gmail.com" target="_blank"><img src={codewarsLogo} alt="Logo"/></a>
            </div>
        )
    }
}

export default ComponentAfooter;