import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class AddStudent extends Component {

    state  = {
        name: '',
        lastname: '',
        email : '',
        age : '',
        error_list : [],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    saveStudent = async (e) => {
        e.preventDefault();
        /* Cosumir api desde Api Rest laravel */
        const resp = await axios.post('http://127.0.0.1:8000/api/add-student', this.state);
        
        if( resp.data.status === 200 ){
            Swal.fire({
                title: 'Success',
                text: resp.data.message,
                icon: 'success',
                confirmButtonText: 'OK!'
            }).then( (result) => {

                /* Vaciar campos */
                this.setState({
                    name: '',
                    lastname: '',
                    email : '',
                    age : ''
                });

                this.props.history.push("/");
                
            });            
        }else{
            this.setState({
                error_list : resp.data.validate_err,
            });
        }

    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Student</h4>
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveStudent}>
                                    
                                    {/* Nombre */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="name" className="form-label">Name</label> 
                                          <input type="text" name="name" id="name" onChange={this.handleInput} value={this.state.name} 
                                          className="form-control" placeholder="Input name" aria-describedby="iname" />
                                          <small id="iname" className="text-muted">Only characters. </small>
                                          <small id="iname-error" className="text-danger">{this.state.error_list.name}</small> <br />
                                        </div>
                                    </div>

                                    {/* Apellido */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="lastname" className="form-label">Last name</label>
                                          <input type="text" name="lastname" id="lastname" onChange={this.handleInput} value={this.state.lastname}
                                          className="form-control" placeholder="Last name" aria-describedby="ilastname" />
                                          <small id="ilastname" className="text-muted">Only characters. </small>
                                          <small id="ilastname-error" className="text-danger">{this.state.error_list.lastname}</small> <br />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="email" className="form-label">Email</label>
                                          <input type="text" name="email" id="email" onChange={this.handleInput} value={this.state.email}
                                          className="form-control" placeholder="email" aria-describedby="iEmail" />
                                          <small id="iEmail" className="text-muted">Only characters. </small>
                                          <small id="iemail-error" className="text-danger">{this.state.error_list.email}</small> <br />
                                        </div>
                                    </div>


                                    {/* Age */}
                                    <div className="form-group mb-3">
                                        <div className="mb-3">
                                          <label htmlFor="age" className="form-label">Age</label>
                                          <input type="number" name="age" id="age" onChange={this.handleInput} value={this.state.age}
                                          className="form-control" placeholder="Age" aria-describedby="iage" />
                                          <small id="iage" className="text-muted">Only characters. </small>
                                          <small id="iage-error" className="text-danger">{this.state.error_list.age}</small> <br />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Create Student</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddStudent;