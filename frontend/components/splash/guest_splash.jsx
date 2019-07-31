import React from 'react';
import { Link } from 'react-router-dom';

class GuestSplash extends React.Component {
    constructor(props) {
        super(props)

        this.homepageRedirect = this.homepageRedirect.bind(this);
        this.loginRedirect = this.loginRedirect.bind(this);
        this.signupRedirect = this.signupRedirect.bind(this);
    }

    homepageRedirect(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    loginRedirect(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }

    signupRedirect(e) {
        e.preventDefault();
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="esther-links">
                        <button className="splash-header" onClick={this.homepageRedirect}>
                            <i className="fas fa-money-bill"></i>
                            MerryMoney
                        </button>
                
                        <a href="https://www.linkedin.com/in/ebaek5/" id="linkedin">LinkedIn</a>
                        <a href="https://github.com/ebaek" id="github">Github</a>
                    
                        <div>
                            <button onClick={this.loginRedirect} className='login-redirect-button'>
                                Log In</button>
                            <button onClick={this.signupRedirect} className='signup-redirect-button'>
                                Sign Up</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }


    // sessionLinks = () => (
    //     <nav className="login-signup">
    //         <Link to="/login">Login</Link>
    //         &nbsp;
    //         <Link to="/signup">Sign Up</Link>
    //     </nav>
    // )

    // personalGreeting = () => (
    //     <hgroup className="header-group">
    //         <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
    //         <button className="header-button" onClick={logout}>Log Out</button>
    //     </hgroup>
    // )

    // return currentUser ? personalGreeting() : sessionLinks();
}

export default GuestSplash;
