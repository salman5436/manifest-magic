import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relativePath: '',
            course: {}
        }

        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)   
    }

    handleTextChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState((state, props) => {
            return {
                course: state.relativePath
            }
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="relativePath">Relative Path</label>
                    <input type="text" id="relativePath" value={this.state.relativePath} onChange={this.handleTextChange} />
                    
                    
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