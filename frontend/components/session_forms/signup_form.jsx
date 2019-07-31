import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", first_name: "", last_name: "", password: "" };
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

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return (
            <div className="signup-form-container">

                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <br />
                    {this.renderErrors()}
                    <div className="signup-form">
                        <h1>Make Your Money Move</h1>
                        <h3>MerryMoney lets you invest in companies you love, commission-free.</h3>

                        <br/>
                        
                        <div className="fl_name">
                            <input type="text"
                                placeholder="First name"
                                onChange={this.update('first_name')}
                                className="signup-input f_name" />

                            <input type="text"
                                placeholder="Last name"
                                onChange={this.update('last_name')}
                                className="signup-input l_name" />
                            <br/>                        
                        </div>

                        <br/>
                        <input type="text"
                            placeholder="Email address"
                            onChange={this.update('email')}
                            className="signup-input" />
                        <br/>

                        <br/>
                        <input type="password"
                            placeholder="Password (min. 10 characters)"
                            onChange={this.update('password')}
                            className="signup-input password" />
                        <br/>

                        <input className="signup-continue" type="submit" value="Continue" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);