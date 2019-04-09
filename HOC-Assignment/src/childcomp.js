import React, { Component } from 'react'
import AuthContext from './AuthContext';
import InjectAuth from './InjectAuth';

class ChildComp extends Component {



    render() {

        return (
            <div>
                <h1>child component</h1>
                <h1>Value of 'isAuthenticated' property  {this.props.isAuthenticated.toString()}</h1>
            </div>

        )
    }
}
ChildComp.contextType = AuthContext;
export default  InjectAuth(ChildComp);


