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
                            <h3>Invest in stocks, ETFs, options, and <br /> cryptocurrencies, all commission-free, <br /> right from your phone or desktop.</h3>
                            <br />
                            <button onClick={this.signupRedirect} className='signup-redirect-button'>
                                Sign Up</button>
                        </div>
                        <img src="https://cdn.robinhood.com/assets-about/6b2e66f81aef0f0d7dbeef37392e0eca.png" class="invest-com-free" alt="iPhones with MerryMoney app open."></img>
                    </section>

                    <section className="second">
                        <h2>Cash management, <br /> coming soon.</h2>
                        <img src={window.catImg} className="cat-pic" alt="flying cat."/>
                    </section>

                    <section className="third">
                        <img src={window.noManualImg} className="no-manual-pic" alt="iPhone with analyst ratings from Merry Money app." />
                        <div className="no-manual-blurb">
                            <h1>No Manual Needed</h1>
                            <h3>Intuitively designed for newcomers and experts alike, 
                            <br /> Robinhood gives you a clear picture of your portfolio’s 
                            <br /> performance over time, so you can adjust your positions 
                            <br /> and learn by doing.</h3>
                        </div>
                    </section>
                </div>
                
                <div className="bottom-splash-scroll">
                    <section className="fourth">
                        <div className="next-level-div">
                            <img src={window.nextLevelImg} className="next-level-pic" alt="iPhones with stock performance charts from Merry Money app." />
                        </div>

                        <div className="next-level-blurb">
                            <h1>Next Level Investing</h1>
                            <h3>Access professional research reports, trade on margin, and <br />
                                make bigger instant deposits with Robinhood Gold—all starting <br />
                                at $5 a month.</h3>
                        </div>
                    </section>

                    <section className="fifth">
                        <div className="keep-tabs-blurb">
                            <h1>Keep Tabs on the <br /> Market</h1>
                            <h3>Access tools and features such as price movement <br />
                                notifications and customized investment news so you <br />
                                can find the right moment to invest.</h3>
                        </div>

                        <div className="keep-tabs-div">
                            <img src={window.keepTabsImg} className="keep-tabs-pic" alt="iPhone displaying collection of stock performances, popular collecrtions, and recent news on Merry Money app." />
                        </div>

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
