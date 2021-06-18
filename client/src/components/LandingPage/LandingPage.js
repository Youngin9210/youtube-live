import React, { Component } from 'react';
import logo from '../../images/logo.svg'
import './css/bootstrap.min.css'
import './css/ionicons.min.css'
import './css/style.css'
import './css/bootstrap/mixins/_visibility.css'
import './fonts/ionicons/css/ionicons.min.css'
import './fonts/ionicons/fonts/ionicons.svg'


const LandingPage = () => {
    return(
        <div>
            <body>
                <img className="logo" src={logo}/>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center js-fullheight">
                            <div className="col-md-6 text-center d-flex align-items-center">
                                <div className="wrap w-100">
                                    <h2 className="navbar-logo">YouTube.Live</h2>
                                    <p>Great Live Music. Period</p>
                                    <button type="button" className="btn btn-primary py-3 px-4" data-toggle="modal" data-target="#exampleModalCenter">Join Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="modal fade" id= "exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="ion-ios-close"></span>
                                </button>
                            </div>
                            <div className="row">
                                <div className="col-md mb-md-0 mb-5">
                                    <div className="modal-body p-0">
                                        <h3 className="mb-4">Sign In</h3>
                                        <form action="#" class="signin-form">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Username"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Password"/>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                            </div>
                                            <div className="form-group d-md-flex">
                                                <div className="form-check w-50">
                                                    <label className="custom-control fill-checkbox">
                                                        <input type="checkbox" className="fill-control-input"/>
                                                        <span className="fill-control-indicator"></span>
                                                        <span className="fill-control-description">Remember Me</span>
                                                    </label>
                                                </div>
                                                <div className="w-50 text-md-right">
                                                    <a href="#" style={{color: "#fff"}}>Forgot Password</a>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                                        <div className="social d-flex text-center">
                                            <a href="#" className="px-2 py-3 mr-md-1 rounded"><span className="ion-logo-google mr-2"></span>Google</a>
                                            <a href="#" class="px-2 py-3 ml-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Facebook</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1-divider">
                                    <div className="col-md">
                                        <div className="modal-body p-0">
                                            <h3 className="mb-4">Sign Up</h3>
                                            <form action="#" className="signup-form"/>
                                        </div>
                                        <div className="form-group">   
                                            <input type="text" class="form-control" placeholder="First Name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email address"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
                                        </div>
                                        <div className="form-group">
                                            <div className="w-100">
                                                <p className="mb-0">By creating an account, you agree to our terms.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>


        
    )
}


export default LandingPage;
