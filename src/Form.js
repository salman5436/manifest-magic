import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relativePath: ''
            
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)   
    }

    handleChange(event) {
        this.setState({relativePath: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.relativePath)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="relativePath">Relative Path</label>
                    <input type="text" id="relativePath" value={this.state.relativePath} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Form

// {
//     type: 'course',
//     relativePath: '',
//     children: [
//         { 
//             relativePath: '~/filePath',
//             type: 'topic',
//             children: [
//                 {
//                     relativePath: '~/filePath',
//                     type: 'asset',
//                     format: 'html | docx | pptx',
//                     hidden: bool
//                 },
//                 {
//                     relativePath: '~/filePath',
//                     type: 'lesson',
//                     children: [
//                         {
//                             type: 'asset',
//                             format: 'html | docx | pptx',
//                             hidden: bool
//                         }
//                     ]
//                 }
//             ],
//             variables: [
//                 { name: '', value: '' }
//             ]
//         },
//         { 
//             type: 'topic',
//             children: [
//             ]
//         }
//     ]
// }