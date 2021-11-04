import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Student extends Component {

    state = {
        students: [],
        loading: true,
    }

    async componentDidMount() {
        const resp = await axios.get('http://127.0.0.1:8000/api/students');
        
        if( resp.data.status === 200 ){
            console.log(resp.data.students);
            this.setState({
                students: resp.data.students,
                loading : false,
            });
        }

    }

    render() {

        var student_HTMLTABLE="";
        if(this.state.loading){
            student_HTMLTABLE = <tr>
                <td colSpan="7">Loading</td>
            </tr>;
        }else{
            student_HTMLTABLE = this.state.students.map( (item) => { 
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td>
                            <Link to={`edit-student/${item.id}`} className="btn btn-warning btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }

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
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { student_HTMLTABLE }
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