import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
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
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div className="login-form-container">
                <div className="login-form-img">
                    <img src={window.loginImg}/>
                </div>

                <form onSubmit={this.handleSubmit} className="login-form-box">
                <br/>
                    {this.renderErrors()}
                    <div className="login-form">
                        <h2>Welcome to MerryMoney</h2>
                        
                        <label>Email or Username</label>
                        <br/>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"/>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"/>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);