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
        const icon = (this.props.errors.length === 0) ? null : (<i className="fas fa-exclamation-circle"></i>);

        return (
            <div className="invalid-credentials">
                {icon}
                {this.props.errors.map((error) => (
                    <p key={`error-${error.index}`}>{error}</p>
                ))}
            </div>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return (
            <div className="signup-form-container">
                <div>
                    <h1 id="logo-header">
                        <i className="fas fa-money-bill"></i>
                        MerryMoney
                    </h1>
                </div>   
            
            <form onSubmit={this.handleSubmit} className="signup-form-box">
            
            <br/>
            
            <div className="signup-form">
                    <br/>
                    <h1 className="money-move">Make Your Money Move</h1>
                    <h3>MerryMoney lets you invest in companies you love, commission-free.</h3>

                    <br/>
                    
                    <div className="fl_name">
                        <input type="text"
                            placeholder="First name"
                            onChange={this.update('first_name')}
                            className="signup-input f_name" 
                            required/>

                        <input type="text"
                            placeholder="Last name"
                            onChange={this.update('last_name')}
                            className="signup-input l_name" 
                            required/>
                        <br/>                        
                    </div>

                    <br/>
                    <input type="email"
                        placeholder="Email address"
                        onChange={this.update('email')}
                        className="signup-input" 
                        required/>
                    <br/>

                    <br/>
                    <input type="password"
                        placeholder="Password (min. 6 characters)"
                        onChange={this.update('password')}
                        className="signup-input password" 
                        required/>
                    <br/>

                    {this.renderErrors()}

                    <input className="signup-continue" type="submit" value="Continue" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);