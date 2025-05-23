import React from "react";
import data from '../src/data/en.json';
import '@fortawesome/fontawesome-free/css/all.min.css';


class ComponentAboutUser extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentAboutUser">
                <p>{this.text.jobDesc}</p>
                <p>{this.text.jobDescB}</p>
                <p>{this.text.jobDescF}<i className="fa-solid fa-volleyball fa-bounce"></i>{this.text.jobDescFB}</p>
            </div>
        )
    }
}

export default ComponentAboutUser;