import axios from 'axios';
import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class EditStudent extends Component  {

    state  = {
        name: '',
        lastname: '',
        email : '',
        age : ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    async componentDidMount () {
        const id_student = this.props.match.params.id;
        const resp = await axios.get(`http://127.0.0.1:8000/api/edit-student/${id_student}`);

        if( resp.data.student !== null && resp.data.status === 200 ){
            this.setState({
                name : resp.data.student.name,
                lastname : resp.data.student.lastname,
                email : resp.data.student.email,
                age : resp.data.student.age
            });
        }else{
            alert("Student no found.");
            window.location.href = "/";
        }

    }

    updateStudent = async (e) => {
        e.preventDefault();

        document.getElementById('btn-update').innerText = "Updating...";
        const id_student = this.props.match.params.id;
        const resp = await axios.put(`http://127.0.0.1:8000/api/update-student/${id_student}`, this.state);

        if( resp.data.status === 200  ){
            alert(resp.data.message);
            document.getElementById('btn-update').innerText = "Update Student";
        }
        
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Student</h4>
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateStudent}>
                                    
                                    {/* Nombre */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="name" className="form-label">Name</label>
                                          <input type="text" name="name" id="name" onChange={this.handleInput} value={this.state.name} 
                                          className="form-control" placeholder="Input name" aria-describedby="iname" />
                                          <small id="iname" className="text-muted">Only characters</small>
                                        </div>
                                    </div>

                                    {/* Apellido */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="lastname" className="form-label">Last name</label>
                                          <input type="text" name="lastname" id="lastname" onChange={this.handleInput} value={this.state.lastname}
                                          className="form-control" placeholder="Last name" aria-describedby="ilastname" />
                                          <small id="ilastname" className="text-muted">Only characters</small>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="email" className="form-label">Email</label>
                                          <input type="text" name="email" id="email" onChange={this.handleInput} value={this.state.email}
                                          className="form-control" placeholder="email" aria-describedby="iEmail" />
                                          <small id="iEmail" className="text-muted">Only characters</small>
                                        </div>
                                    </div>


                                    {/* Age */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="age" className="form-label">Age</label>
                                          <input type="number" name="age" id="age" onChange={this.handleInput} value={this.state.age}
                                          className="form-control" placeholder="Age" aria-describedby="iage" />
                                          <small id="iage" className="text-muted">Only characters</small>
                                        </div>
                                    </div>

                                    <button type="submit" id="btn-update" className="btn btn-primary">Update Student</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStudent;