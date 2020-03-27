import React, { Component } from 'react';
import { users } from './UserFunctions';
import axios from 'axios';

class Users extends Component {
    state = {
        users: []
    }

    getUsers = _ => {
        axios
        .get('users')
        .then(res => {
            this.setState({ users: res.data });
            console.log(this.state.users);
        })
        .catch(err => console.log("Error: " + err))
        return this.state.users;
    }

    displayUsers = user => {
        return (
        <h1 key={user.id}>{user.first_name} {user.last_name}</h1>
        );
    }

    render() { 
        return (
            <div>
                {this.getUsers().map(user => {
                    return <p className="text-center font-weight-medium" key={user.id}>User {user.id}: {user.first_name} {user.last_name}</p>
                })}
            </div>
        );
    }
}
 
export default Users;