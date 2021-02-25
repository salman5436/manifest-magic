import React from 'react'

import './App.css';
import Form from './Form'

const newCourseObj = {
  name: 'Hi I am new',
  relativePath: 'new/'
}

const dataFromSomewhere = {
    courses: [
    {
      name: 'one',
      relativePath: 'one/',
    }, {
      name: 'two',
      relativePath: 'two/',
    }, {
      name: 'three',
      relativePath: 'three/',
    }
]
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {courses : dataFromSomewhere.courses}
  }

  // we need to update here
  updateManifest = (updatedData, index) => {
    this.setState(prevState => {

      prevState.courses[index] = Object.assign(prevState.courses[index],{relativePath: updatedData})
      console.log(prevState.courses);

      return {courses: prevState.courses}
    })
  }

  addCourse =  (event) => {
    this.setState((prevState) => {
      prevState.courses.splice(event.target.id + 1, 0, newCourseObj)
      console.log(prevState.courses);
      return prevState.courses
    })
  }

  removeCourse = () => {
    console.log('clicked remove')
  }

  render(){
    return (
      <div className="container">
          {this.state.courses.map((course, index) => {

            return (
              <div key={index} className="form-container">
                <Form
                data={course}
                updateManifest={this.updateManifest}
                index={index} />
                <div>
                {/* <button onClick={this.addCourse} id={index}>+</button>
                  <button onClick={this.removeCourse} id={index}>-</button> */}
                </div>

              </div>
            )
          })}
          <pre><code>{JSON.stringify(this.state.courses)}</code></pre>
      </div>
    );
  }
}

export default App;
