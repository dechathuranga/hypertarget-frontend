import Head from 'next/head'
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import Script from 'next/script';
import Image from 'next/image';

export default function Home() {

    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.click();
    }, []);

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hypertarget</title>
                {/* <!-- favicon --> */}
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                {/* <!-- bootstrap  --> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                {/* <!-- owl carousel --> */}
                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
                {/* <!-- custom css --> */}
                <link rel="stylesheet" href="assets/css/steps.css" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <link rel="stylesheet" href="assets/css/responsive.css" />
                <link rel="stylesheet" href="assets/css/code.css" />
                <script async src="https://www.google-analytics.com/analytics.js" />
            

            </Head>


            <body className="bg-lightblue">
                <header>
                    <nav className="main-nav">
                        <div className="nav-wrapper">
                            <div className="logo-wrapper">
                                 <Image src="assets/images/logo.svg" alt="" />
                            </div>
                            <div className="right-side">
                                <div className="search-bar-wrapper">
                                     <Image src="assets/images/search-icon.png" alt="" />
                                    <input type="text" placeholder="Search" name="" id="" />
                                </div>
                                <span className="notifi">
                                     <Image src="assets/images/notifi.png" alt="" />
                                </span>
                                <a href="">
                                    <div className="profile-wrap">
                                        <div className="profile-img">
                                             <Image src="assets/images/profile.jpg" alt="" />
                                        </div>
                                        <div className="profile-det">
                                            <h5 className="name">
                                                John Doe
                                </h5>
                                            <p className="desig">CEO</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>


                <div className="sec-wrapper pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="main-title">
                                    User Journey Dashboard
                    </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 mt-100">
                                 <Image src="assets/images/stack.png" className="img-fluid stack" alt="" />
                                <h2 className="main-title text-center pd-30">
                                    User Journey Dashboard
                    </h2>
                                <div className="text-center mt-5">
                                    <button className="btn bordered filter-btn" data-bs-toggle="modal" data-bs-target="#addFilter">
                                         <Image src="assets/images/filter-icon.svg" alt="" />
                                        add filter
                                </button>
                                    <a ref={buttonRef} data-bs-toggle="modal" data-bs-target="#completeAlert" className="cta"><i
                                        className="fa fa-plus"></i>&nbsp;ADD A JOURNEY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Modal --> */}
                <div className="modal info-modal fade" id="completeAlert" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                 <Image style={{marginLeft: 'auto', marginRight: 'auto' }} src="assets/images/check-big.svg" alt="" />
                                <h4 className="head">Installation Complete!</h4>
                                <button className="btn-blue" onclick="location.href='addjourney.html';">
                                    Create Your first journey
                    </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Jquery Script v --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                {/* <!-- jquery step js --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.js"></script>
                {/* <!-- jquery validate --> */}
                <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.js"></script>
                {/* <!-- bootstrp --> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
                {/* <!-- custom js --> */}
                <script src="assets/js/app.js"></script>
                {/* <script>
    $(document).ready(function(){
        $("#completeAlert").modal('show');
    });
</script> */}
            </body>

        </div >
    )
}
