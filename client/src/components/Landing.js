import React, { Component } from 'react';
import { users } from './UserFunctions';
import axios from 'axios';
import Users from './Users';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME</h1>
                        <div className="mt-5">
                            <h3 className="text-center font-weight-bold">All Users</h3>
                            <hr style={{ border: "0.5px solid black", width: "75%" }} />
                            <div className="mt-3">
                                <Users />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function displayUser(user) {
    return <h4 key={user.id}>{this.state.users[(user.id - 1)].first_name + " " + this.state.users[(user.id - 1)].last_name}</h4>;
}
 
export default Landing;