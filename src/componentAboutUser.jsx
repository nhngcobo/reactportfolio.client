import React from "react";
import data from '../src/data/en.json';

class ComponentAboutUser extends React.Component {

    constructor(props) {
        super(props);
        this.text = data;
      }

      
    render() {
        return (
            <div className="ComponentAboutUser">
                <p>{this.text.jobDesc}</p>
                <p>{this.text.jobDesc}</p>
                <p>{this.text.jobDesc}</p>
            </div>
        )
    }
}

export default ComponentAboutUser;