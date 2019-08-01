import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.signupRedirect = this.signupRedirect.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        const icon = (this.props.errors.length === 0) ? null : (<i className="fas fa-exclamation-circle"></i>) ;

        return (
            <div className="invalid-credentials">
                { icon }
                {this.props.errors.map((error) => (
                    <p key={`error-${error.index}`}>{error}</p>
                ))}
            </div>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    signupRedirect(e) {
        e.preventDefault();
        this.props.history.push('/signup');
    }

    // loginDemoUser(e) {
    //     e.preventDefault();
    //     this.props.login({ email: 'batman34@gmail.com', password: 'watermelon'}).then(
    //         () => this.props.history.push("/")
    // }

    render() {
        return (
            <div className="login-form-container">
                <div className="login-form-img">
                    <img src={window.loginImg}/>
                </div>

                <div className="login-form-box">
                    <form onSubmit={this.handleSubmit}>
                    <br/>
                        <div className="login-form">
                            <h2>Welcome to MerryMoney</h2>
                            
                            <label>Email or Username</label>
                            <br/>
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input" 
                                required/>
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input" 
                                required/>

                            <br/>
                            
                            <button onClick={this.signupRedirect} className='redirect-button'>
                                Forgot your username/password?</button>

                            {this.renderErrors()}

                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                
                </div>

            </div>
        );
    }
}

export default withRouter(SessionForm);