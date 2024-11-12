import React from "react";
import linkedInlogo from '../src/assets/icons8-linkedin-50.png';
import githubLogo from '../src/assets/icons8-github.svg';
import codewarsLogo from '../src/assets/icons8-codewars.svg';

class ComponentAfooter extends React.Component {
    // Function to open an external window
    openWindowToExternalDomain = (url) => {
        url && window.open(url, url)
    }

    render() {
        return (
            <div className="ComponentAfooter">
                <img
                    src={linkedInlogo}
                    alt="LinkedIn Logo"
                    onClick={() => this.openWindowToExternalDomain("https://www.linkedin.com/in/nhlanhla-fortune-ngcobo-71072a166")}
                    style={{ cursor: "pointer" }}
                />
                <img
                    src={githubLogo}
                    alt="GitHub Logo"
                    onClick={() => this.openWindowToExternalDomain("https://github.com/nhngcobo")}
                    style={{ cursor: "pointer" }}
                />
                <img
                    src={codewarsLogo}
                    alt="Codewars Logo"
                    onClick={() => this.openWindowToExternalDomain("https://www.codewars.com/users/nfortunengcobo@gmail.com")}
                    style={{ cursor: "pointer" }}
                />
            </div>
        );
    }
}

export default ComponentAfooter;
