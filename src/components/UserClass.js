import React from 'react';
import { UserContext } from '../utility/userContext';

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            count: 0,
            count2:0
        }

        console.warn(this.props.childet + "Child Constructor is called");

    }

    componentDidMount() {
        console.warn(this.props.childet+ "Child did mount Component is called");
    }

    render() {

        
        
        const {name, location, contact, childet} = this.props;
        //const {count, count2} = this.state;
        console.warn(childet+ "Child render is called");
        return (<div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Location : {location}</h2>
            <h2>Contact: {contact}</h2>
            <UserContext.Consumer >{(data)=>(<h2>{data.name}</h2>)}</UserContext.Consumer>
            {/* <h3>
                <span>Count increased by 1 : {count}</span>
            </h3>
            <button onClick={()=> this.setState({count: count+1})} >Change count</button> */}
        </div>)
    }
}

export default UserClass;