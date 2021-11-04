import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Student extends Component {

    async componentDidMount() {
        const resp = await axios.get('http://127.0.0.1:8000/api/students');
        if( resp.data.status === 200 ){
            console.log(resp.data.students);
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Student</h4>
                                <Link to={'add-student'} className="btn btn-primary btn-sm float-end">Add Student</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#</td>
                                            <td>Luis</td>
                                            <td>Martinez</td>
                                            <td>luis@example.com</td>
                                            <td>52</td>
                                        </tr>
                                        <tr>
                                            <td>#</td>
                                            <td>Carlos</td>
                                            <td>Vallarta</td>
                                            <td>carlos@example.com</td>
                                            <td>34</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Student;