import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';


export default class CreateMeeting extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola!!</h1>
            </div>
        )
    }
}

// export default class CreateMeeting extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             meetings: {}
//         }
//       }

//       componentDidMount = () => {
//           console.log(this.props.meeting);
//           this.setState({meetings: this.props.meetings})
//       }

//       handleFormSubmit=(event)=>{
//         const data = this.state.meeting;
//         event.preventDefault();
//         axios.post(`http://localhost:3010/api/meetings/${this.state.meetings}`, {data})
//         .then(res => {
//           console.log(res)
//           return <Redirect to="/meetings"></Redirect>
//         })
//         .catch(e=>console.log("Error",e))
//       }

//       handleChangeProf = (event, type) => {  
//           let meetings = Object.assign({}, this.state.meetings)
//           meetings[type] = event.target.value;
//           this.setState({meetings})
//         }
      
    

//     render() {
//         let {meetings} = this.state;
//         return (
//             <div>
//                 <hr />
//                 <h1>Create a Meeting</h1>
//                 <form onSubmit={this.handleFormSubmit}>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={meetings.name} onChange={e => this.handleChangeProf(e, "name")} />
//                     <label>Description:</label>

//                 <button onClick={this.editProfile}>Submit</button>
//             </form>
//             </div>
//         )
//     }
// }