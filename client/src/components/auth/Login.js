import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    
    state = {
        email : "",
        password : "",
        errors : {}
    }
    
    onChange = (event)=>{
        this.setState({
            [event.target.id] : event.target.value
        });
    }
    onSubmit = (event)=>{
        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(`USER LOGGING IN: ${userData}`);
    }

    render(){

        const errors = this.state.errors;

        return(
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link
                            to="/"
                            className="btn-flat waves-effect"
                        >
                            <i className="material-icons left">keyboard_backspace</i>
                            Home
                        </Link>
                        <div className="col s12">
                            <h4>Log in </h4>
                            <p>Don't have an account yet? Register: </p>
                            <Link to="/register">Register</Link>
                        </div>

                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                    type="email"
                                    id="email"
                                />
                                <label htmlFor="email">E-Mail</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    error={errors.password}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Log in 
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;