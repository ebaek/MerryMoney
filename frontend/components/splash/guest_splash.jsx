import React from 'react';
import { withRouter } from 'react-router-dom';


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
                        <img src="https://cdn.robinhood.com/assets-about/6b2e66f81aef0f0d7dbeef37392e0eca.png" className="invest-com-free" alt="iPhones with MerryMoney app open."></img>
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
                            <br /> MerryMoney gives you a clear picture of your portfolio’s 
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
                                make bigger instant deposits with MerryMoney Gold—all starting <br />
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
                            <img src={window.keepTabsImg} className="keep-tabs-pic" alt="iPhone displaying collection of stock performances, popular collections, and recent news on Merry Money app." />
                        </div>
                    </section>

                    
                    <section className="sixth">
                        <div className="trusted-div">

                            <div className="eagle-div">
                                <img src={window.trustedImg} className="trusted-pic" alt="Sprite of patriotic American eagle holding baseball bat and under three stars." />
                            </div>
                            
                            <div className="trusted-blurb">
                                <h1>Trusted by Millions <br /> in the USA</h1>
                                <h3>MerryMoney is a member of SIPC, which protects securities customers of its  <br />
                                    members up to $500,000 (including $250,000 for claims for cash).  <br />
                                    Explanatory brochure available upon request or at <a href="https://www.sipc.org/">www.sipc.org.</a></h3>
                            </div>
                        </div>
                    </section>

                    <section className="seventh">
                        <div className="get-started-div">

                            <div className="get-started-blurb">
                                <h1>Get Started</h1>
                                <h3>It only takes a few minutes to take control of your financial future. Sign up now to <br />
                                    start investing with MerryMoney.</h3>
                            </div>
                            
                            <div className="get-started-button">
                                <button onClick={this.signupRedirect} className='signup-redirect-button'>
                                    Sign Up</button>
                            </div>
                        </div>
                    </section>

                    <div className="eight">
                        <div>
                            <p>
                                MerryMoney Financial LLC and MerryMoney Crypto, LLC are wholly-owned subsidiaries of MerryMoney Markets, Inc. Equities and options are offered to self-directed customers by MerryMoney Financial. MerryMoney Financial is a member of the <a href="https://www.finra.org/">Financial Industry Regulatory Authority (FINRA)</a> and the <a href="https://www.sipc.org/">Securities Investor Protection Corporation (SIPC)</a>, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at <a href="https://www.finra.org/">Financial Industry Regulatory Authority (FINRA)</a> and the <a href="https://www.sipc.org/">www.sipc.org</a>. Cryptocurrency trading is offered through an account with MerryMoney Crypto. MerryMoney Crypto is not a member of FINRA or SIPC. Cryptocurrencies are not stocks and your cryptocurrency investments are not protected by either FDIC or SIPC insurance. <br /> <br />
                                Getting “early access” to options or Web is defined as signing up with a valid email address for a spot in MerryMoney Financial’s respective waitlist queues for Web or for options. Getting “early access” to MerryMoney Crypto is defined as signing up with a valid email address for a spot in MerryMoney Crypto’s waitlist queue. Early access to the waitlist for Web, options, or MerryMoney Crypto should in no way be construed as confirmation that a brokerage account with MerryMoney Financial has been opened or will even be approved for opening. Priority may be given to MerryMoney Gold subscribers and existing customers of MerryMoney Financial. <br /> <br />
                                Free trading of stocks and options refers to $0 commissions for MerryMoney Financial self-directed individual cash or margin brokerage accounts that trade U.S. listed securities via mobile devices or Web. Relevant SEC & <a href="https://www.finra.org/">FINRA</a> fees may apply. Please see the Commission and Fee Schedule. <br /> <br />
                                MerryMoney Financial is currently registered in the following jurisdictions. This is not an offer, solicitation of an offer, or advice to buy or sell securities, or open a brokerage account in any jurisdiction where MerryMoney Financial is not registered. Additional information about your broker can be found by clicking <a href="https://www.sec.gov/investor/alerts/etfs.pdf">here</a>. <br /> <br />
                                Margin trading involves interest charges and risks, including the potential to lose more than deposited or the need to deposit additional collateral in a falling market. Before using margin, customers must determine whether this type of trading strategy is right for them given their specific investment objectives, experience, risk tolerance, and financial situation. For more information please see MerryMoney Financial’s Margin Disclosure Statement, Margin Agreement and FINRA Investor Information. These disclosures contain information on MerryMoney Financial’s lending policies, interest charges, and the risks associated with margin accounts. <br /> <br />
                                Investors should consider the investment objectives and unique risk profile of Exchange Traded Funds (ETFs) carefully before investing. ETFs are subject to risks similar to those of other diversified portfolios. Leveraged and Inverse ETFs may not be suitable for all investors and may increase exposure to volatility through the use of leverage, short sales of securities, derivatives and other complex investment strategies. <br /> <br />
                                Although ETFs are designed to provide investment results that generally correspond to the performance of their respective underlying indices, they may not be able to exactly replicate the performance of the indices because of expenses and other factors. A prospectus contains this and other information about the ETF and should be read carefully before investing. Customers should obtain prospectuses from issuers and/or their third party agents who distribute and make prospectuses available for review. ETFs are required to distribute portfolio gains to shareholders at year end. These gains may be generated by portfolio rebalancing or the need to meet diversification requirements. ETF trading will also generate tax consequences. Additional regulatory guidance on Exchange Traded Products can be found by clicking here. <br /> <br />
                                Options transactions may involve a high degree of risk. Please review the options disclosure document entitled the Characteristics and Risks of Standardized Options available through <a href="https://www.theocc.com">www.theocc.com</a> to learn more about the risks associated with options trading. <br /> <br />
                                The cash management program is expected to be offered by MerryMoney Financial LLC. The cash management program, when operational, will be an added program to MerryMoney brokerage accounts and will not be a separate account or a bank account. MerryMoney Financial will provide additional information on the cash management program once it is operational to help customers, including those with “early access,” to determine if they want to add the program to their brokerage account. <br /> <br />
                                MerryMoney Snacks newsletters and podcasts reflect the opinions of only the authors who are associated persons of MerryMoney Financial LLC and do not reflect the views of MerryMoney Markets, Inc. or any of its subsidiaries or affiliates. They are meant for informational purposes only, are not intended to serve as a recommendation to buy or sell any security in a self-directed MerryMoney account or any other account, and are not an offer or sale of a security. They are also not research reports and are not intended to serve as the basis for any investment decision. Any third-party information provided therein does not reflect the views of MerryMoney Markets, Inc., MerryMoney Financial LLC, or any of their subsidiaries or affiliates. All investments involve risk and the past performance of a security or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk, it does not assure a profit or protect against loss. There is always the potential of losing money when you invest in securities or other financial products. Investors should consider their investment objectives and risks carefully before investing. The price of a given security may increase or decrease based on market conditions and customers may lose money, including their original investment. MerryMoney Financial LLC, member FINRA/SIPC. <br /> <br />
                                Testimonials may not be representative of the experience of other customers and are not guarantees of future performance or success. MerryMoney Financial LLC, member FINRA/SIPC.
                            </p>
                        </div>

                        <div>
                            <p>
                                Third party information provided for product features, communications, and communications emanating from social media communities, market prices, data and other information available through MerryMoney Markets, Inc., MerryMoney Financial LLC or MerryMoney Crypto, LLC are meant for informational purposes only and are not intended as an offer or solicitation for the purchase or sale of any financial instrument or cryptocurrency or as an official confirmation of any transaction. The information provided is not warranted as to completeness or accuracy and is subject to change without notice. Any information about MerryMoney Crypto on any MerryMoney website (including <a href="https://merrymoney.herokuapp.com/">www.merrymoney.herokuapp.com</a> and blog.merrymoney.com), the MerryMoney platform, e-mails, or any other communications, are meant for informational purposes only and are not intended as an offer, solicitation, or advertisement for MerryMoney Crypto or any goods or services offered by MerryMoney Crypto. The MerryMoney website provides its users links to social media sites and email. The linked social media and email messages are pre-populated. However, these messages can be deleted or edited by users, who are under no obligation to send any pre-populated messages. Any comments or statements made herein do not reflect the views of MerryMoney Markets Inc., MerryMoney Financial LLC, MerryMoney Crypto, LLC, or any of their subsidiaries or affiliates. <br /> <br />
                                Investors should be aware that system response, execution price, speed, liquidity, market data, and account access times are affected by many factors, including market volatility, size and type of order, market conditions, system performance, and other factors. <br /> <br />
                                All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities, or other financial products. Investors should consider their investment objectives and risks carefully before investing. <br /> <br />
                                Cryptocurrency is a digital representation of value that functions as a medium of exchange, a unit of account, or a store of value, but it does not have legal tender status. Cryptocurrencies are sometimes exchanged for U.S. dollars or other currencies around the world, but they are not currently backed nor supported by any government or central bank. Their value is completely derived by market forces of supply and demand, and they are more volatile than traditional currencies. Trading in cryptocurrencies comes with significant risks, including volatile market price swings or flash crashes, market manipulation, and cybersecurity risks. In addition, cryptocurrency markets and exchanges are not regulated with the same controls or customer protections available in equity, option, futures, or foreign exchange investing. Cryptocurrency trading requires knowledge of cryptocurrency markets. In attempting to profit through cryptocurrency trading, you must compete with traders worldwide. You should have appropriate knowledge and experience before engaging in substantial cryptocurrency trading. Cryptocurrency trading may not generally be appropriate, particularly with funds drawn from retirement savings, student loans, mortgages, emergency funds, or funds set aside for other purposes. Cryptocurrency trading can lead to large and immediate financial losses. Under certain market conditions, you may find it difficult or impossible to liquidate a position quickly at a reasonable price. This can occur, for example, when the market for a particular cryptocurrency suddenly drops, or if trading is halted due to recent news events, unusual trading activity, or changes in the underlying cryptocurrency system. Several federal agencies have also published advisory documents surrounding the risks of virtual currency. For more information see, the <a href="https://files.consumerfinance.gov/f/201408_cfpb_consumer-advisory_virtual-currencies.pdf">CFPB’s Consumer Advisory</a>, the <a href="https://www.cftc.gov/sites/default/files/idc/groups/public/@customerprotection/documents/file/customeradvisory_urvct121517.pdf">CFTC’s Customer Advisory</a>, the <a href="https://www.investor.gov/additional-resources/news-alerts/alerts-bulletins/investor-alert-bitcoin-other-virtual-currency">SEC’s Investor Alert</a>, and <a href="http://www.finra.org/investors/alerts/bitcoin-more-bit-risky">FINRA’s Investor Alert</a>. <br /> <br />
                                MerryMoney Crypto, LLC has a seller of payment instruments license in Georgia, with reference number 61417. <br />
                                MerryMoney Crypto, LLC has a money transmitter license in New Jersey, with reference number 1803456-C22. <br />
                                Please note that an Alaska money transmission license does not cover the transmission of virtual currency. <br />
                                Check the background of MerryMoney Financial LLC and MerryMoney Securities, LLC on <a href="https://brokercheck.finra.org/">FINRA’s BrokerCheck</a>. <br />
                                © 2019 MerryMoney. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(GuestSplash);
