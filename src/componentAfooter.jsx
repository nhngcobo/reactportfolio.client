import React from "react";
import linkedInlogo from '../src/assets/icons8-linkedin-50.png';
import githubLogo from '../src/assets/icons8-github.svg';
import codewarsLogo from '../src/assets/icons8-codewars.svg';

class ComponentAfooter extends React.Component {
    render() {
        return (
            <div className="ComponentAfooter">
                <img src={linkedInlogo} alt="Logo" />
                <img src={githubLogo} alt="Logo" />
                <img src={codewarsLogo} alt="Logo"/>
            </div>
        )
    }
}

export default ComponentAfooter;