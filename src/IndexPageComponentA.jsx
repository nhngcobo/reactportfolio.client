import React from "react";
import data from '../src/data/en.json';

class IndexPageComponentA extends React.Component {
    constructor(props){
      super(props)
      this.text = data
    }
    render() {
      return(
      <>
      <h1>{this.text.fullnames}</h1>  
      <h3>{this.text.occupation}</h3>
      <p>{this.text.jobDesc}</p>
      </>
      )
    }
}

export default IndexPageComponentA;