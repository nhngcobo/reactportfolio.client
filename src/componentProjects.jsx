import React from "react";
import data from './data/en.json';

class ComponentProjects extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentProjects">
                <p>{this.text.jobProjects}</p>
            </div>
        )
    }
}

export default ComponentProjects;