import React from "react";
import data from './data/en.json';
import construction from '../src/assets/icons8-under-construction-96.png';


class ComponentProjects extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentProjects">
                <p>{this.text.jobProjects} <img className="construction"
                                                src={construction}
                                           /></p>
            </div>
        )
    }
}

export default ComponentProjects;