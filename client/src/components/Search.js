import React, { Component } from 'react';
import axios from 'axios';
import { users } from './UserFunctions';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            returnedUsers: []
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        axios
        .get('users')
        .then(res => {
            const data = res.data;
            console.log(data);
            data.map(user => {
                if(this.state.first_name === user.first_name && this.state.last_name === user.last_name) {
                    this.setState({ returnedUsers: [...this.state.returnedUsers, user] });
                    console.log(this.state.returnedUsers);
                } else {
                    console.log(`Didn't match User ${user.id}`)
                }
            });
        })
        
    }

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h1 mb-3 font-weight-normal text-center">Search For a User</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                 className="form-control"
                                 name="first_name"
                                 placeholder="Enter First Name"
                                 value={this.state.first_name}
                                 onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                 className="form-control"
                                 name="last_name"
                                 placeholder="Enter Last Name"
                                 value={this.state.last_name}
                                 onChange={this.onChange} />
                            </div>
                            <button 
                            type="submit"
                            className="btn btn-lg mt-5 btn-danger btn-block">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                {this.state.returnedUsers.map(user => {
                    return (
                        <table className="table mt-5 col-md-10 mx-auto">
                            <tr>
                                <td>User</td>
                                <td>{user.id}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{user.first_name} {user.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                        </table>
                    );
                })}
            </div>
        );
    }
}
 
export default Search;