import React from 'react'

import './App.css';
import Form from './Form'

const dataFromSomewhere = {
  courses: [0, 1, 2]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {courses : dataFromSomewhere.courses}

  }
  
  render(){
    return (
      <div>
          {this.state.courses.map((course, index) => {
            return (
              <Form key={index} />
            )
          })}
      </div>
    );
  }
}

export default App;
