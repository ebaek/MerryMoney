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

                        <div className="links-buttons">
                            <div className="personal-links">
                                <a href="https://www.linkedin.com/in/ebaek5/" id="linkedin">LinkedIn</a>
                                <a href="https://github.com/ebaek" id="github">Github</a>
                            </div>
                        
                            <div className="login-signup-buttons">
                                <button onClick={this.loginRedirect} className='login-redirect-button'>
                                    Log In</button>
                                <button onClick={this.signupRedirect} className='signup-redirect-button'>
                                    Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="splash-scroll">
                    <section className="first">
                        <div className="invest-commission-blurb">
                            <h1>Invest <br /> Commission-Free</h1>
                            <h3>Invest in stocks, ETFs, options, and cryptocurrencies, all commission-free, right from your phone or desktop.</h3>
                            <br />
                            <button onClick={this.signupRedirect} className='signup-redirect-button smaller-button'>
                                Sign Up</button>
                        </div>
                        <img src="https://cdn.robinhood.com/assets-about/6b2e66f81aef0f0d7dbeef37392e0eca.png" class="invest-com-free" alt="iPhones with MerryMoney app open."></img>
                    </section>
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
