import User from './User';
import { Component } from 'react';
import UserClass from './UserClass';
import { useFetch } from "../utility/useFetch";

class ContactUs extends Component {
    constructor(props) {
        super(props);
        console.warn("parent Constructor is called");
    }

    componentDidMount() {
        console.warn("parent Component is called");
    }
    render() {

        console.warn("parent render is called");

        return (
            <>
                <div>Contact US</div>
                {/* <User name={'shilpa'} location={'Chandigarh'} contact={'7678542231'} /> */}
                <UserClass name={'shilpa from class'} location={'Chandigarh'} contact={'7678542231'} childet={"first"}/>
                {/* <UserClass name={'shilpa from class'} location={'Chandigarh'} contact={'7678542231'} childet={"second"}/> */}
            </>
          )

    }
}

export default ContactUs;